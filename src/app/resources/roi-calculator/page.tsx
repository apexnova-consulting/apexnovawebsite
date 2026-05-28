'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Printer } from 'lucide-react';

function CurrencyInput({
  label, value, onChange, prefix = '$', suffix, hint,
}: {
  label: string; value: number; onChange: (v: number) => void;
  prefix?: string; suffix?: string; hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#F0F0FF] mb-1">{label}</label>
      {hint && <p className="text-xs text-[#5A5A72] mb-2">{hint}</p>}
      <div className="flex items-center" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 10 }}>
        {prefix && (
          <span className="pl-3 text-sm text-[#5A5A72]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{prefix}</span>
        )}
        <input
          type="number"
          min={0}
          value={value || ''}
          onChange={e => onChange(parseFloat(e.target.value) || 0)}
          className="flex-1 bg-transparent px-3 py-3 text-[#F0F0FF] text-sm outline-none"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        />
        {suffix && (
          <span className="pr-3 text-xs text-[#5A5A72]">{suffix}</span>
        )}
      </div>
    </div>
  );
}

function ResultCard({ label, value, sub, color }: { label: string; value: string; sub?: string; color: string }) {
  return (
    <div className="card p-5 text-center" style={{ borderColor: `${color}25`, background: `${color}06` }}>
      <p className="text-xs text-[#5A5A72] mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{label}</p>
      <p className="text-2xl font-black" style={{ fontFamily: 'Syne, sans-serif', color }}>{value}</p>
      {sub && <p className="text-xs text-[#9898B0] mt-1">{sub}</p>}
    </div>
  );
}

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState({
    hoursPerWeek: 10,
    hourlyRate: 75,
    leadsPerMonth: 20,
    missedLeadPct: 30,
    avgDealValue: 1500,
    noShowPct: 15,
    appointmentsPerMonth: 30,
  });

  const set = (key: keyof typeof inputs, val: number) =>
    setInputs(prev => ({ ...prev, [key]: val }));

  // Calculations
  const weeksPerYear = 52;
  const annualHoursFreed = inputs.hoursPerWeek * weeksPerYear;
  const annualTimeSavingsValue = annualHoursFreed * inputs.hourlyRate;

  const leadsRecoveredPerMonth = Math.round(inputs.leadsPerMonth * (inputs.missedLeadPct / 100));
  const annualLeadRevenue = leadsRecoveredPerMonth * inputs.avgDealValue * 12 * 0.20; // 20% close rate

  const noShowsReducedPerMonth = Math.round(inputs.appointmentsPerMonth * (inputs.noShowPct / 100) * 0.40); // 40% reduction
  const annualNoShowRecovery = noShowsReducedPerMonth * (inputs.avgDealValue * 0.5) * 12;

  const totalAnnualBenefit = annualTimeSavingsValue + annualLeadRevenue + annualNoShowRecovery;
  const conservativeROI = totalAnnualBenefit * 0.6;

  const estimatedInvestment = 3500; // mid-range AI Business tier
  const roiMultiple = totalAnnualBenefit / estimatedInvestment;

  const fmt = (n: number) =>
    n >= 1000
      ? `$${(n / 1000).toFixed(1)}k`
      : `$${Math.round(n).toLocaleString()}`;

  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-24">
        <div className="container-site max-w-3xl">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors mb-8">
            <ArrowLeft size={13} /> Back to Resources
          </Link>

          <p className="section-label mb-3">{'// ROI Calculator'}</p>
          <h1 className="text-[#F0F0FF] mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: 'Syne, sans-serif', fontWeight: 800, lineHeight: 1.1 }}>
            What could AI actually save you?
          </h1>
          <p className="text-[#9898B0] mb-10" style={{ lineHeight: 1.7 }}>
            Enter your numbers below. All calculations are conservative estimates based on typical client results.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            {/* Input Section */}
            <div className="card p-7 flex flex-col gap-5">
              <div>
                <h2 className="text-[#F0F0FF] font-bold mb-4 text-sm uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#E8A020' }}>
                  Your Current Situation
                </h2>
              </div>
              <CurrencyInput
                label="Hours/week spent on repetitive manual tasks"
                value={inputs.hoursPerWeek}
                onChange={v => set('hoursPerWeek', v)}
                prefix=""
                suffix="hrs/wk"
                hint="Scheduling, follow-ups, data entry, answering the same questions"
              />
              <CurrencyInput
                label="Value of your time (hourly rate)"
                value={inputs.hourlyRate}
                onChange={v => set('hourlyRate', v)}
                hint="Your billing rate, or what you'd pay an employee for this work"
              />
              <CurrencyInput
                label="New leads per month"
                value={inputs.leadsPerMonth}
                onChange={v => set('leadsPerMonth', v)}
                prefix=""
                suffix="leads"
              />
              <CurrencyInput
                label="Estimated % of leads missed after hours"
                value={inputs.missedLeadPct}
                onChange={v => set('missedLeadPct', Math.min(100, v))}
                prefix=""
                suffix="%"
                hint="Leads that don't get a response within 5 minutes"
              />
              <CurrencyInput
                label="Average value of a new client"
                value={inputs.avgDealValue}
                onChange={v => set('avgDealValue', v)}
                hint="Average project, sale, or case value"
              />
              <CurrencyInput
                label="Appointments or jobs per month"
                value={inputs.appointmentsPerMonth}
                onChange={v => set('appointmentsPerMonth', v)}
                prefix=""
                suffix="/mo"
              />
              <CurrencyInput
                label="Current no-show / cancellation rate"
                value={inputs.noShowPct}
                onChange={v => set('noShowPct', Math.min(100, v))}
                prefix=""
                suffix="%"
              />
            </div>

            {/* Results */}
            <div className="flex flex-col gap-4">
              <div className="card p-6" style={{ borderColor: 'rgba(43,107,229,0.3)', background: 'rgba(43,107,229,0.06)' }}>
                <p className="text-xs text-[#5A5A72] mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Estimated Annual Benefit
                </p>
                <p className="text-5xl font-black mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#2B6BE5' }}>
                  {fmt(totalAnnualBenefit)}
                </p>
                <p className="text-xs text-[#9898B0]">total value of AI automation per year</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <ResultCard
                  label="Time savings value"
                  value={fmt(annualTimeSavingsValue)}
                  sub={`${annualHoursFreed} hrs/yr freed`}
                  color="#E8A020"
                />
                <ResultCard
                  label="Recovered lead revenue"
                  value={fmt(annualLeadRevenue)}
                  sub={`${leadsRecoveredPerMonth} leads/mo recovered`}
                  color="#4C6FC7"
                />
                <ResultCard
                  label="No-show recovery"
                  value={fmt(annualNoShowRecovery)}
                  sub="40% reduction assumed"
                  color="#2B6BE5"
                />
                <ResultCard
                  label="Conservative estimate"
                  value={fmt(conservativeROI)}
                  sub="60% of projected value"
                  color="#F0A514"
                />
              </div>

              <div
                className="card p-5"
                style={{ background: 'rgba(43,107,229,0.05)', borderColor: 'rgba(43,107,229,0.2)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-[#5A5A72]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    ROI vs. typical AI Business investment (~$3,500)
                  </p>
                </div>
                <div className="flex items-end gap-3">
                  <p className="text-3xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#2B6BE5' }}>
                    {roiMultiple.toFixed(1)}×
                  </p>
                  <p className="text-xs text-[#9898B0] mb-1">return in year one</p>
                </div>
                <div className="h-2 rounded-full bg-white/5 mt-3 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${Math.min(100, (roiMultiple / 20) * 100)}%`, background: 'linear-gradient(90deg, #2B6BE5, #E8A020)' }}
                  />
                </div>
              </div>

              <div className="text-xs text-[#5A5A72] leading-relaxed p-3 rounded-xl" style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-subtle)' }}>
                <strong className="text-[#9898B0]">Methodology:</strong> Time savings based on your hours × rate × 52 weeks. Lead recovery assumes 20% close rate on recovered leads. No-show reduction assumes 40% improvement from automated reminders.
              </div>
            </div>
          </div>

          <div className="card p-7 text-center" style={{ background: 'rgba(43,107,229,0.05)', borderColor: 'rgba(43,107,229,0.2)' }}>
            <h3 className="text-[#F0F0FF] text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to turn these numbers into a real plan?
            </h3>
            <p className="text-[#9898B0] text-sm mb-5 max-w-md mx-auto">
              Book a free AI Audit and we&apos;ll go through your specific numbers together — and show you exactly which AI tools would generate the fastest ROI for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary">
                Book a Free AI Audit <ArrowRight size={14} />
              </Link>
              <button onClick={() => window.print()} className="btn-secondary text-sm">
                <Printer size={14} /> Print Results
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

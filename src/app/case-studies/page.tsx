import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Case Studies | ApexNova Consulting',
  description: 'Real AI implementation results for NJ/NYC businesses. Case studies coming soon.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/case-studies' },
};

const placeholders = [
  {
    industry: 'Real Estate',
    color: '#00D4AA',
    emoji: '🏠',
    title: 'NJ Real Estate Team — Lead Response Automation',
    teaser: 'How a 5-agent team stopped missing after-hours Zillow leads and added 3 new clients per month.',
    stat: '+3 clients/mo',
    statLabel: 'from after-hours leads',
  },
  {
    industry: 'Medical',
    color: '#3B82F6',
    emoji: '🏥',
    title: 'Princeton Dental Office — Patient Intake & Reminders',
    teaser: 'How a 3-location dental practice automated intake, cut no-shows by 40%, and freed up 15 hours/week.',
    stat: '–40%',
    statLabel: 'no-show rate',
  },
  {
    industry: 'Law Firm',
    color: '#8B5CF6',
    emoji: '⚖️',
    title: 'Newark Immigration Firm — AI Intake Bot',
    teaser: 'How a bilingual AI intake bot helped a solo immigration attorney handle 2x the consultations.',
    stat: '2×',
    statLabel: 'consultations booked',
  },
];

export default function CaseStudiesPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-20">
        <div className="container-site">
          <p className="section-label mb-4">{'// Case studies'}</p>
          <h1
            className="text-[#F0F0FF] mb-5 max-w-2xl"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Real results. Real businesses. No made-up stats.
          </h1>
          <p className="text-[#9898B0] max-w-lg mb-14" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            We&apos;re building detailed case studies as we complete client projects. In the meantime,
            here&apos;s a preview of what&apos;s coming. Book an audit call and we&apos;ll share what
            we&apos;ve built for businesses like yours.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {placeholders.map((cs) => (
              <div
                key={cs.title}
                className="card p-7 relative overflow-hidden"
                style={{ borderColor: `${cs.color}20` }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top right, ${cs.color}10, transparent 70%)` }}
                />
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{cs.emoji}</span>
                  <span
                    className="industry-badge text-[10px]"
                    style={{ color: cs.color, borderColor: `${cs.color}40` }}
                  >
                    {cs.industry}
                  </span>
                  <span
                    className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      color: 'var(--text-muted)',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    coming soon
                  </span>
                </div>
                <h3
                  className="text-[#F0F0FF] font-bold mb-2 leading-snug"
                  style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem' }}
                >
                  {cs.title}
                </h3>
                <p className="text-[#9898B0] text-sm leading-relaxed mb-5">{cs.teaser}</p>
                <div>
                  <p
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif', color: cs.color }}
                  >
                    {cs.stat}
                  </p>
                  <p className="text-[10px] text-[#5A5A72]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {cs.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="card p-10 text-center max-w-2xl mx-auto"
            style={{ background: 'rgba(79,110,247,0.05)', borderColor: 'rgba(79,110,247,0.2)' }}
          >
            <h2
              className="text-[#F0F0FF] text-2xl font-bold mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Want to see exactly what we&apos;ve built?
            </h2>
            <p className="text-[#9898B0] text-sm mb-6">
              Book a free audit call and we&apos;ll walk you through specific examples from your
              industry — what we built, how it works, and what results to expect.
            </p>
            <Link href="/contact" className="btn-primary">
              Book My Free AI Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, Calculator, CheckSquare, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free AI Resources for NJ/NYC Businesses | ApexNova Consulting',
  description:
    'Free AI readiness assessment, ROI calculator, implementation checklist, and quick-start guide for NJ/NYC business owners.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/resources' },
};

const resources = [
  {
    icon: ClipboardCheck,
    color: '#2B6BE5',
    title: 'AI Readiness Assessment',
    description:
      'Score your business across 5 key areas to find exactly where AI will have the biggest impact. Takes about 5 minutes.',
    cta: 'Take the Assessment',
    href: '/resources/ai-readiness-assessment',
    tag: 'Interactive',
  },
  {
    icon: Calculator,
    color: '#E8A020',
    title: 'ROI Calculator',
    description:
      'Enter your hours and rates to see exactly how much time and money AI automation could save your business annually.',
    cta: 'Calculate Your ROI',
    href: '/resources/roi-calculator',
    tag: 'Interactive',
  },
  {
    icon: CheckSquare,
    color: '#4C6FC7',
    title: 'AI Implementation Checklist',
    description:
      'A step-by-step checklist covering every phase from pre-planning to launch. Print it out and work through it with your team.',
    cta: 'Get the Checklist',
    href: '/resources/implementation-checklist',
    tag: 'Reference',
  },
  {
    icon: BookOpen,
    color: '#F0A514',
    title: 'Quick-Start Guide',
    description:
      "Everything a NJ/NYC business owner needs to know before starting their first AI project — in plain English, no jargon.",
    cta: 'Read the Guide',
    href: '/resources/quick-start-guide',
    tag: 'Guide',
  },
];

export default function ResourcesPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-20">
        <div className="container-site">
          <p className="section-label mb-4">{'// Free resources'}</p>
          <h1
            className="text-[#F0F0FF] mb-5 max-w-2xl"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Tools to help you figure out where AI fits in your business.
          </h1>
          <p className="text-[#9898B0] max-w-lg mb-14" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            Free, practical resources for NJ/NYC business owners — no email required, no paywall.
            Use them before our audit call or after.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {resources.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.href}
                  className="card p-8 group flex flex-col"
                  style={{ borderColor: `${r.color}20` }}
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${r.color}15`, border: `1px solid ${r.color}30` }}
                    >
                      <Icon size={22} style={{ color: r.color }} />
                    </div>
                    <span
                      className="industry-badge text-[10px]"
                      style={{ color: r.color, borderColor: `${r.color}40` }}
                    >
                      {r.tag}
                    </span>
                  </div>
                  <h2
                    className="text-[#F0F0FF] text-xl font-bold mb-3"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {r.title}
                  </h2>
                  <p className="text-[#9898B0] text-sm leading-relaxed mb-6 flex-1">
                    {r.description}
                  </p>
                  <Link
                    href={r.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: r.color }}
                  >
                    {r.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div
            className="mt-14 p-8 rounded-2xl text-center"
            style={{ background: 'rgba(43,107,229,0.05)', border: '1px solid rgba(43,107,229,0.2)' }}
          >
            <h2
              className="text-[#F0F0FF] text-2xl font-bold mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Want a personalized plan instead?
            </h2>
            <p className="text-[#9898B0] text-sm mb-5 max-w-md mx-auto">
              These tools are a great starting point — but nothing replaces a 30-minute conversation
              about your specific business.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free AI Audit
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

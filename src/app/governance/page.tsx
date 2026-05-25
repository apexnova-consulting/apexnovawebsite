import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Shield, FileCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Governance & Compliance Services | ApexNova Consulting',
  description:
    'AI governance, compliance auditing, and regulatory advisory services for healthcare, real estate, and SaaS. HIPAA, NJDPA, and AI risk management.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/governance' },
};

export default function GovernancePage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-20">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <p className="section-label mb-4">{'// Governance services'}</p>
            <h1
              className="text-[#F0F0FF] mb-5"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                lineHeight: 1.1,
              }}
            >
              AI Governance & Compliance Advisory
            </h1>
            <p className="text-[#9898B0] mb-10" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              In addition to our AI implementation work, ApexNova offers governance and compliance
              advisory for organizations that need to meet regulatory requirements around AI use,
              data privacy, and security. These services are available as add-ons to implementation
              projects or as standalone engagements.
            </p>

            <div className="grid md:grid-cols-3 gap-5 mb-12">
              {[
                {
                  icon: Shield,
                  color: '#4F6EF7',
                  title: 'AI Risk Assessment',
                  desc: 'Evaluate your current AI tools and workflows against industry risk frameworks. Identify gaps before they become problems.',
                },
                {
                  icon: FileCheck,
                  color: '#00D4AA',
                  title: 'Compliance Auditing',
                  desc: 'HIPAA, NJDPA, and AI use policy audits for healthcare, real estate, and legal organizations.',
                },
                {
                  icon: Lock,
                  color: '#7C3AED',
                  title: 'Policy Development',
                  desc: 'Custom AI use policies, vendor evaluation frameworks, and staff training programs.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="card p-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <h3
                      className="text-[#F0F0FF] font-semibold mb-2"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[#9898B0] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div
              className="card p-7 mb-8"
              style={{ background: 'rgba(79,110,247,0.05)', borderColor: 'rgba(79,110,247,0.2)' }}
            >
              <h2
                className="text-[#F0F0FF] text-xl font-bold mb-3"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Who uses governance services?
              </h2>
              <p className="text-[#9898B0] text-sm leading-relaxed mb-3">
                Governance engagements are typically appropriate for organizations that:
              </p>
              <ul className="space-y-2">
                {[
                  'Are subject to HIPAA, NJDPA, or other data privacy regulations',
                  'Handle sensitive client data (medical, financial, legal)',
                  'Have adopted AI tools without a formal review process',
                  'Need documentation for insurance, audit, or client compliance purposes',
                  'Are considering enterprise AI adoption and need a risk framework first',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#9898B0]">
                    <span className="text-[#4F6EF7] mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Ask About Governance Services
                <ArrowRight size={15} />
              </Link>
              <Link href="/" className="btn-secondary">
                ← Back to Main Site
              </Link>
            </div>

            <p className="text-xs text-[#5A5A72] mt-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Note: AI governance services are a secondary offering. Our primary focus is AI
              implementation for NJ/NYC businesses. See the main site for our core services.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Wrench, Users, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | ApexNova Consulting — NJ-Based AI Implementation',
  description:
    "ApexNova is a boutique AI implementation firm based in Lambertville, NJ. Real builds, real people, close enough to meet at your office.",
  alternates: { canonical: 'https://www.apexnovaconsulting.com/about' },
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Hero */}
      <section className="pt-28 pb-20" style={{ background: 'var(--bg-base)' }}>
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-4">{'// Who we are'}</p>
              <h1
                className="text-[#F0F0FF] mb-6"
                style={{
                  fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  lineHeight: 1.1,
                }}
              >
                Real builds. Real humans.{' '}
                <span className="gradient-text">Based right here in NJ.</span>
              </h1>

              <div className="space-y-4 text-[#9898B0]" style={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                <p>
                  ApexNova Consulting was founded on a simple frustration: too many small businesses
                  were being sold AI hype and getting nothing that actually worked.
                </p>
                <p>
                  We&apos;re a boutique AI implementation firm based in Lambertville, NJ — close enough
                  to drive to your office, technical enough to build tools that last.
                </p>
                <p>
                  We come from IT consulting and web development. We&apos;ve built websites, deployed AI
                  chatbots, and automated workflows for real clients. We&apos;re not a governance
                  paper-factory or an offshore dev shop. We&apos;re builders who happen to work in your
                  backyard.
                </p>
                <p>
                  Our focus is narrow on purpose. We don&apos;t try to serve Fortune 500 companies or
                  replace your entire tech stack. We find the part of your business that&apos;s bleeding
                  time or missing leads and we fix it with AI.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-6 text-sm text-[#5A5A72]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <MapPin size={13} className="text-[#2B6BE5]" />
                Lambertville, NJ — Serving NJ &amp; NYC Tri-State
              </div>
            </div>

            {/* Right side — values/facts */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: Code,
                  color: '#2B6BE5',
                  title: "We're builders, not consultants",
                  desc: "When you hire us, you get working software — not a PowerPoint deck full of recommendations. We build, deploy, and support.",
                },
                {
                  icon: MapPin,
                  color: '#E8A020',
                  title: 'Local is a feature, not a footnote',
                  desc: "We can meet at your office. We know the NJ/NYC market. We understand the pace of a real estate team in Hoboken or a law firm in Newark. That context is part of what we build.",
                },
                {
                  icon: Wrench,
                  color: '#1A2E6E',
                  title: 'Narrow focus, deep craft',
                  desc: "We don't try to do everything. We do AI chatbots, workflow automation, and web development — and we do them well.",
                },
                {
                  icon: Users,
                  color: '#F0A514',
                  title: "You'll work with the person who builds it",
                  desc: "There's no account manager between you and the builder. When you have a question, you talk to the person who wrote the code.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="card p-5 flex items-start gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                    >
                      <Icon size={18} style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3
                        className="text-[#F0F0FF] font-semibold text-sm mb-1"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[#9898B0] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-site">
          <div
            className="card p-8 md:p-10 max-w-3xl mx-auto text-center"
            style={{ background: 'rgba(43,107,229,0.06)', borderColor: 'rgba(43,107,229,0.2)' }}
          >
            <p className="section-label mb-4 justify-center flex">{'// Why local matters'}</p>
            <h2
              className="text-[#F0F0FF] text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Most AI firms you&apos;ll find online are remote, offshore, or enterprise-only.
            </h2>
            <p className="text-[#9898B0] leading-relaxed">
              We can meet you at your office. We know the NJ/NYC market. We understand the pace of a
              real estate team in Hoboken, a medical practice in Princeton, or a law firm in Newark.
              That context — knowing the local business environment, the client expectations, the pace —
              is part of what we build into every tool.
            </p>
            <p className="text-[#9898B0] mt-3 leading-relaxed">
              We also work with businesses that enterprise firms won&apos;t even return calls to. If
              you&apos;re a 10-person law firm or a single-location dental office, you&apos;re exactly who
              we built this for.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-site text-center">
          <h2
            className="text-[#F0F0FF] text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Want to see how we work?
          </h2>
          <p className="text-[#9898B0] mb-6 max-w-md mx-auto">
            Book a free 30-minute AI Audit. No pitch — just a real conversation about your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Book My Free AI Audit
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  );
}

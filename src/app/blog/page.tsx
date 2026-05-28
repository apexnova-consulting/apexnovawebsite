import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | AI for NJ & NYC Businesses | ApexNova Consulting',
  description:
    'Practical AI guides and automation tips for NJ/NYC real estate agents, medical practices, law firms, and local businesses.',
};

const plannedPosts = [
  '5 AI Tools Every NJ Real Estate Agent Should Know in 2026',
  'How a Princeton Dental Office Automated 80% of Patient Reminders',
  'The Complete Guide to AI Intake Bots for NJ Law Firms',
  'Why Your Business Should Have a Missed-Call Text-Back System',
  'Make vs. Zapier vs. n8n: Which Automation Tool is Right for Your Business?',
  'AI Chatbots for Local Businesses: What Works, What Doesn\'t',
];

export default function BlogPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-20">
        <div className="container-site">
          <p className="section-label mb-4">{'// Blog & resources'}</p>
          <h1
            className="text-[#F0F0FF] mb-5 max-w-2xl"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Practical AI guides for NJ/NYC businesses.
          </h1>
          <p className="text-[#9898B0] max-w-lg mb-12" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            No hype, no jargon. Just practical guidance on AI tools and automation for real estate
            teams, medical practices, law firms, and local businesses.
          </p>

          {/* Coming soon state */}
          <div
            className="card p-10 text-center max-w-2xl mx-auto mb-12"
            style={{ background: 'rgba(43,107,229,0.04)', borderColor: 'rgba(43,107,229,0.15)' }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(43,107,229,0.1)', border: '1px solid rgba(43,107,229,0.25)' }}
            >
              <BookOpen size={24} className="text-[#2B6BE5]" />
            </div>
            <h2
              className="text-[#F0F0FF] text-xl font-bold mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Content coming soon
            </h2>
            <p className="text-[#9898B0] text-sm mb-6">
              We&apos;re currently building out our content library. Subscribe below to be notified
              when the first guides go live.
            </p>
            <div className="flex gap-2 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input-field flex-1 text-sm"
              />
              <button className="btn-primary text-sm py-2.5 px-4 whitespace-nowrap">
                Notify Me
              </button>
            </div>
          </div>

          {/* Planned content preview */}
          <div>
            <p
              className="section-label mb-5"
              style={{ color: 'var(--text-muted)' }}
            >
              {'// What\'s coming'}
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {plannedPosts.map((post) => (
                <div
                  key={post}
                  className="card p-4 flex items-center gap-3"
                  style={{ opacity: 0.6 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
                  >
                    <BookOpen size={13} className="text-[#5A5A72]" />
                  </div>
                  <p className="text-sm text-[#9898B0]">{post}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact" className="btn-primary">
              Book a Free AI Audit Instead
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

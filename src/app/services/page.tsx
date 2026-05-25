import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Clock, MessageSquare, Zap, Brain, Globe, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | AI Chatbots, Automation & Web Development | ApexNova Consulting',
  description:
    'Custom AI chatbots, workflow automation, website development, and AI integration for NJ & NYC businesses. Clear pricing, fast delivery.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/services' },
};

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Lead Capture',
    tagline: 'Never miss another inquiry — ever.',
    color: '#4F6EF7',
    whoItsFor: 'Any business that gets leads through their website, social media, or phone calls.',
    whatsIncluded: [
      'Custom-trained AI chatbot (knows your business, products, pricing)',
      'Lead qualification and routing logic',
      'Appointment booking integration',
      'Website and social media deployment',
      'Live chat escalation to human when needed',
      'Weekly performance report',
    ],
    timeline: '1–2 weeks',
    startingPrice: '$500',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    tagline: 'Stop doing the same thing twice.',
    color: '#00D4AA',
    whoItsFor: 'Businesses with repetitive manual tasks: follow-ups, reminders, data entry, notifications.',
    whatsIncluded: [
      'Workflow mapping session (we document your current process)',
      'Automation build on Make, Zapier, or n8n',
      'CRM and tool integration',
      'Testing and quality check',
      'Team training and documentation',
      '30-day monitoring and adjustment',
    ],
    timeline: '1–3 weeks',
    startingPrice: '$750',
  },
  {
    icon: Brain,
    title: 'Custom AI Assistants',
    tagline: 'Internal AI that actually knows your business.',
    color: '#7C3AED',
    whoItsFor:
      'Businesses that want AI tools for their team — not just customers. Document Q&A, onboarding, research, internal support.',
    whatsIncluded: [
      'AI assistant trained on your documents, policies, and data',
      'Custom knowledge base setup',
      'Team interface (web app or embedded tool)',
      'User access controls',
      'Integration with existing tools',
      'Training and documentation',
    ],
    timeline: '2–4 weeks',
    startingPrice: '$1,500',
  },
  {
    icon: Globe,
    title: 'Website + AI Integration',
    tagline: 'A site that converts, with AI built in.',
    color: '#F59E0B',
    whoItsFor:
      'Businesses that need a new website or want AI tools integrated into their existing site.',
    whatsIncluded: [
      'Custom website design and development (Next.js)',
      'Mobile-first, fast-loading, SEO-ready',
      'AI chatbot integrated into the site',
      'Lead capture forms and CRM connection',
      'Analytics and conversion tracking setup',
      '90-day post-launch support',
    ],
    timeline: '3–5 weeks',
    startingPrice: '$3,500',
  },
  {
    icon: RefreshCw,
    title: 'AI Maintenance Retainer',
    tagline: 'Your AI should keep getting better.',
    color: '#F59E0B',
    whoItsFor: 'Past ApexNova clients who want ongoing optimization, updates, and new automations.',
    whatsIncluded: [
      'Monthly performance review and optimization',
      'New automation or feature each month',
      'Priority support (same-day response)',
      'Quarterly strategy call',
      'New tool integrations as your stack evolves',
      'Monthly reporting',
    ],
    timeline: 'Ongoing',
    startingPrice: '$750/mo',
  },
];

export default function ServicesPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: 'var(--bg-base)' }}>
        <div className="container-site">
          <p className="section-label mb-3">{'// What we build'}</p>
          <h1
            className="text-[#F0F0FF] mb-5 max-w-2xl"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Every service. Clear pricing. Fast delivery.
          </h1>
          <p className="text-[#9898B0] max-w-lg" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
            We don&apos;t sell retainers before delivering value. Every engagement starts with a free
            AI Audit so you know exactly what you&apos;re buying before you spend a dollar.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="container-site">
          <div className="flex flex-col gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="card p-8 group"
                  style={{
                    background: idx % 2 === 0 ? 'var(--glass-bg)' : `${service.color}04`,
                    borderColor: idx % 2 === 0 ? 'var(--glass-border)' : `${service.color}20`,
                  }}
                >
                  <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left info */}
                    <div className="lg:col-span-2">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          background: `${service.color}15`,
                          border: `1px solid ${service.color}30`,
                        }}
                      >
                        <Icon size={22} style={{ color: service.color }} />
                      </div>
                      <h2
                        className="text-[#F0F0FF] text-2xl font-bold mb-2"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-[#9898B0] text-sm mb-5">{service.tagline}</p>
                      <div className="flex flex-wrap gap-4 mb-5">
                        <div>
                          <p
                            className="text-[10px] uppercase tracking-widest text-[#5A5A72] mb-0.5"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                          >
                            Starting at
                          </p>
                          <p
                            className="text-xl font-bold"
                            style={{ color: service.color, fontFamily: 'Syne, sans-serif' }}
                          >
                            {service.startingPrice}
                          </p>
                        </div>
                        <div>
                          <p
                            className="text-[10px] uppercase tracking-widest text-[#5A5A72] mb-0.5"
                            style={{ fontFamily: 'JetBrains Mono, monospace' }}
                          >
                            Typical timeline
                          </p>
                          <div className="flex items-center gap-1.5">
                            <Clock size={13} style={{ color: service.color }} />
                            <p className="text-sm font-medium text-[#F0F0FF]">{service.timeline}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="p-4 rounded-xl mb-5"
                        style={{ background: `${service.color}08`, border: `1px solid ${service.color}20` }}
                      >
                        <p
                          className="text-[10px] uppercase tracking-widest mb-1"
                          style={{ fontFamily: 'JetBrains Mono, monospace', color: service.color }}
                        >
                          Who it&apos;s for
                        </p>
                        <p className="text-sm text-[#9898B0]">{service.whoItsFor}</p>
                      </div>
                      <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                        Get Started
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                    {/* Right — features */}
                    <div className="lg:col-span-3">
                      <p
                        className="text-[10px] uppercase tracking-widest text-[#5A5A72] mb-4"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        What&apos;s included
                      </p>
                      <ul className="space-y-3">
                        {service.whatsIncluded.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check
                              size={14}
                              className="mt-0.5 flex-shrink-0"
                              style={{ color: service.color }}
                            />
                            <span className="text-sm text-[#9898B0]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-14 p-10 rounded-3xl text-center"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
            }}
          >
            <h2
              className="text-[#F0F0FF] text-3xl font-bold mb-3"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Not sure which service fits?
            </h2>
            <p className="text-[#9898B0] mb-6 max-w-md mx-auto">
              That&apos;s what the free AI Audit is for. We map your workflow, find the biggest
              opportunity, and give you a clear recommendation.
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

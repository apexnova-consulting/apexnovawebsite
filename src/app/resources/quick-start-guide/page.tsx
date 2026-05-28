import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PrintButton from '@/components/ui/PrintButton';

export const metadata: Metadata = {
  title: 'AI Quick-Start Guide for NJ/NYC Businesses | ApexNova Consulting',
  description:
    'Everything a NJ/NYC business owner needs to know before starting their first AI project — plain English, no jargon.',
};

const sections = [
  {
    number: '01',
    color: '#2B6BE5',
    title: 'What AI can actually do for a small business in 2026',
    content: [
      {
        heading: "Let's be clear about what we mean",
        body: `When most people hear "AI for business," they picture either a sci-fi robot or a ChatGPT tab they open occasionally. Neither is what we're talking about.\n\nPractical business AI in 2026 means: software that watches for specific triggers (a new inquiry, a completed appointment, a form submission) and automatically takes action — sending a message, updating a record, booking a slot, routing a request — without a human needing to touch it.\n\nThink of it as a very smart employee who works 24 hours a day, never forgets a follow-up, and doesn't call in sick.`,
        bullets: undefined as string[] | undefined,
      },
      {
        heading: 'The highest-value use cases for SMBs right now',
        body: '',
        bullets: [
          '**Lead response bots** — respond to every new inquiry within 90 seconds, even at 2am',
          '**Appointment booking** — let customers self-schedule without back-and-forth',
          '**Automated follow-up sequences** — keep leads warm without manual effort',
          '**Intake automation** — collect client information before the first meeting',
          '**Review request campaigns** — automatically ask satisfied customers for reviews',
          '**FAQ chatbots** — answer the same questions so your staff doesn\'t have to',
        ],
      },
      {
        heading: "What AI can't do (yet)",
        body: `AI handles predictable, structured conversations and tasks very well. It struggles with highly nuanced situations requiring real judgment, emotional sensitivity, or access to information it hasn't been trained on. The key is designing AI tools that handle what they're good at and hand off to humans cleanly when they're not.`,
        bullets: undefined,
      },
    ],
  },
  {
    number: '02',
    color: '#E8A020',
    title: 'How to identify your first AI project',
    content: [
      {
        heading: 'Start with the pain, not the technology',
        body: `The businesses that get the most from AI don't start by asking "what can AI do?" They start by asking "what is costing us the most time or money right now?"\n\nThe best first AI project is usually the one that:\n\n1. Happens frequently (daily, not monthly)\n2. Follows a predictable pattern\n3. Doesn't require a lot of human judgment\n4. Currently takes meaningful time from you or your staff`,
        bullets: undefined,
      },
      {
        heading: 'The 15-minute audit you can do yourself',
        body: '',
        bullets: [
          'List every task your business does more than 3 times per week',
          'Circle the ones that follow the same pattern every time',
          'Star the ones that take more than 20 minutes each',
          'The starred + circled items are your AI candidates',
        ],
      },
      {
        heading: 'Common first projects by industry',
        body: '',
        bullets: [
          '**Real estate:** Lead response bot for after-hours Zillow/website inquiries',
          '**Medical practices:** Appointment reminder and no-show reduction sequence',
          '**Law firms:** 24/7 intake bot that qualifies and books consultations',
          '**Contractors:** Missed-call text-back with quote request automation',
          '**Salons/gyms:** Booking confirmation + review request automation',
        ],
      },
    ],
  },
  {
    number: '03',
    color: '#4C6FC7',
    title: 'Understanding the landscape: tools, vendors, and approaches',
    content: [
      {
        heading: "What's actually being used to build AI tools for SMBs",
        body: `Most of what gets called "AI" for small businesses is actually a combination of a few categories of tools:\n\n**Chatbot platforms** (Voiceflow, ManyChat, custom GPT-powered bots) — for customer-facing conversations\n\n**Automation platforms** (Make, Zapier, n8n) — the "plumbing" that connects your apps and makes things happen automatically\n\n**AI language models** (OpenAI's GPT, Claude, etc.) — the intelligence layer that understands and generates human-like responses\n\nA well-built AI implementation typically combines all three — a trained chatbot that uses an AI language model and connects to your real tools via an automation platform.`,
        bullets: undefined,
      },
      {
        heading: 'The difference between a SaaS tool and a custom build',
        body: '',
        bullets: [
          '**SaaS tools (Tidio, ManyChat, Intercom):** Fast to set up, template-based, limited to their platform\'s capabilities, no custom training on your business data',
          '**Custom builds:** Trained on your specific business, integrated with your actual tools, built around your workflow — not a generic template',
          'For a 5-person real estate team vs. a 200-person brokerage, the needs are completely different. One-size tools fail most small businesses.',
        ],
      },
      {
        heading: 'What to watch out for when evaluating vendors',
        body: '',
        bullets: [
          'Anyone promising guaranteed results without understanding your business first',
          'Vendors who can\'t explain what they\'re building in plain English',
          'No clear deliverables or timeline in the proposal',
          'Offshore teams with communication gaps and no local accountability',
          'Long-term contracts before you\'ve seen any working product',
        ],
      },
    ],
  },
  {
    number: '04',
    color: '#F0A514',
    title: 'What to expect when working with an AI implementation partner',
    content: [
      {
        heading: 'A good engagement looks like this',
        body: `**Week 0: Discovery (free)**\nA 30-minute call where your consultant learns how your business actually works — not a pitch, but a genuine workflow mapping session. You should leave this call with 2–3 specific recommendations whether you hire them or not.\n\n**Week 1–2: Proposal and kick-off**\nA written proposal with clear deliverables, timeline, and cost. No surprises. If you approve it, kick off with a deeper discovery session and the build begins.\n\n**Weeks 2–4: Build and review**\nMost projects take 1–4 weeks to build. You should see progress via demos, Loom videos, or a shared dashboard — not silence. You'll review and give feedback before anything goes live.\n\n**Launch and beyond**\nA good partner trains you and your team, documents what was built, and stays available for questions. The relationship doesn't end at launch.`,
        bullets: undefined,
      },
      {
        heading: 'Questions to ask any AI vendor before hiring them',
        body: '',
        bullets: [
          '"Can you show me something you\'ve built for a business like mine?"',
          '"Who specifically will be building this — will I have direct contact with them?"',
          '"What happens if it doesn\'t work as expected after launch?"',
          '"What does ongoing support look like after the project is delivered?"',
          '"Can we start with a smaller scope and expand if it works?"',
        ],
      },
    ],
  },
  {
    number: '05',
    color: '#2B6BE5',
    title: 'Measuring results: what good looks like',
    content: [
      {
        heading: 'The metrics that matter for SMB AI implementations',
        body: `Before launching any AI tool, define what success looks like. Vague goals produce vague results. Here's what to measure:`,
        bullets: [
          '**Lead response time** — from submission to first response. Target: under 5 minutes, 24/7',
          '**Lead conversion rate** — what % of new inquiries become paying customers',
          '**Time savings** — hours per week reclaimed from manual tasks (survey your team monthly)',
          '**No-show rate** — appointments that don\'t show up (should drop by 30–50% with reminders)',
          '**Review volume** — new Google reviews per month (should increase significantly with automation)',
          '**Staff feedback** — are the people using the tools finding them helpful or frustrating?',
        ],
      },
      {
        heading: 'What to do at 30, 60, and 90 days',
        body: '',
        bullets: [
          '**Day 30:** Read every chatbot conversation transcript. Identify gaps. Add 5–10 new Q&A pairs.',
          '**Day 60:** Compare lead conversion before and after. Run an ROI calculation with real numbers.',
          '**Day 90:** Identify the next workflow to automate. Most businesses find 3–5 more after the first.',
        ],
      },
      {
        heading: 'The compound effect',
        body: `The businesses that get the most from AI are the ones that treat it as a foundation, not a finish line. Each automation compounds — when your lead bot captures more leads, your follow-up sequence converts more of them, your CRM has better data, your team has more time for high-value work, and your reviews go up, which brings more leads.\n\nStart small. Get one thing working. Then build on it.`,
        bullets: undefined,
      },
    ],
  },
];

function renderText(text: string) {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F0F0FF">$1</strong>').replace(/\n/g, '<br/>');
}

export default function QuickStartGuidePage() {
  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-24">
        <div className="container-site max-w-3xl">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors mb-8">
            <ArrowLeft size={13} /> Back to Resources
          </Link>

          <p className="section-label mb-3">{'// Quick-Start Guide'}</p>
          <h1 className="text-[#F0F0FF] mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: 'Syne, sans-serif', fontWeight: 800, lineHeight: 1.1 }}>
            The NJ/NYC Business Owner&apos;s Guide to AI Automation in 2026
          </h1>
          <p className="text-[#9898B0] mb-4" style={{ lineHeight: 1.7 }}>
            Plain English. No hype. Everything you need to understand before your first AI project — whether you hire ApexNova or someone else.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <span className="text-xs text-[#5A5A72]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              ~15 min read · 5 sections
            </span>
            <PrintButton label="Print Guide" className="btn-secondary text-xs py-1.5 px-3" />
          </div>

          {/* Table of contents */}
          <div className="card p-6 mb-10">
            <p className="text-xs text-[#5A5A72] uppercase tracking-widest mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Table of Contents
            </p>
            <ol className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.number}>
                  <a
                    href={`#section-${i + 1}`}
                    className="flex items-center gap-3 text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors py-1"
                  >
                    <span className="w-6 text-xs text-right flex-shrink-0" style={{ fontFamily: 'JetBrains Mono, monospace', color: s.color }}>
                      {s.number}
                    </span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, si) => (
              <div key={section.number} id={`section-${si + 1}`} className="card p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-lg"
                    style={{ fontFamily: 'JetBrains Mono, monospace', background: `${section.color}15`, border: `1px solid ${section.color}30`, color: section.color }}
                  >
                    {section.number}
                  </span>
                  <h2 className="text-[#F0F0FF] text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif', lineHeight: 1.2 }}>
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((block, bi) => (
                    <div key={bi}>
                      <h3 className="text-[#F0F0FF] font-semibold mb-2 text-base" style={{ fontFamily: 'Syne, sans-serif' }}>
                        {block.heading}
                      </h3>
                      {block.body && (
                        <div className="text-[#9898B0] text-sm leading-relaxed space-y-3">
                          {block.body.split('\n\n').map((para, pi) => (
                            <p key={pi} dangerouslySetInnerHTML={{ __html: renderText(para) }} />
                          ))}
                        </div>
                      )}
                      {block.bullets && (
                        <ul className="space-y-2 mt-2">
                          {block.bullets.map((b, bi2) => (
                            <li key={bi2} className="flex items-start gap-2.5 text-sm text-[#9898B0]">
                              <span className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: section.color }} />
                              <span dangerouslySetInnerHTML={{ __html: renderText(b) }} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {si < sections.length - 1 && (
                  <div className="mt-6 flex justify-end">
                    <a
                      href={`#section-${si + 2}`}
                      className="inline-flex items-center gap-1 text-xs transition-colors hover:opacity-80"
                      style={{ color: section.color, fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      Next section <ArrowRight size={11} />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-10 card p-8 text-center" style={{ background: 'rgba(43,107,229,0.05)', borderColor: 'rgba(43,107,229,0.2)' }}>
            <h3 className="text-[#F0F0FF] text-2xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
              Ready to take the first step?
            </h3>
            <p className="text-[#9898B0] text-sm mb-5 max-w-md mx-auto">
              Book a free 30-minute AI Audit. We&apos;ll apply everything in this guide specifically to your business and show you exactly what to build first.
            </p>
            <Link href="/contact" className="btn-primary">
              Book My Free AI Audit <ArrowRight size={14} />
            </Link>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
              <Link href="/resources/ai-readiness-assessment" className="btn-secondary text-sm">
                Take the Assessment →
              </Link>
              <Link href="/resources/roi-calculator" className="btn-secondary text-sm">
                Calculate My ROI →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

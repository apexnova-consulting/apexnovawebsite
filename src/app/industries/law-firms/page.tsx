import type { Metadata } from 'next';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import type { IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Law Firms | NJ & NYC | ApexNova Consulting',
  description:
    'AI client intake bots, document assistants, and case communication automation for law firms in New Jersey and New York City.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/industries/law-firms' },
  openGraph: {
    title: 'AI for Law Firms | NJ & NYC | ApexNova Consulting',
    description: 'AI intake bots, document assistants, and client communication workflows for NJ/NYC law firms.',
  },
};

const data: IndustryPageData = {
  badge: 'Law Firms',
  emoji: '⚖️',
  color: '#8B5CF6',
  heroHeadline: 'Every missed intake call is a missed client.',
  heroSub:
    'AI intake bots, document assistants, and client communication workflows for NJ/NYC law firms. 24/7 availability, zero extra staff.',
  heroCTA: "Get Your Firm's AI Audit →",
  painPoints: [
    "We get calls after hours and on weekends but we can't staff for it — and those people don't call back on Monday.",
    "My paralegals spend half their day answering 'where's my case' calls from existing clients.",
    "Our intake process is entirely manual — if someone doesn't call us back within 24 hours we usually lose them.",
  ],
  whatWeBuild: [
    {
      title: 'Client Intake Automation',
      items: [
        '24/7 AI intake bot (multilingual available: English/Spanish)',
        'Automated case type qualification questions',
        'Consultation scheduling and calendar integration',
        'Conflict check workflow trigger',
        'Signed retainer follow-up sequence',
      ],
    },
    {
      title: 'Document Assistance',
      items: [
        'Document drafting assistant trained on your templates',
        'Intake form to draft pipeline (basic documents only)',
        'Document status and deadline tracking',
        'Client document collection and completion nudges',
        'Signature request automation',
      ],
    },
    {
      title: 'Client Communication',
      items: [
        'Automated case status updates via text/email',
        'Court date and deadline reminders',
        "No more 'where's my case' — proactive update sequences",
        'Post-resolution review request automation',
        'Referral follow-up campaigns for satisfied clients',
      ],
    },
    {
      title: 'Operations & Scheduling',
      items: [
        'Consultation booking and reminder sequences',
        'Staff workload routing automations',
        'Internal deadline and task notification system',
        'New lead response within 90 seconds, any hour',
        'Monthly reporting on intake conversion rates',
      ],
    },
  ],
  beforeAfter: {
    before: [
      'After-hours inquiries go to voicemail and are never followed up',
      'Paralegals spend 2+ hours/day on status update calls',
      'Intake is manual — leads fall through during busy weeks',
      'Clients have no visibility into their case and call constantly',
      'Strong months are followed by slow months from inconsistent follow-up',
    ],
    after: [
      'AI captures and qualifies every inquiry 24/7, including weekends',
      'Automated updates go out proactively — status calls drop sharply',
      'Every inquiry gets a response in 90 seconds and a consultation booked',
      'Clients receive scheduled updates without staff lifting a finger',
      'Consistent intake pipeline keeps your caseload predictable',
    ],
  },
  faqs: [
    {
      q: 'Is this allowed under NJ/NY bar ethics rules?',
      a: "Yes. AI handles intake logistics, scheduling, and communication — not legal advice. Everything is clearly branded as your firm's assistant, and attorney oversight is built into every decision point.",
    },
    {
      q: 'What practice areas does this work for?',
      a: "We've built for personal injury, immigration, family law, estate planning, and real estate law. The intake and communication workflows are customized for your specific practice area.",
    },
    {
      q: "What does 'multilingual' intake mean exactly?",
      a: "The intake bot can operate in Spanish and English simultaneously. For Spanish-speaking communities in NJ and NYC, this is often a significant differentiator.",
    },
    {
      q: 'How does conflict checking work?',
      a: "When a new intake comes in, the bot collects the key parties involved and triggers an alert to your staff with the information needed to run a conflict check — before the consultation is confirmed.",
    },
    {
      q: "I'm a solo practitioner. Is this right for me?",
      a: "Especially for solo practitioners. You're competing with larger firms that have full intake staff. AI levels that playing field — you get the same 24/7 response capability at a fraction of the cost of a full-time employee.",
    },
  ],
};

export default function LawFirmsPage() {
  return <IndustryPageTemplate data={data} />;
}

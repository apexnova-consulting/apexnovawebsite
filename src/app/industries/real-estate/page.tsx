import type { Metadata } from 'next';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import type { IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Real Estate Teams | NJ & NYC | ApexNova Consulting',
  description:
    '24/7 lead response bots, listing tools, and CRM automation for real estate agents and brokerages in New Jersey and New York City.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/industries/real-estate' },
  openGraph: {
    title: 'AI for Real Estate Teams | NJ & NYC | ApexNova Consulting',
    description: '24/7 lead response bots, listing tools, and CRM automation for NJ/NYC real estate teams.',
  },
};

const data: IndustryPageData = {
  badge: 'Real Estate & Title',
  emoji: '🏠',
  color: '#00D4AA',
  heroHeadline: 'Your next client shouldn\'t go to voicemail.',
  heroSub:
    'We build AI lead responders, listing tools, and CRM automations for NJ/NYC real estate teams. Set it up once. Run forever.',
  heroCTA: 'Get Your Real Estate AI Audit →',
  painPoints: [
    "I got a Zillow lead at 11pm and by the time I called back the next morning they'd already signed with someone else.",
    "I spend half my Sunday writing listing descriptions that all sound the same anyway.",
    "I have leads in my CRM that I haven't followed up with in weeks because I just don't have time.",
  ],
  whatWeBuild: [
    {
      title: 'Lead Capture & Response',
      items: [
        '24/7 AI lead responder that replies in under 90 seconds',
        'Zillow, Realtor.com, and website lead capture integration',
        'Automatic lead qualification questions via chat',
        'Instant text/email alerts for high-intent leads',
        'Appointment booking that syncs with your calendar',
      ],
    },
    {
      title: 'Listing & Marketing Tools',
      items: [
        'AI listing description generator (trained on your voice)',
        'Property-specific social media caption builder',
        'Just Listed / Just Sold email automation',
        'Neighborhood insights content generation',
        'Open house follow-up sequences',
      ],
    },
    {
      title: 'CRM & Client Nurture',
      items: [
        'Automated follow-up sequences for cold leads',
        'Anniversary and milestone check-in campaigns',
        'Past client referral request automation',
        'CRM integration: Follow Up Boss, HubSpot, kvCORE, LionDesk',
        'Deal pipeline status notifications',
      ],
    },
    {
      title: 'Compliance & Protection',
      items: [
        'Wire fraud awareness client communication workflows',
        'Pre-closing safety checklist delivery',
        'Automated disclosure reminders',
        'NJREC compliance document tracking',
        'Title company coordination workflows',
      ],
    },
  ],
  beforeAfter: {
    before: [
      'Leads sit in your inbox overnight while you sleep',
      'You spend 2+ hours a week writing listing descriptions',
      'Hot leads go cold because follow-up falls through the cracks',
      'You manually send reminders before every closing',
      'Your CRM has hundreds of contacts you\'ve never nurtured',
    ],
    after: [
      'Every lead gets a response in under 90 seconds, 24/7',
      'Listing descriptions draft themselves — you just edit and approve',
      'Automated sequences keep every lead warm on autopilot',
      'Pre-closing checklists and reminders go out automatically',
      'Past clients get check-ins that generate referrals without effort',
    ],
  },
  faqs: [
    {
      q: 'Will this work with my current CRM?',
      a: "We integrate with Follow Up Boss, HubSpot, kvCORE, LionDesk, and most major real estate CRMs. If you're using something else, we'll check before proposing.",
    },
    {
      q: 'How fast does the lead responder actually reply?',
      a: "In testing, under 90 seconds from form submission or chat initiation. At 2am on a Saturday. That's the point — you never miss another lead.",
    },
    {
      q: 'Is this RESPA-compliant?',
      a: "Yes. We build disclosure-aware workflows and don't automate anything that requires your professional judgment. The AI handles logistics and initial contact — you handle the relationship.",
    },
    {
      q: 'Do I need to know anything technical to use this?',
      a: 'No. We build it, we train you and your team, and we document everything. Most agents are up and running in under an hour.',
    },
    {
      q: "What if I'm a solo agent, not a brokerage?",
      a: "Solo agents are actually our favorite clients. You have the most to gain from automation — every hour saved is an hour you can spend on deals.",
    },
  ],
};

export default function RealEstatePage() {
  return <IndustryPageTemplate data={data} />;
}

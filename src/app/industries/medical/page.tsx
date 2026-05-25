import type { Metadata } from 'next';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import type { IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Medical Practices | NJ & NYC | ApexNova Consulting',
  description:
    'Appointment booking bots, patient intake automation, and after-hours chatbots for private practices, med spas, and dental offices in NJ & NYC.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/industries/medical' },
  openGraph: {
    title: 'AI for Medical Practices | NJ & NYC | ApexNova Consulting',
    description: 'Appointment bots, patient intake automation, and after-hours AI for NJ/NYC medical practices.',
  },
};

const data: IndustryPageData = {
  badge: 'Medical Practices',
  emoji: '🏥',
  color: '#3B82F6',
  heroHeadline: 'Your front desk can\'t answer every call. AI can.',
  heroSub:
    'Appointment bots, patient intake automation, and after-hours chatbots for NJ/NYC medical practices. HIPAA considerations built in.',
  heroCTA: 'Get Your Practice AI Audit →',
  painPoints: [
    "We miss 20% of inbound calls and patients just call someone else. I can't hire another front desk person.",
    "My staff spends half the day answering the same insurance and scheduling questions every single day.",
    "Patients no-show and we have no good system to remind them — we're leaving money on the table.",
  ],
  whatWeBuild: [
    {
      title: 'Appointment & Scheduling',
      items: [
        'AI appointment booking bot (works after hours and on weekends)',
        'Automated appointment reminders via text and email',
        'No-show follow-up and rebooking sequences',
        'New patient intake form delivery and tracking',
        'Integration with your EHR/scheduling system',
      ],
    },
    {
      title: 'Patient Communication',
      items: [
        'Website FAQ chatbot for insurance, hours, services',
        'Post-appointment care instructions and follow-up',
        'Review request automation after visits',
        'Birthday and wellness check-in messages',
        'Multi-language support for diverse patient populations',
      ],
    },
    {
      title: 'Admin Workflow Automation',
      items: [
        'Insurance verification reminder sequences',
        'Pre-authorization tracking and alerts',
        'Staff notification workflows for urgent requests',
        'Referral tracking and follow-up automation',
        'Document collection and completion nudges',
      ],
    },
    {
      title: 'Patient Acquisition',
      items: [
        '24/7 new patient inquiry response bot',
        'Lead qualification for elective procedures',
        'Online consultation booking workflow',
        'Google review generation campaign',
        'Referral source tracking and reporting',
      ],
    },
  ],
  beforeAfter: {
    before: [
      'Phones go unanswered during lunch, after hours, and on weekends',
      'Staff manually calls every patient the day before their appointment',
      'New patient intake happens on paper the day of the visit',
      'Patients leave without being asked for a review',
      'No-shows cost you 15-20% of your schedule revenue',
    ],
    after: [
      'AI answers every inquiry 24/7 — patients book without calling',
      'Automated texts go out 48h and 24h before every appointment',
      'Intake forms sent and completed before the patient arrives',
      'Review requests sent automatically after every positive visit',
      'Automated reminders cut no-shows by 30-50%',
    ],
  },
  faqs: [
    {
      q: 'Is this HIPAA-compliant?',
      a: "We build with HIPAA considerations in mind and can sign a BAA. We don't store PHI in the chatbot layer — scheduling and intake data routes through your existing EHR systems. We'll walk through the architecture with you before building.",
    },
    {
      q: 'What EHR/scheduling systems do you integrate with?',
      a: "We've worked with Jane App, Athenahealth, Kareo, SimplePractice, and others. If you're using something else, we'll scope integration before we propose.",
    },
    {
      q: "Will this replace my front desk staff?",
      a: "No — it frees them to focus on in-person patients instead of phone triage. The AI handles repetitive questions and scheduling logistics; your staff handles anything that needs a human touch.",
    },
    {
      q: 'How quickly can this go live?',
      a: 'Most practice implementations are live in 2–3 weeks. The appointment bot can often launch in week 1 while we build out the rest.',
    },
    {
      q: 'I run a med spa / dental office / PT clinic — does this still apply?',
      a: "Yes. We've built for all of these. The tools are the same — the workflows are customized for your specific patient journey and service mix.",
    },
  ],
};

export default function MedicalPage() {
  return <IndustryPageTemplate data={data} />;
}

import type { Metadata } from 'next';
import IndustryPageTemplate from '@/components/IndustryPageTemplate';
import type { IndustryPageData } from '@/components/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'AI for Local Businesses | NJ & NYC | ApexNova Consulting',
  description:
    'AI tools for local NJ/NYC businesses that save time, capture leads, and keep customers happy — automatically. Contractors, restaurants, salons, gyms, and more.',
  alternates: { canonical: 'https://www.apexnovaconsulting.com/industries/smb' },
  openGraph: {
    title: 'AI for Local Businesses | NJ & NYC | ApexNova Consulting',
    description: 'AI tools that save time, capture leads, and keep customers happy for NJ/NYC small businesses.',
  },
};

const data: IndustryPageData = {
  badge: 'Local Businesses',
  emoji: '🏪',
  color: '#F59E0B',
  heroHeadline: "You didn't start a business to spend all day answering the same questions.",
  heroSub:
    'We build AI tools for local NJ/NYC businesses that save time, capture leads, and keep customers happy — automatically.',
  heroCTA: 'Get Your Free AI Audit →',
  painPoints: [
    "I answer the same 10 questions on Instagram DMs every single day. What are your hours? Do you have availability? How much does it cost?",
    "I know I'm losing customers after hours but I can't be available 24/7 — I have to sleep.",
    "I've tried a few AI tools from the app store but nothing actually integrated with how my business actually works.",
  ],
  whatWeBuild: [
    {
      title: 'Customer Communication',
      items: [
        'AI chatbot for your website (FAQ, hours, pricing)',
        'Instagram and Facebook DM automation',
        'Missed call text-back system',
        'After-hours inquiry capture and response',
        'Review response templates and automation',
      ],
    },
    {
      title: 'Booking & Reservations',
      items: [
        'Online appointment and reservation booking',
        'Automated confirmation and reminder sequences',
        'Cancellation and rebooking workflow',
        'Waitlist management automation',
        'Calendar sync with Google and other tools',
      ],
    },
    {
      title: 'Marketing Automation',
      items: [
        'Post-visit review request sequences',
        'Customer referral request automation',
        'Email and SMS marketing workflows',
        'Seasonal promotion campaign automation',
        'Social media content scheduling support',
      ],
    },
    {
      title: 'Lead Capture & Follow-Up',
      items: [
        'Website lead capture forms with instant response',
        'Quote request automation and follow-up',
        'Abandoned inquiry recovery sequences',
        'CRM integration (HubSpot, GoHighLevel, and others)',
        'Monthly lead source reporting',
      ],
    },
  ],
  beforeAfter: {
    before: [
      'You answer the same DMs and questions dozens of times a week',
      'Leads that come in after 6pm usually go to a competitor',
      'You forget to follow up with interested customers who went quiet',
      'You have 0 system for asking happy customers to leave reviews',
      'Your booking process involves too many back-and-forth messages',
    ],
    after: [
      'AI handles FAQ, hours, pricing, and booking — automatically',
      'After-hours inquiries get instant responses and booked appointments',
      'Follow-up sequences run automatically for every lead',
      'Review requests go out after every completed job or visit',
      'Customers book with one click — no back-and-forth needed',
    ],
  },
  faqs: [
    {
      q: "I'm not tech-savvy. Is this too complicated for me?",
      a: "That's exactly who we build for. We set everything up for you, train you on how to use it, and document everything. If something breaks, you call us — not a support ticket.",
    },
    {
      q: 'What kinds of businesses have you worked with?',
      a: "Contractors, gyms, salons, restaurants, cleaning services, e-commerce shops, and more. If you have customers and repetitive communication, we can automate part of it.",
    },
    {
      q: 'How is this different from Tidio or ManyChat?',
      a: "Those are off-the-shelf tools you install and configure yourself. We build custom — trained on your business, integrated with your specific tools, and we stay accountable for it working. It's not a product. It's a service.",
    },
    {
      q: 'What does a typical project look like for a local business?',
      a: "Usually we start with the highest-value quick win — often a chatbot + appointment booking system or a missed-call text-back. Most businesses are live in 1–2 weeks and immediately see fewer missed inquiries.",
    },
    {
      q: 'Do I have to sign a long-term contract?',
      a: "No long-term contracts for project work. We charge for the build, include support, and then offer an optional monthly retainer if you want us to keep improving things over time.",
    },
  ],
};

export default function SMBPage() {
  return <IndustryPageTemplate data={data} />;
}

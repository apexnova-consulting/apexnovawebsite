'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const industries = [
  {
    emoji: '🏠',
    badge: 'Real Estate & Title',
    headline: 'Close more deals. Miss fewer leads.',
    color: '#00D4AA',
    bgColor: 'rgba(0,212,170,0.05)',
    borderColor: 'rgba(0,212,170,0.15)',
    intro:
      "Real estate moves fast. Your AI tools should too. We build lead capture bots that respond in seconds, listing description generators that save hours per week, CRM automations that keep every prospect warm, and wire fraud awareness workflows that protect your clients.",
    bullets: [
      '24/7 AI lead responder for Zillow, your site, and social',
      'Automated listing description drafting',
      'Client follow-up and nurture sequences',
      'Wire fraud prevention client communication workflows',
      'CRM integration (Follow Up Boss, HubSpot, kvCORE)',
    ],
    cta: 'Build My Real Estate AI',
    href: '/industries/real-estate',
  },
  {
    emoji: '🏥',
    badge: 'Medical Practices',
    headline: 'Spend more time with patients. Less on admin.',
    color: '#3B82F6',
    bgColor: 'rgba(59,130,246,0.05)',
    borderColor: 'rgba(59,130,246,0.15)',
    intro:
      "Private practices, med spas, dental offices, and PT clinics — your front desk is overwhelmed and your patients are waiting. We automate the intake, scheduling, reminders, and follow-up so your team focuses on care, not paperwork.",
    bullets: [
      'AI appointment booking that works after hours',
      'Patient FAQ chatbot for your website',
      'Automated intake form workflows',
      'Insurance verification reminder sequences',
      'Review request automation post-appointment',
    ],
    cta: 'Build My Practice AI',
    href: '/industries/medical',
  },
  {
    emoji: '⚖️',
    badge: 'Law Firms',
    headline: 'Intake more clients without adding staff.',
    color: '#8B5CF6',
    bgColor: 'rgba(139,92,246,0.05)',
    borderColor: 'rgba(139,92,246,0.15)',
    intro:
      "Personal injury, immigration, family law, real estate law — your intake process is your first impression and your biggest bottleneck. We build AI intake bots, document assistants, and client communication workflows that make your firm look bigger and run smoother.",
    bullets: [
      'AI client intake bot (24/7, multilingual available)',
      'Document drafting assistant trained on your templates',
      'Client status update automation (no more "where\'s my case" calls)',
      'Consultation scheduling and reminder sequences',
      'Conflict check workflow automation',
    ],
    cta: "Build My Firm's AI",
    href: '/industries/law-firms',
  },
  {
    emoji: '🏪',
    badge: 'Local Businesses',
    headline: 'If you run it, we can automate part of it.',
    color: '#F59E0B',
    bgColor: 'rgba(245,158,11,0.05)',
    borderColor: 'rgba(245,158,11,0.15)',
    intro:
      "Contractors, restaurants, e-commerce shops, salons, gyms — if you're spending more than 2 hours a week on repetitive business tasks, we can build something that saves most of that time. No jargon. No long contracts. Just tools that work.",
    bullets: [
      'Customer service chatbots',
      'Appointment and reservation systems',
      'Review and referral request automation',
      'Social media and email content workflows',
      'Lead capture and CRM integration',
    ],
    cta: "Let's Talk About Your Business",
    href: '/industries/smb',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <p className="section-label">{'// Built for your industry'}</p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#F0F0FF] mb-3 max-w-xl"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          We speak your industry&apos;s language.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#9898B0] mb-14 max-w-xl"
          style={{ fontSize: '1.05rem', lineHeight: 1.7 }}
        >
          Generic AI tools fail because they&apos;re not built for your specific problems. Ours are.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.badge}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl p-7 transition-all duration-200"
              style={{
                background: ind.bgColor,
                border: `1px solid ${ind.borderColor}`,
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Subtle corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top right, ${ind.color}15, transparent 70%)` }}
              />

              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">{ind.emoji}</span>
                  <span
                    className="industry-badge"
                    style={{ color: ind.color, borderColor: `${ind.color}50` }}
                  >
                    {ind.badge}
                  </span>
                </div>

                <h3
                  className="text-[#F0F0FF] text-2xl font-bold mb-4"
                  style={{ fontFamily: 'Syne, sans-serif', lineHeight: 1.2 }}
                >
                  {ind.headline}
                </h3>

                <p className="text-[#9898B0] text-sm leading-relaxed mb-5">{ind.intro}</p>

                <ul className="space-y-2 mb-7">
                  {ind.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-[#9898B0]">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0"
                        style={{ backgroundColor: ind.color }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={ind.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: ind.color }}
                >
                  {ind.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

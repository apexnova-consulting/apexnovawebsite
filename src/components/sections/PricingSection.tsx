'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, RefreshCw } from 'lucide-react';

const tiers = [
  {
    name: 'AI Starter',
    price: '$500 – $1,500',
    tagline: 'Perfect first project. Get one focused AI tool live fast.',
    features: [
      'Single-use AI chatbot or automation workflow',
      'Up to 3 integrations',
      '30-day support included',
      'Delivered in 1–2 weeks',
    ],
    cta: 'Start Here',
    href: '/contact',
    popular: false,
    color: '#00D4AA',
  },
  {
    name: 'AI Business',
    price: '$2,500 – $5,000',
    tagline: 'Full AI implementation for one business area.',
    features: [
      'Complete chatbot + automation stack',
      'CRM and tool integrations',
      'Staff training session',
      '60-day support included',
      'Delivered in 2–4 weeks',
    ],
    cta: 'Book a Call',
    href: '/contact',
    popular: true,
    color: '#4F6EF7',
  },
  {
    name: 'AI Infrastructure',
    price: '$8,000 – $15,000',
    tagline: 'For teams and brokerages ready to run on AI.',
    features: [
      'Multi-channel AI implementation',
      'Full workflow automation across departments',
      'Website redesign included if needed',
      '90-day support + monthly retainer option',
      'Delivered in 4–6 weeks',
    ],
    cta: "Let's Talk",
    href: '/contact',
    popular: false,
    color: '#7C3AED',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <p className="section-label">{'// Investment'}</p>
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
          Straightforward pricing for real businesses.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#9898B0] mb-12 max-w-lg"
          style={{ fontSize: '1.05rem', lineHeight: 1.7 }}
        >
          No enterprise minimums. No $500/hour consulting rates. Just useful AI at a price that makes sense.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 mb-6"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative rounded-2xl p-7 flex flex-col ${
                tier.popular ? 'ring-1' : ''
              }`}
              style={{
                background: tier.popular
                  ? `linear-gradient(135deg, rgba(79,110,247,0.12) 0%, rgba(124,58,237,0.08) 100%)`
                  : 'var(--glass-bg)',
                border: tier.popular
                  ? '1px solid rgba(79,110,247,0.4)'
                  : '1px solid var(--glass-border)',
                boxShadow: tier.popular
                  ? 'var(--shadow-card), var(--shadow-glow-blue)'
                  : 'var(--shadow-card)',
              }}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="text-white text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'var(--gradient-cta)', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <p
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace', color: tier.color }}
                >
                  {tier.name}
                </p>
                <p
                  className="text-3xl font-bold text-[#F0F0FF] mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {tier.price}
                </p>
                <p className="text-sm text-[#9898B0]">{tier.tagline}</p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#9898B0]">
                    <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  tier.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center text-xs text-[#5A5A72] mb-8"
          style={{ fontFamily: 'JetBrains Mono, monospace' }}
        >
          All projects begin with a free 30-minute AI Audit. No commitment required.
        </motion.p>

        {/* Retainer add-on */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="card p-6"
          style={{ background: 'rgba(245,158,11,0.04)', borderColor: 'rgba(245,158,11,0.2)' }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)' }}
              >
                <RefreshCw size={18} style={{ color: '#F59E0B' }} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p
                    className="font-semibold text-[#F0F0FF]"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    AI Maintenance Retainer
                  </p>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: 'rgba(245,158,11,0.15)',
                      color: '#F59E0B',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}
                  >
                    $750 – $1,500/mo
                  </span>
                </div>
                <p className="text-sm text-[#9898B0]">
                  Keep your AI tools updated, optimized, and improving. Updates, new automations, performance reports, priority support. Available to all past clients.
                </p>
              </div>
            </div>
            <Link href="/contact" className="btn-secondary text-sm py-2.5 px-5 whitespace-nowrap">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

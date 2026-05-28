'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Free AI Audit (30 min)',
    description:
      "We map your current workflow, find the biggest time-wasters, and show you exactly where AI can help. No pitch. Pure value.",
    color: '#2B6BE5',
  },
  {
    number: '02',
    title: 'Build Plan + Proposal',
    description:
      "Within 48 hours you get a clear proposal: what we'll build, what it costs, and what results to expect. No surprises.",
    color: '#1A2E6E',
  },
  {
    number: '03',
    title: 'We Build It',
    description:
      "Most projects go live in 2–4 weeks. You stay in the loop via Loom updates and a shared project channel. No disappearing acts.",
    color: '#E8A020',
  },
  {
    number: '04',
    title: 'Training + Handoff',
    description:
      "We train you and your team, document everything, and offer monthly retainer support if you want us to keep improving it.",
    color: '#F0A514',
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

export default function ProcessSection() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <p className="section-label">{'// How it works'}</p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#F0F0FF] mb-14 max-w-xl"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          From conversation to live AI in weeks, not months.
        </motion.h2>

        {/* Desktop: horizontal, Mobile: vertical */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {steps.map((step, idx) => (
            <motion.div key={step.number} variants={itemVariants} className="relative">
              {/* Connector line (desktop) */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-full w-5 h-px z-10"
                  style={{ background: 'var(--border-default)', transform: 'translateX(-50%)' }}
                />
              )}

              <div className="card p-6 h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    background: `${step.color}15`,
                    border: `1px solid ${step.color}30`,
                    color: step.color,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-[#F0F0FF] font-semibold mb-2 text-base"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#9898B0] text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

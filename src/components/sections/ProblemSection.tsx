'use client';

import { motion } from 'framer-motion';
import { Clock, ClipboardList, Plug } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: "You're losing leads after hours",
    body: "Prospects fill out your form at 11pm and hear back the next morning — if they haven't already called your competitor.",
    color: '#4F6EF7',
  },
  {
    icon: ClipboardList,
    title: "You're drowning in repetitive tasks",
    body: "Scheduling, follow-ups, intake forms, reminders. Every day you're doing work a smart system could handle automatically.",
    color: '#00D4AA',
  },
  {
    icon: Plug,
    title: "You're paying for tools that don't talk to each other",
    body: "You've got five subscriptions and zero integration. Nothing flows. Nothing's automated. You're the human middleware.",
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

export default function ProblemSection() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <p className="section-label">{'// Why your competitors are pulling ahead'}</p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#F0F0FF] mb-14 max-w-2xl"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          Your business runs on manual work that AI could handle today.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title} variants={itemVariants} className="card p-7 group">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}
                >
                  <Icon size={20} style={{ color: p.color }} />
                </div>
                <h3
                  className="text-[#F0F0FF] text-lg font-semibold mb-3 leading-snug"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {p.title}
                </h3>
                <p className="text-[#9898B0] text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10 text-[#9898B0]"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          We fix all three.{' '}
          <a href="#services" className="text-[#4F6EF7] hover:underline">
            Here&apos;s how.
          </a>
        </motion.p>
      </div>
    </section>
  );
}

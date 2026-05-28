'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Brain, Globe, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Lead Capture',
    description:
      "Never miss another inquiry. We build AI chat assistants trained on your business that answer questions, qualify leads, and book appointments 24/7. Works on your website, Facebook, and Instagram.",
    tag: 'Most Popular',
    tagColor: '#E8A020',
    color: '#2B6BE5',
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description:
      "Map your most repetitive processes — follow-ups, reminders, data entry, confirmations — and let AI run them for you. Built on Make, Zapier, or n8n depending on what fits your stack.",
    tag: 'Time Saver',
    tagColor: '#2B6BE5',
    color: '#2B6BE5',
  },
  {
    icon: Brain,
    title: 'Custom AI Assistants',
    description:
      "Internal tools that know your business. Document Q&A bots, onboarding assistants, pricing calculators, and intake wizards trained on your data.",
    tag: 'High ROI',
    tagColor: '#1A2E6E',
    color: '#1A2E6E',
  },
  {
    icon: Globe,
    title: 'Website + AI Integration',
    description:
      "Need a new site that's actually built to convert? We design and develop fast, modern websites and integrate AI tools directly into the stack.",
    tag: 'Full Stack',
    tagColor: '#F0A514',
    color: '#F0A514',
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

export default function ServicesSection() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <p className="section-label">{'// What we build'}</p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#F0F0FF] mb-4 max-w-2xl"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 700,
            lineHeight: 1.2,
          }}
        >
          AI tools built for your business. Not a template. Not a vendor chatbot. Yours.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5 mt-10"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} variants={itemVariants} className="card p-7 group">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
                  >
                    <Icon size={20} style={{ color: s.color }} />
                  </div>
                  <span
                    className="industry-badge text-[10px]"
                    style={{ color: s.tagColor, borderColor: `${s.tagColor}40` }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3
                  className="text-[#F0F0FF] text-lg font-semibold mb-3"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {s.title}
                </h3>
                <p className="text-[#9898B0] text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link href="/services" className="btn-secondary inline-flex">
            See full service details
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

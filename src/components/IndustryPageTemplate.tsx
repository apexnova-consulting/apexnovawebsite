'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Check, MapPin } from 'lucide-react';

export interface FAQ {
  q: string;
  a: string;
}

export interface IndustryPageData {
  badge: string;
  emoji: string;
  color: string;
  heroHeadline: string;
  heroSub: string;
  heroCTA: string;
  painPoints: string[];
  whatWeBuild: { title: string; items: string[] }[];
  beforeAfter: { before: string[]; after: string[] };
  faqs: FAQ[];
}

function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <div className="card p-5">
      <h3
        className="text-[#F0F0FF] font-semibold text-base mb-2"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {faq.q}
      </h3>
      <p className="text-[#9898B0] text-sm leading-relaxed">{faq.a}</p>
    </div>
  );
}

const steps = [
  { number: '01', title: 'Free AI Audit (30 min)', description: "We map your workflow, find the bottlenecks, and show you exactly where AI saves you time. No sales pitch." },
  { number: '02', title: 'Build Plan + Proposal', description: "48 hours later you get a clear proposal — what we build, what it costs, what to expect. No hidden fees." },
  { number: '03', title: 'We Build It', description: "Live in 2–4 weeks. You stay in the loop with Loom updates. We don't disappear after kickoff." },
  { number: '04', title: 'Training + Handoff', description: "We train your team, document everything, and offer ongoing support if you want us to keep improving it." },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  const { color } = data;

  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: 'var(--bg-base)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% -5%, ${color}18 0%, transparent 70%)`,
          }}
        />
        <div className="container-site relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2"
          >
            <span className="text-2xl">{data.emoji}</span>
            <span
              className="industry-badge"
              style={{ color, borderColor: `${color}40` }}
            >
              {data.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#F0F0FF] mb-5 max-w-2xl"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {data.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#9898B0] mb-8 max-w-xl"
            style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            {data.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link href="/contact" className="btn-primary">
              {data.heroCTA}
              <ArrowRight size={15} />
            </Link>
            <Link href="#what-we-build" className="btn-secondary">
              See What We Build ↓
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label mb-6"
          >
            {'// You know this feeling'}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            {data.painPoints.map((pain) => (
              <motion.div
                key={pain}
                variants={itemVariants}
                className="card p-5 relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-0.5"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
                <p className="text-[#9898B0] text-sm leading-relaxed italic">&ldquo;{pain}&rdquo;</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section id="what-we-build" className="py-20" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label mb-3"
          >
            {'// What we build'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#F0F0FF] mb-10"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            AI tools built specifically for {data.badge.toLowerCase()}.
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5"
          >
            {data.whatWeBuild.map((section) => (
              <motion.div key={section.title} variants={itemVariants} className="card p-6">
                <h3
                  className="font-bold mb-4 text-[#F0F0FF]"
                  style={{ fontFamily: 'Syne, sans-serif', color }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#9898B0]">
                      <Check size={13} className="mt-[3px] flex-shrink-0" style={{ color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label mb-6"
          >
            {'// Before vs. After'}
          </motion.p>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-7"
              style={{ borderColor: 'rgba(255,100,100,0.15)' }}
            >
              <p
                className="text-xs uppercase tracking-widest text-red-400 mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                Without AI
              </p>
              <ul className="space-y-3">
                {data.beforeAfter.before.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#9898B0]">
                    <span className="text-red-400 font-bold mt-0.5 flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-7"
              style={{ borderColor: `${color}30`, background: `${color}05` }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: 'JetBrains Mono, monospace', color }}
              >
                With ApexNova AI
              </p>
              <ul className="space-y-3">
                {data.beforeAfter.after.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#9898B0]">
                    <span className="font-bold mt-0.5 flex-shrink-0" style={{ color }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label mb-3"
          >
            {'// How it works'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#F0F0FF] mb-10"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            From first call to live AI in weeks.
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {steps.map((step) => (
              <motion.div key={step.number} variants={itemVariants} className="card p-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-4 text-xs font-bold"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                    color,
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-[#F0F0FF] font-semibold text-sm mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#9898B0] text-xs leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-subtle)' }}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label mb-3"
          >
            {'// Investment'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#F0F0FF] mb-2"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
            }}
          >
            Straightforward pricing. No surprises.
          </motion.h2>
          <p className="text-[#9898B0] mb-10 text-sm">All projects start with a free 30-min audit.</p>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'AI Starter', price: '$500–$1,500', desc: 'One focused AI tool live in 1–2 weeks.' },
              { name: 'AI Business', price: '$2,500–$5,000', desc: 'Full chatbot + automation stack in 2–4 weeks.', popular: true },
              { name: 'AI Infrastructure', price: '$8,000–$15,000', desc: 'Multi-channel AI across your whole operation.' },
            ].map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6 relative"
                style={tier.popular ? { borderColor: `${color}40`, background: `${color}06` } : {}}
              >
                {tier.popular && (
                  <span
                    className="absolute -top-2.5 left-4 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ background: color, fontFamily: 'DM Sans, sans-serif' }}
                  >
                    Most Popular
                  </span>
                )}
                <p className="text-[#9898B0] text-xs mb-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>{tier.name}</p>
                <p
                  className="text-2xl font-bold text-[#F0F0FF] mb-1"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {tier.price}
                </p>
                <p className="text-[#9898B0] text-sm mb-5">{tier.desc}</p>
                <Link href="/contact" className="btn-secondary text-sm py-2.5 w-full justify-center">
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="container-site">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="section-label mb-3"
          >
            {'// Common questions'}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#F0F0FF] mb-8"
            style={{
              fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 700,
            }}
          >
            Frequently asked questions
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4 max-w-4xl"
          >
            {data.faqs.map((faq) => (
              <motion.div key={faq.q} variants={itemVariants}>
                <FAQItem faq={faq} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-elevated)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 50% 80% at 50% 100%, ${color}10, transparent 70%)` }}
        />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }} />
        <div className="container-site relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#F0F0FF] mb-4 mx-auto max-w-xl"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Ready to see what AI can do for your {data.badge.toLowerCase()} business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-[#9898B0] mb-8 max-w-md mx-auto text-sm"
          >
            Book a free 30-minute AI Audit. We&apos;ll show you exactly what we&apos;d build for your business — no pitch, no pressure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Link href="/contact" className="btn-primary">
              {data.heroCTA}
              <ArrowRight size={15} />
            </Link>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#5A5A72]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <MapPin size={10} className="text-[#4F6EF7]" />
              Based in NJ · Serving the Tri-State Area
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

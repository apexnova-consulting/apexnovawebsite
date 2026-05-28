'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export default function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg-elevated)' }}
    >
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(43,107,229,0.5), rgba(26,46,110,0.5), transparent)' }}
      />

      {/* Subtle bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(43,107,229,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container-site relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#F0F0FF] mb-5 mx-auto max-w-2xl"
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            lineHeight: 1.15,
          }}
        >
          Your first call costs nothing.{' '}
          <span className="gradient-text">Not building AI costs you daily.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#9898B0] mb-8 max-w-xl mx-auto"
          style={{ fontSize: '1.05rem', lineHeight: 1.7 }}
        >
          Book a free 30-minute AI Audit. We&apos;ll map where you&apos;re leaking time and money, show you
          what&apos;s possible, and give you a clear plan — whether you hire us or not.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-3"
        >
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Book My Free AI Audit
            <ArrowRight size={17} />
          </Link>

          <p className="text-sm text-[#5A5A72]">No pitch. No pressure. Just clarity.</p>

          <div
            className="flex items-center gap-2 text-xs text-[#5A5A72] mt-1"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <MapPin size={11} className="text-[#2B6BE5]" />
            Serving NJ &amp; NYC
            <span className="opacity-40">·</span>
            Usually responds within 4 hours
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(43,107,229,0.2), transparent)' }}
      />
    </section>
  );
}

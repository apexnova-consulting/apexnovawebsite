'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2 } from 'lucide-react';

export default function LeadMagnetSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/toolkit-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'lead-magnet-homepage' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--bg-subtle)' }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
          style={{ background: 'rgba(79,110,247,0.06)', borderColor: 'rgba(79,110,247,0.2)' }}
        >
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(79,110,247,0.12)', border: '1px solid rgba(79,110,247,0.25)' }}
          >
            <Download size={28} className="text-[#4F6EF7]" />
          </div>

          {/* Copy */}
          <div className="flex-1 text-center md:text-left">
            <p
              className="section-label mb-2"
              style={{ color: '#4F6EF7' }}
            >
              {'// Free resource'}
            </p>
            <h3
              className="text-[#F0F0FF] text-xl md:text-2xl font-bold mb-2"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              The NJ Business Owner&apos;s Guide to AI Automation in 2026
            </h3>
            <p className="text-[#9898B0] text-sm">
              A free guide covering the top AI tools and automations for NJ/NYC businesses — no hype, just practical steps.
            </p>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto flex-shrink-0">
            {status === 'success' ? (
              <div className="text-center md:text-left">
                <p className="text-[#00D4AA] text-sm font-semibold mb-1">Guide sent!</p>
                <p className="text-[#9898B0] text-xs">Check your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 min-w-[280px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  required
                  className="input-field flex-1 text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary text-sm py-3 px-5 whitespace-nowrap"
                >
                  {status === 'loading' ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    'Get Free Guide'
                  )}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs mt-1">Something went wrong. Try emailing us directly.</p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const chatMessages = [
  { role: 'user', text: 'Hi, I need to schedule a showing for 42 Oak St tomorrow?' },
  { role: 'bot', text: "I'd be happy to help! I have openings at 10am, 2pm, and 4pm tomorrow. Which works best for you?" },
  { role: 'user', text: '2pm works great' },
  { role: 'bot', text: "Perfect! I've scheduled your showing for tomorrow at 2pm. You'll receive a confirmation text shortly. Is there anything else I can help you with?" },
];

function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const show = (index: number) => {
      if (index >= chatMessages.length) {
        setTimeout(() => {
          setVisibleMessages(0);
          setIsTyping(false);
          setTimeout(() => show(0), 800);
        }, 3000);
        return;
      }
      if (chatMessages[index].role === 'bot') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages(index + 1);
          setTimeout(() => show(index + 1), 1400);
        }, 1200);
      } else {
        setVisibleMessages(index + 1);
        setTimeout(() => show(index + 1), 900);
      }
    };
    const t = setTimeout(() => show(0), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="card p-5 w-full max-w-sm mx-auto"
      style={{ background: 'var(--bg-elevated)' }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2.5 pb-3 mb-3"
        style={{ borderBottom: '1px solid var(--border-subtle)' }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-cta flex items-center justify-center text-white text-xs font-bold">
          AI
        </div>
        <div>
          <p className="text-xs font-semibold text-[#F0F0FF]">ApexNova Assistant</p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020]" />
            <span className="text-[10px] text-[#E8A020]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              online 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2.5 min-h-[160px]">
        {chatMessages.slice(0, visibleMessages).map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[#2B6BE5] text-white rounded-br-sm'
                  : 'text-[#F0F0FF] rounded-bl-sm'
              }`}
              style={msg.role === 'bot' ? { background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' } : {}}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div
              className="rounded-2xl rounded-bl-sm px-3 py-2 text-xs"
              style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}
            >
              <span className="flex gap-1 items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9898B0] animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#9898B0] animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#9898B0] animate-bounce [animation-delay:300ms]" />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
      style={{ background: 'var(--bg-base)' }}
    >
      {/* Gradient background */}
      <div className="hero-bg">
        <div className="mesh-1" />
        <div className="mesh-2" />
        <div className="noise-overlay" />
      </div>

      <div className="container-site relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="section-label mb-4"
            >
              {'// Serving NJ & NYC Businesses'}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#F0F0FF] mb-6"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
              }}
            >
              We build AI that<br />
              <span className="gradient-text">works while you sleep.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#9898B0] mb-8 max-w-[520px]"
              style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
            >
              ApexNova builds custom AI tools — chatbots, automations, and smart workflows —
              for real estate teams, medical practices, law firms, and local businesses across
              New Jersey and New York City.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <Link href="/contact" className="btn-primary">
                Get Your Free AI Audit
                <ArrowRight size={16} />
              </Link>
              <Link href="#services" className="btn-secondary">
                See What We Build ↓
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center gap-2 text-xs text-[#5A5A72]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              <MapPin size={11} className="text-[#2B6BE5]" />
              Based in NJ
              <span className="opacity-40">·</span>
              Serving NYC Tri-State
              <span className="opacity-40">·</span>
              Real humans, real builds
            </motion.div>
          </div>

          {/* Right — chat demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind card */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl scale-95"
                style={{ background: 'radial-gradient(ellipse, rgba(43,107,229,0.2) 0%, transparent 70%)' }}
              />
              <div className="relative">
                {/* Stat chips */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="absolute -top-3 -left-4 card px-3 py-1.5 flex items-center gap-2 text-xs"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <span className="text-[#E8A020] font-bold" style={{ fontFamily: 'JetBrains Mono, monospace' }}>90s</span>
                  <span className="text-[#9898B0]">response time</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="absolute -bottom-3 -right-4 card px-3 py-1.5 flex items-center gap-2 text-xs"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <span className="text-[#2B6BE5] font-bold" style={{ fontFamily: 'JetBrains Mono, monospace' }}>24/7</span>
                  <span className="text-[#9898B0]">never offline</span>
                </motion.div>

                <ChatDemo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

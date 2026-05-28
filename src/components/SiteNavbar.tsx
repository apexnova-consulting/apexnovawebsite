'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industries = [
  { label: 'Real Estate & Title', href: '/industries/real-estate', color: '#E8A020' },
  { label: 'Medical Practices', href: '/industries/medical', color: '#3B82F6' },
  { label: 'Law Firms', href: '/industries/law-firms', color: '#4C6FC7' },
  { label: 'Local Businesses', href: '/industries/smb', color: '#F0A514' },
];

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111118]/95 backdrop-blur-glass border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="ApexNova Consulting"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span
                className="text-lg font-extrabold tracking-tight text-[#F0F0FF]"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                ApexNova
              </span>
              <span
                className="hidden sm:block text-[10px] font-medium px-2 py-0.5 rounded-full border border-[#E8A020]/40 text-[#E8A020]"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                AI for NJ/NYC
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {/* Industries dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIndustriesOpen(true)}
                onMouseLeave={() => setIndustriesOpen(false)}
              >
                <button className="flex items-center gap-1 text-[#9898B0] hover:text-[#F0F0FF] transition-colors text-sm font-medium py-2">
                  Industries
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2 w-56"
                    >
                      <div className="bg-[#1A1A24] border border-white/10 rounded-2xl overflow-hidden shadow-2xl py-2">
                        {industries.map((ind) => (
                          <Link
                            key={ind.href}
                            href={ind.href}
                            className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors group"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: ind.color }}
                            />
                            <span className="text-sm text-[#9898B0] group-hover:text-[#F0F0FF] transition-colors">
                              {ind.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/services"
                className="text-[#9898B0] hover:text-[#F0F0FF] transition-colors text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-[#9898B0] hover:text-[#F0F0FF] transition-colors text-sm font-medium"
              >
                About
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Book a Free AI Audit
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#9898B0] hover:text-[#F0F0FF] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#111118] border-l border-white/10 z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 flex-shrink-0">
                    <Image src="/images/logo.png" alt="ApexNova" fill className="object-contain" />
                  </div>
                  <span
                    className="text-base font-extrabold text-[#F0F0FF]"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    ApexNova
                  </span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-[#9898B0]">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
                <p
                  className="text-[10px] uppercase tracking-widest text-[#5A5A72] px-2 pt-2 pb-1"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  Industries
                </p>
                {industries.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: ind.color }}
                    />
                    <span className="text-sm text-[#9898B0]">{ind.label}</span>
                  </Link>
                ))}
                <div className="my-2 border-t border-white/10" />
                {[
                  { label: 'Services', href: '/services' },
                  { label: 'About', href: '/about' },
                  { label: 'Case Studies', href: '/case-studies' },
                  { label: 'Contact', href: '/contact' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-2.5 rounded-xl text-sm text-[#9898B0] hover:text-[#F0F0FF] hover:bg-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="p-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Book a Free AI Audit
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

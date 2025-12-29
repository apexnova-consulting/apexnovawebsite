'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Menu,
  X,
  ChevronDown,
  Building2,
  HeartPulse,
  Cpu,
  Lock,
  FileCheck,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GovernanceNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    {
      name: 'Real Estate & Title',
      href: '/industries/real-estate',
      icon: Building2,
      description: 'Settlement Shield & NJ Disclosure'
    },
    {
      name: 'Healthcare',
      href: '/industries/healthcare',
      icon: HeartPulse,
      description: 'HIPAA-Compliant AI Scribes'
    },
    {
      name: 'SaaS & GTM',
      href: '/industries/saas',
      icon: Cpu,
      description: 'IP Protection & Trade Secrets'
    },
  ];

  const solutions = [
    {
      name: 'AI Risk Scanner',
      href: '/governance-dashboard',
      icon: ShieldCheck,
      description: 'Interactive vulnerability assessment'
    },
    {
      name: 'Compliance Audit',
      href: '/compliance-audit',
      icon: FileCheck,
      description: 'NJDPA & RAISE Act readiness'
    },
    {
      name: 'Apex Seal',
      href: '/apex-seal',
      icon: Shield,
      description: 'Certified Safe AI trust badge'
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'bg-slate-950/70 backdrop-blur-2xl border-b border-cyber/20 shadow-[0_8px_32px_0_rgba(0,245,255,0.1)]'
          : 'bg-slate-950/30 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Shield className="w-10 h-10 text-cyber group-hover:animate-pulse" strokeWidth={1.5} />
              <Lock className="w-4 h-4 text-trust absolute bottom-0 right-0" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">
                ApexNova Consulting
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase">
                AI Governance & Security
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('industries')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-slate-300 hover:text-cyber transition-colors">
                <span className="font-medium">Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'industries' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-lg shadow-cyber overflow-hidden"
                  >
                    <div className="p-2">
                      {industries.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <item.icon className="w-5 h-5 text-cyber group-hover:text-trust transition-colors" />
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-cyber transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-slate-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 px-4 py-2 text-slate-300 hover:text-cyber transition-colors">
                <span className="font-medium">Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-lg shadow-cyber overflow-hidden"
                  >
                    <div className="p-2">
                      {solutions.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <item.icon className="w-5 h-5 text-cyber group-hover:text-trust transition-colors" />
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-cyber transition-colors">
                              {item.name}
                            </div>
                            <div className="text-sm text-slate-400 mt-1">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="px-4 py-2 text-slate-300 hover:text-cyber transition-colors font-medium"
            >
              About
            </Link>

            <Link
              href="/case-studies"
              className="px-4 py-2 text-slate-300 hover:text-cyber transition-colors font-medium"
            >
              Case Studies
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/governance-dashboard"
              className="px-5 py-2.5 text-cyber border border-cyber/50 rounded-lg hover:bg-cyber/10 transition-all duration-300 font-semibold"
            >
              Free Risk Scan
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber transition-all duration-300 font-semibold"
            >
              Book Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cyber transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900/98 backdrop-blur-xl border-t border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Industries */}
              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
                  Industries
                </div>
                {industries.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-2 py-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-cyber" />
                    <span className="text-white font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Solutions */}
              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2">
                  Solutions
                </div>
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-2 py-3 rounded-lg hover:bg-slate-800/50 transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-cyber" />
                    <span className="text-white font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Other Links */}
              <div className="space-y-2 pt-4 border-t border-slate-800">
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-3 text-white font-medium hover:text-cyber transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/case-studies"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-2 py-3 text-white font-medium hover:text-cyber transition-colors"
                >
                  Case Studies
                </Link>
              </div>

              {/* Mobile CTAs */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <Link
                  href="/governance-dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-5 py-3 text-center text-cyber border border-cyber/50 rounded-lg hover:bg-cyber/10 transition-all font-semibold"
                >
                  Free Risk Scan
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-5 py-3 text-center bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber transition-all font-semibold"
                >
                  Book Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}


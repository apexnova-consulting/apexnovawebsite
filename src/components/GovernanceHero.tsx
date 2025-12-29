'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, AlertTriangle, FileWarning, DollarSign, ChevronRight, Sparkles } from 'lucide-react';

export default function GovernanceHero() {
  const threats = [
    {
      icon: FileWarning,
      title: 'NJ Data Privacy Act',
      subtitle: 'NJDPA',
      deadline: 'Effective: Jan 15, 2025',
      risk: 'Up to $20K per violation',
      color: 'alert'
    },
    {
      icon: AlertTriangle,
      title: 'NY RAISE Act',
      subtitle: 'Responsible AI',
      deadline: 'In Effect Now',
      risk: 'Mandatory compliance',
      color: 'warning'
    },
    {
      icon: DollarSign,
      title: 'AI Wire Fraud',
      subtitle: 'Real Estate',
      deadline: 'Active Threat',
      risk: '$300M+ annual losses',
      color: 'alert'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyber/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-trust/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12">
          {/* Alert Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-alert/10 border border-alert/30 rounded-full"
          >
            <AlertTriangle className="w-4 h-4 text-alert animate-pulse" />
            <span className="text-sm font-semibold text-alert">
              Regulatory Compliance Deadline: Q1 2025
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Is Your AI{' '}
              <span className="bg-gradient-to-r from-cyber to-trust bg-clip-text text-transparent">
                Compliant & Secure?
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Three new regulations are creating a <span className="text-alert font-semibold">compliance crisis</span> for{' '}
              <span className="text-cyber font-semibold">Real Estate</span>,{' '}
              <span className="text-cyber font-semibold">Healthcare</span>, and{' '}
              <span className="text-cyber font-semibold">SaaS</span> companies.
            </p>
          </motion.div>

          {/* Triple Threat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`
                  relative p-6 bg-slate-900/50 backdrop-blur-sm border rounded-xl
                  ${threat.color === 'alert' ? 'border-alert/30 hover:border-alert/50' : 'border-warning/30 hover:border-warning/50'}
                  transition-all duration-300 group cursor-pointer
                `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-800/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative space-y-4">
                  <div className={`
                    w-12 h-12 rounded-lg flex items-center justify-center
                    ${threat.color === 'alert' ? 'bg-alert/10 text-alert' : 'bg-warning/10 text-warning'}
                  `}>
                    <threat.icon className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {threat.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {threat.title}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">{threat.deadline}</span>
                      </div>
                      <div className={`
                        text-sm font-semibold
                        ${threat.color === 'alert' ? 'text-alert' : 'text-warning'}
                      `}>
                        {threat.risk}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <Shield className="w-6 h-6 text-trust" />
              <Sparkles className="w-5 h-5 text-cyber" />
            </div>
            <p className="text-lg text-slate-300 mb-8">
              ApexNova Consulting delivers <span className="text-trust font-semibold">enterprise-grade AI governance</span> that keeps you{' '}
              <span className="text-cyber font-semibold">compliant, secure, and trusted</span> — without slowing down innovation.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/governance-dashboard"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all duration-300 font-bold text-lg"
            >
              <Shield className="w-5 h-5" />
              <span>Free AI Risk Scan</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 border-2 border-cyber text-cyber rounded-lg hover:bg-cyber/10 transition-all duration-300 font-bold text-lg"
            >
              <span>Book Compliance Audit</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-12 text-sm text-slate-400"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span>NJDPA Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-trust rounded-full animate-pulse"></div>
              <span>Zero-Knowledge Architecture</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-cyber rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}


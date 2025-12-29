'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileCheck, Shield, CheckCircle2, Clock, Users, ChevronRight, AlertTriangle } from 'lucide-react';

export default function ComplianceAuditPage() {
  const auditPhases = [
    {
      phase: 'Discovery',
      duration: '1-2 days',
      activities: [
        'AI tool inventory',
        'Data flow mapping',
        'User access review',
        'Policy documentation analysis'
      ]
    },
    {
      phase: 'Assessment',
      duration: '2-3 days',
      activities: [
        'NJDPA compliance check',
        'HIPAA gap analysis',
        'Wire fraud vulnerability scan',
        'IP leakage risk assessment'
      ]
    },
    {
      phase: 'Reporting',
      duration: '1 day',
      activities: [
        'Executive summary',
        'Detailed findings report',
        'Risk prioritization matrix',
        'Remediation roadmap'
      ]
    },
    {
      phase: 'Implementation',
      duration: '2-4 weeks',
      activities: [
        'Policy deployment',
        'Team training sessions',
        'Technical configurations',
        'Ongoing monitoring setup'
      ]
    }
  ];

  const benefits = [
    'Identify compliance gaps before regulators do',
    'Avoid costly fines and penalties',
    'Protect sensitive data from AI leaks',
    'Build customer trust with certification',
    'Get Apex Seal certified'
  ];

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950">
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-trust/10 border border-trust/30 rounded-full">
              <FileCheck className="w-4 h-4 text-trust" />
              <span className="text-sm font-semibold text-trust">Comprehensive AI Compliance</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              AI Compliance <span className="text-trust">Audit</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
              Get NJDPA ready, HIPAA compliant, and wire fraud protected in 14 days or less
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all duration-300 font-bold text-lg"
              >
                <span>Book Your Audit</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/governance-dashboard"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 border-2 border-cyber text-cyber rounded-lg hover:bg-cyber/10 transition-all duration-300 font-bold text-lg"
              >
                <span>Try Free Risk Scan First</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Get an AI Compliance Audit?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't wait for a data breach or regulatory fine to take action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-slate-800/50 border border-slate-700 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-trust flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Our 4-Phase Audit Process
            </h2>
            <p className="text-xl text-slate-300">
              Comprehensive, systematic, and fast
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-cyber/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-bold text-cyber">{index + 1}</span>
                  <div className="flex items-center space-x-1 text-slate-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{phase.duration}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-start">
                      <span className="text-trust mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Investment
            </h2>
            <p className="text-xl text-slate-300">
              One-time comprehensive audit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Single Industry</h3>
              <div className="text-5xl font-bold text-cyber mb-6">$4,997</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">One industry focus (Real Estate, Healthcare, or SaaS)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">Complete 4-phase audit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">Detailed remediation plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">30 days post-audit support</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-slate-700 text-white text-center rounded-lg hover:bg-slate-600 transition-all font-semibold"
              >
                Get Started
              </Link>
            </div>

            <div className="p-8 bg-gradient-to-br from-trust/10 to-cyber/10 border-2 border-trust rounded-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-trust to-cyber text-slate-950 text-xs font-bold rounded-full">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Industry</h3>
              <div className="text-5xl font-bold text-cyber mb-6">$8,997</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">All three industries covered</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">Complete 4-phase audit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">Detailed remediation plan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">90 days post-audit support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-slate-300">Quarterly compliance check-ins</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full px-6 py-3 bg-gradient-to-r from-trust to-cyber text-slate-950 text-center rounded-lg hover:shadow-cyber transition-all font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-alert/10 border border-alert/30 rounded-full">
              <AlertTriangle className="w-4 h-4 text-alert" />
              <span className="text-sm font-semibold text-alert">
                NJDPA Deadline: January 15, 2025
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Don't Wait for a Compliance Crisis
            </h2>
            <p className="text-xl text-slate-300">
              Book your audit today and get peace of mind by year-end
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all font-bold text-lg"
            >
              <span>Schedule Your Audit Now</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


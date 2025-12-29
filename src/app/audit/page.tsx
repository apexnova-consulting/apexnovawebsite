'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import InteractiveRiskCalculator from '@/components/InteractiveRiskCalculator';

export default function AuditPage() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Know Your Exposure',
      description: 'Identify gaps in AI governance before regulators do'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: 'Regulatory Clarity',
      description: 'Understand NJDPA, NY RAISE Act, and HIPAA AI requirements'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Actionable Roadmap',
      description: 'Get a step-by-step plan to achieve Apex-Certified status'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Competitive Advantage',
      description: 'Turn compliance into a trust-building differentiator'
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950">
          <div className="absolute inset-0 opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber/10 border border-cyber/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-cyber" />
              <span className="text-sm font-semibold text-cyber">
                Free AI Governance Health Check
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              What's Your{' '}
              <span className="bg-gradient-to-r from-cyber to-trust bg-clip-text text-transparent">
                AI Risk Score?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8">
              Answer 5 questions to discover your regulatory exposure, compliance gaps, 
              and get a personalized remediation roadmap — absolutely free.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-trust" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-trust" />
                <span>Instant results</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-trust" />
                <span>Industry-specific guidance</span>
              </div>
            </div>
          </motion.div>

          {/* Risk Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InteractiveRiskCalculator />
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
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Take This Assessment?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Most organizations don't realize they're exposed until it's too late
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyber/50 transition-all"
              >
                <div className="text-cyber mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-12">
              Trusted By Industry Leaders
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="text-5xl font-bold text-cyber mb-2">500+</div>
                <p className="text-slate-300">AI Audits Completed</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="text-5xl font-bold text-trust mb-2">99.8%</div>
                <p className="text-slate-300">Compliance Pass Rate</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="text-5xl font-bold text-cyber mb-2">$47M+</div>
                <p className="text-slate-300">In Fines Prevented</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


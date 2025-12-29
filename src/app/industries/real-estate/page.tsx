'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Building2, Shield, AlertTriangle, DollarSign, ChevronRight, CheckCircle2, FileWarning } from 'lucide-react';

export default function RealEstatePage() {
  const threats = [
    {
      icon: DollarSign,
      title: 'AI Voice-Cloning Fraud',
      stat: '$300M+',
      description: 'Criminals use AI to clone voices of attorneys, agents, and title officers to redirect wire transfers'
    },
    {
      icon: FileWarning,
      title: 'Identity Theft in Closings',
      stat: '89%',
      description: 'Increase in AI-generated fake IDs and deepfake video calls to impersonate buyers/sellers'
    },
    {
      icon: AlertTriangle,
      title: 'NJDPA & Photo Disclosure',
      stat: '$20K',
      description: 'Per violation penalty for consumer data breaches and undisclosed AI-generated property images'
    }
  ];

  const solutions = [
    {
      title: 'Settlement Shield™ Protocol',
      description: 'Military-grade protection against AI voice cloning and wire fraud',
      features: [
        'Voice authentication and liveness detection',
        'Multi-channel verification (email + phone + video)',
        'AI-powered fraud pattern recognition',
        'Real-time wire instruction validation',
        'Secure escrow communication portal'
      ]
    },
    {
      title: 'NJ Photo Compliance',
      description: 'Automatic detection and disclosure of AI-generated property images',
      features: [
        'AI image detection technology',
        'Automatic watermarking',
        'MLS listing compliance',
        'Legal disclosure templates'
      ]
    },
    {
      title: 'Data Privacy Governance',
      description: 'NJDPA-compliant data handling for client information',
      features: [
        'Encrypted client data storage',
        'Consent management system',
        'Data breach prevention',
        'Regulatory compliance reporting'
      ]
    }
  ];

  const caseStudy = {
    company: 'Regional Title Company',
    location: 'Northern New Jersey',
    challenge: 'Nearly lost $2.3M to a sophisticated AI-generated wire fraud attempt',
    solution: 'Implemented Settlement Shield with multi-factor verification',
    results: [
      'Prevented $2.3M loss in first month',
      'Zero fraud attempts successful since implementation',
      'Increased client confidence by 87%',
      'Full NJDPA compliance achieved'
    ]
  };

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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-alert/10 border border-alert/30 rounded-full">
              <AlertTriangle className="w-4 h-4 text-alert animate-pulse" />
              <span className="text-sm font-semibold text-alert">
                Wire Fraud Attempts Up 300% in 2024
              </span>
            </div>

            <div className="flex items-center justify-center mb-8">
              <Building2 className="w-20 h-20 text-cyber" strokeWidth={1.5} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              The Settlement Shield™:{' '}
              <span className="bg-gradient-to-r from-cyber to-trust bg-clip-text text-transparent">
                Stop AI Voice-Cloning Fraud
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
              Defend your NJ real estate closings from AI-powered wire fraud, voice-cloning scams, 
              and identity theft — while staying NJDPA compliant.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all duration-300 font-bold text-lg"
              >
                <Shield className="w-5 h-5" />
                <span>Get Settlement Shield</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/audit"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 border-2 border-cyber text-cyber rounded-lg hover:bg-cyber/10 transition-all duration-300 font-bold text-lg"
              >
                <span>Free Risk Calculator</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              The <span className="text-alert">Triple Threat</span> Facing Title Companies
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              New AI capabilities are creating unprecedented risks for real estate transactions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {threats.map((threat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-slate-800/50 border border-alert/30 rounded-xl"
              >
                <div className="w-16 h-16 bg-alert/10 rounded-lg flex items-center justify-center mb-6">
                  <threat.icon className="w-8 h-8 text-alert" />
                </div>
                <div className="text-4xl font-bold text-alert mb-2">{threat.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{threat.title}</h3>
                <p className="text-slate-400">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive <span className="text-trust">Protection</span> for Your Business
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-cyber/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-slate-400 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-slate-800 to-slate-900 border border-cyber/30 rounded-2xl"
          >
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-trust/10 border border-trust/30 rounded-full mb-4">
                <span className="text-sm font-semibold text-trust">Success Story</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{caseStudy.company}</h2>
              <p className="text-slate-400">{caseStudy.location}</p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-bold text-cyber mb-2">The Challenge</h3>
                <p className="text-slate-300">{caseStudy.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-cyber mb-2">The Solution</h3>
                <p className="text-slate-300">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Results</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-white">
              Protect Your Settlements Today
            </h2>
            <p className="text-xl text-slate-300">
              Schedule a free consultation to see how Settlement Shield can protect your business
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all font-bold text-lg"
            >
              <span>Book Your Free Audit</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


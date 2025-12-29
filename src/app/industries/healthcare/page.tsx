'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeartPulse, Shield, AlertTriangle, Lock, ChevronRight, CheckCircle2, Database } from 'lucide-react';

export default function HealthcarePage() {
  const threats = [
    {
      icon: AlertTriangle,
      title: 'HIPAA Violations',
      stat: '$50K+',
      description: 'Average penalty per HIPAA violation with AI systems storing PHI incorrectly'
    },
    {
      icon: Database,
      title: 'AI Scribe Data Leaks',
      stat: '67%',
      description: 'Of medical AI tools store patient data insecurely or without proper consent'
    },
    {
      icon: Lock,
      title: 'OCR Audits',
      stat: '2025',
      description: 'HHS ramping up AI-specific HIPAA audits targeting healthcare providers'
    }
  ];

  const solutions = [
    {
      title: 'HIPAA-Compliant AI Scribes',
      description: 'Zero-knowledge architecture ensures patient data never leaves your control',
      features: [
        'End-to-end encryption',
        'On-premise processing options',
        'Automatic PHI detection',
        'BAA-compliant deployment',
        'Audit logging & reporting'
      ]
    },
    {
      title: 'AI Governance Framework',
      description: 'Complete compliance infrastructure for healthcare AI systems',
      features: [
        'Risk assessment protocols',
        'Staff training programs',
        'Incident response plans',
        'Regular compliance audits',
        'Policy documentation'
      ]
    },
    {
      title: 'Zero-Knowledge Data Architecture',
      description: 'Patient data encrypted at rest, in transit, and during processing',
      features: [
        'Homomorphic encryption',
        'Federated learning support',
        'Data minimization by design',
        'Patient consent management',
        'Breach prevention monitoring'
      ]
    }
  ];

  const caseStudy = {
    company: 'Regional Medical Practice',
    location: 'Central New Jersey',
    challenge: 'AI scribe was storing unencrypted PHI and lacked proper consent workflows, risking massive HIPAA fines',
    solution: 'Implemented zero-knowledge AI scribe with encrypted storage and consent management',
    results: [
      'Zero HIPAA violations since implementation',
      'Passed OCR audit with zero findings',
      '4.5 hours saved per physician daily',
      'Patient satisfaction up 23%',
      'Full NJDPA and HIPAA compliance'
    ]
  };

  const features = [
    'Business Associate Agreement included',
    'Encrypted PHI at all stages',
    'Automatic de-identification',
    'OCR-ready audit trails',
    'Real-time compliance monitoring',
    'Incident response 24/7'
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-alert/10 border border-alert/30 rounded-full">
              <AlertTriangle className="w-4 h-4 text-alert animate-pulse" />
              <span className="text-sm font-semibold text-alert">
                OCR Auditing AI Systems in 2025
              </span>
            </div>

            <div className="flex items-center justify-center mb-8">
              <HeartPulse className="w-20 h-20 text-cyber" strokeWidth={1.5} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              HIPAA-Compliant{' '}
              <span className="bg-gradient-to-r from-cyber to-trust bg-clip-text text-transparent">
                AI for Healthcare
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
              Deploy AI scribes, diagnostics, and automation — with zero risk of HIPAA violations, 
              data breaches, or OCR penalties.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all duration-300 font-bold text-lg"
              >
                <Shield className="w-5 h-5" />
                <span>Get HIPAA Audit</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/governance-dashboard"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-slate-900 border-2 border-cyber text-cyber rounded-lg hover:bg-cyber/10 transition-all duration-300 font-bold text-lg"
              >
                <span>Free Compliance Check</span>
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
              Why Healthcare AI is <span className="text-alert">Under Scrutiny</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The Office for Civil Rights (OCR) is targeting AI systems with aggressive HIPAA enforcement
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
              <span className="text-trust">Zero-Risk</span> AI for Patient Care
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our solutions are architected from day one for HIPAA compliance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-slate-800/30 border border-slate-700 rounded-lg"
              >
                <Shield className="w-5 h-5 text-trust flex-shrink-0" />
                <span className="text-slate-300">{feature}</span>
              </div>
            ))}
          </motion.div>
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
              Ready for Your HIPAA Audit?
            </h2>
            <p className="text-xl text-slate-300">
              Get a free compliance assessment and see where your AI systems stand
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all font-bold text-lg"
            >
              <span>Schedule Free Audit</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


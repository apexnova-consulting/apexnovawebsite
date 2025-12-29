'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cpu, Shield, AlertTriangle, Lock, ChevronRight, CheckCircle2, FileWarning, DollarSign } from 'lucide-react';

export default function SaaSPage() {
  const threats = [
    {
      icon: FileWarning,
      title: 'Training Data Contamination',
      stat: '78%',
      description: 'Of sales/CS AI agents are trained on support tickets containing pricing, roadmaps, and trade secrets'
    },
    {
      icon: DollarSign,
      title: 'Competitor Intelligence Leaks',
      stat: '$2M+',
      description: 'Average value of IP leaked when AI chatbots expose pricing strategies or product plans'
    },
    {
      icon: Lock,
      title: 'NY RAISE Act Violations',
      stat: 'Active',
      description: 'New York law requires responsible AI disclosure — non-compliance means penalties and lawsuits'
    }
  ];

  const solutions = [
    {
      title: 'IP Leakage Audit',
      description: 'Comprehensive scan of your Sales/CS AI agents for trade secret exposure',
      features: [
        'Training data contamination analysis',
        'Pricing strategy leak detection',
        'Product roadmap exposure review',
        'Customer list protection audit',
        'Competitor intelligence risk assessment'
      ]
    },
    {
      title: 'Zero-Knowledge AI Framework',
      description: 'Keep your competitive advantage secure while leveraging AI',
      features: [
        'Data classification system',
        'Model training guardrails',
        'Prompt injection prevention',
        'Third-party AI monitoring',
        'Incident response protocols'
      ]
    },
    {
      title: 'GTM Compliance Suite',
      description: 'NJDPA and RAISE Act compliance for your go-to-market AI',
      features: [
        'Automated disclosure generation',
        'Customer consent management',
        'Data retention policies',
        'Privacy-by-design review',
        'Regular compliance audits'
      ]
    }
  ];

  const caseStudy = {
    company: 'B2B SaaS Company',
    location: 'New York Metro Area',
    challenge: 'AI sales agent was trained on customer support transcripts containing pricing strategies and product roadmaps',
    solution: 'Implemented AI governance with content filtering and data classification protocols',
    results: [
      'Zero IP leakage incidents in 6 months',
      'NY RAISE Act compliance certified',
      'Sales cycle shortened by 18%',
      'Customer trust scores up 31%',
      'Avoided potential $2M+ breach costs'
    ]
  };

  const useCases = [
    {
      title: 'AI Sales Agents',
      risks: ['Sharing pricing strategies', 'Revealing product roadmaps', 'Leaking customer lists'],
      solution: 'Content filtering and prompt guardrails'
    },
    {
      title: 'Customer Support AI',
      risks: ['Exposing internal processes', 'Sharing security protocols', 'Revealing system architecture'],
      solution: 'Zero-knowledge architecture and audit trails'
    },
    {
      title: 'Marketing Automation',
      risks: ['NJDPA consent violations', 'Data retention breaches', 'Cross-customer data mixing'],
      solution: 'Consent management and data isolation'
    }
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
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-warning/10 border border-warning/30 rounded-full">
              <AlertTriangle className="w-4 h-4 text-warning animate-pulse" />
              <span className="text-sm font-semibold text-warning">
                43% of AI Agents Leak Proprietary Data
              </span>
            </div>

            <div className="flex items-center justify-center mb-8">
              <Cpu className="w-20 h-20 text-cyber" strokeWidth={1.5} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              IP Leakage Prevention for{' '}
              <span className="bg-gradient-to-r from-cyber to-trust bg-clip-text text-transparent">
                Sales & CS AI Agents
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto">
              Audit your AI sales/CS agents to ensure pricing strategies, product roadmaps, 
              and trade secrets aren't training public LLMs — or your competitors.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 rounded-lg hover:shadow-cyber-lg transition-all duration-300 font-bold text-lg"
              >
                <Shield className="w-5 h-5" />
                <span>Get IP Leakage Audit</span>
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
              The <span className="text-warning">Hidden Costs</span> of Ungovemed AI
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every AI interaction is a potential leak of your competitive advantage
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
                className="p-8 bg-slate-800/50 border border-warning/30 rounded-xl"
              >
                <div className="w-16 h-16 bg-warning/10 rounded-lg flex items-center justify-center mb-6">
                  <threat.icon className="w-8 h-8 text-warning" />
                </div>
                <div className="text-4xl font-bold text-warning mb-2">{threat.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{threat.title}</h3>
                <p className="text-slate-400">{threat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Common <span className="text-alert">GTM AI Vulnerabilities</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-slate-900/50 border border-slate-700 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-alert mb-3">Common Risks:</div>
                  <ul className="space-y-2">
                    {useCase.risks.map((risk, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-alert flex-shrink-0 mt-0.5" />
                        <span className="text-slate-400 text-sm">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <div className="text-sm font-semibold text-trust mb-2">ApexNova Solution:</div>
                  <p className="text-slate-300 text-sm">{useCase.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-trust">Enterprise-Grade</span> Protection for GTM AI
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
                className="p-8 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyber/50 transition-all"
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
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
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
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-white">
              Stop Your AI From Leaking IP
            </h2>
            <p className="text-xl text-slate-300">
              Get a free audit to identify where your GTM AI systems are vulnerable
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


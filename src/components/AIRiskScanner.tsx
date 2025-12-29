'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  Database, 
  Users, 
  FileWarning, 
  Lock, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function AIRiskScanner() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [scanStarted, setScanStarted] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const industries = [
    { id: 'real-estate', name: 'Real Estate & Title', icon: '🏢' },
    { id: 'healthcare', name: 'Healthcare', icon: '🏥' },
    { id: 'saas', name: 'SaaS & GTM', icon: '💻' },
  ];

  const riskCategories = [
    {
      icon: Database,
      title: 'Data Privacy Compliance',
      description: 'NJDPA & GDPR violations',
      risk: 'HIGH',
      findings: 'Unencrypted PII in 3 AI workflows'
    },
    {
      icon: Users,
      title: 'HIPAA/PHI Protection',
      description: 'Healthcare data exposure',
      risk: 'CRITICAL',
      findings: 'AI scribe storing PHI without consent'
    },
    {
      icon: FileWarning,
      title: 'Wire Fraud Vulnerability',
      description: 'Settlement payment risks',
      risk: 'CRITICAL',
      findings: 'No AI-generated email verification'
    },
    {
      icon: Lock,
      title: 'IP & Trade Secrets',
      description: 'Proprietary data leakage',
      risk: 'MEDIUM',
      findings: 'Sales AI trained on confidential data'
    },
  ];

  const handleStartScan = () => {
    if (!selectedIndustry) return;
    setScanStarted(true);
    
    // Simulate scanning process
    setTimeout(() => {
      setScanComplete(true);
    }, 3000);
  };

  const handleReset = () => {
    setScanStarted(false);
    setScanComplete(false);
    setSelectedIndustry(null);
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber/10 border border-cyber/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyber" />
            <span className="text-sm font-semibold text-cyber">Interactive Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI <span className="text-cyber">Risk Scanner</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See what compliance gaps are hiding in your AI systems. This interactive demo shows real vulnerabilities we've found.
          </p>
        </motion.div>

        {/* Scanner Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-cyber-lg">
            {/* Scanner Header */}
            <div className="bg-slate-800/50 border-b border-slate-700 px-6 py-4">
              <div className="flex items-center space-x-3">
                <ShieldAlert className="w-6 h-6 text-cyber" />
                <h3 className="text-lg font-bold text-white">Governance Dashboard</h3>
                <div className="flex-1"></div>
                {scanComplete && (
                  <button
                    onClick={handleReset}
                    className="text-sm text-slate-400 hover:text-cyber transition-colors"
                  >
                    Reset Scanner
                  </button>
                )}
              </div>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Industry */}
                {!scanStarted && (
                  <motion.div
                    key="select"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-4">
                        Select Your Industry
                      </label>
                      <div className="grid md:grid-cols-3 gap-4">
                        {industries.map((industry) => (
                          <button
                            key={industry.id}
                            onClick={() => setSelectedIndustry(industry.id)}
                            className={`
                              p-6 rounded-xl border-2 transition-all duration-300 text-left
                              ${selectedIndustry === industry.id
                                ? 'bg-cyber/10 border-cyber shadow-cyber'
                                : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                              }
                            `}
                          >
                            <div className="text-4xl mb-3">{industry.icon}</div>
                            <div className={`
                              font-semibold
                              ${selectedIndustry === industry.id ? 'text-cyber' : 'text-white'}
                            `}>
                              {industry.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleStartScan}
                      disabled={!selectedIndustry}
                      className={`
                        w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl font-bold transition-all
                        ${selectedIndustry
                          ? 'bg-gradient-to-r from-trust to-cyber text-slate-950 hover:shadow-cyber cursor-pointer'
                          : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        }
                      `}
                    >
                      <ShieldAlert className="w-5 h-5" />
                      <span>Start Risk Assessment</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Scanning */}
                {scanStarted && !scanComplete && (
                  <motion.div
                    key="scanning"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-8"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-20 h-20 mx-auto border-4 border-slate-700 border-t-cyber rounded-full"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Scanning AI Systems...
                      </h3>
                      <p className="text-slate-400">
                        Analyzing compliance gaps and security vulnerabilities
                      </p>
                    </div>
                    <div className="max-w-md mx-auto space-y-2">
                      {[
                        'Checking data encryption protocols...',
                        'Analyzing HIPAA compliance...',
                        'Detecting PII exposure risks...',
                        'Scanning for wire fraud vulnerabilities...'
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.6 }}
                          className="text-sm text-slate-500 text-left"
                        >
                          {step}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Results */}
                {scanComplete && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* Risk Score */}
                    <div className="bg-alert/10 border border-alert/30 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            Risk Assessment Complete
                          </h3>
                          <p className="text-slate-300">
                            Found <span className="text-alert font-bold">4 critical vulnerabilities</span> that require immediate attention
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-5xl font-bold text-alert">78</div>
                          <div className="text-sm text-slate-400">Risk Score</div>
                        </div>
                      </div>
                    </div>

                    {/* Risk Categories */}
                    <div className="space-y-3">
                      {riskCategories.map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className={`
                            p-4 rounded-xl border
                            ${category.risk === 'CRITICAL' 
                              ? 'bg-alert/5 border-alert/30' 
                              : category.risk === 'HIGH'
                              ? 'bg-warning/5 border-warning/30'
                              : 'bg-slate-800/30 border-slate-700'
                            }
                          `}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`
                              flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center
                              ${category.risk === 'CRITICAL' 
                                ? 'bg-alert/20 text-alert' 
                                : category.risk === 'HIGH'
                                ? 'bg-warning/20 text-warning'
                                : 'bg-slate-700 text-slate-400'
                              }
                            `}>
                              <category.icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-white">
                                  {category.title}
                                </h4>
                                <span className={`
                                  px-2 py-1 text-xs font-bold rounded
                                  ${category.risk === 'CRITICAL' 
                                    ? 'bg-alert/20 text-alert' 
                                    : category.risk === 'HIGH'
                                    ? 'bg-warning/20 text-warning'
                                    : 'bg-slate-700 text-slate-300'
                                  }
                                `}>
                                  {category.risk}
                                </span>
                              </div>
                              <p className="text-sm text-slate-400 mb-1">
                                {category.description}
                              </p>
                              <p className="text-sm text-slate-300 font-medium">
                                → {category.findings}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-slate-800 space-y-4">
                      <Link
                        href="/contact"
                        className="block w-full px-6 py-4 bg-gradient-to-r from-trust to-cyber text-slate-950 text-center rounded-xl font-bold hover:shadow-cyber-lg transition-all"
                      >
                        Get Your Full Compliance Audit
                      </Link>
                      <p className="text-sm text-center text-slate-400">
                        Book a free 30-minute consultation to review your actual AI systems
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-slate-500 mt-8"
        >
          This is a demonstration of common AI compliance gaps. Your actual audit will be customized to your specific systems and industry regulations.
        </motion.p>
      </div>
    </section>
  );
}


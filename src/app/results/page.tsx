'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  FileText,
  Lock,
  TrendingUp,
  Download,
  Calendar,
  Award
} from 'lucide-react';

function ResultsContent() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get('score') || '0');

  const getRiskLevel = (score: number) => {
    if (score >= 75) return { level: 'Critical', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' };
    if (score >= 50) return { level: 'High', color: 'text-orange-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' };
    if (score >= 25) return { level: 'Moderate', color: 'text-yellow-500', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' };
    return { level: 'Low', color: 'text-trust', bgColor: 'bg-trust/10', borderColor: 'border-trust/30' };
  };

  const riskLevel = getRiskLevel(score);

  const remediationSteps = [
    {
      phase: 'Phase 1: Immediate Actions (Week 1-2)',
      icon: <AlertTriangle className="w-6 h-6" />,
      priority: 'Critical',
      steps: [
        'Conduct emergency AI tool inventory across all departments',
        'Implement temporary usage restrictions on personal AI accounts',
        'Draft interim AI Usage Policy (template provided)',
        'Identify highest-risk data exposure points',
        'Schedule emergency leadership briefing'
      ],
      timeline: '1-2 weeks',
      cost: 'In-house (Free with our template)'
    },
    {
      phase: 'Phase 2: Policy & Training (Week 3-6)',
      icon: <FileText className="w-6 h-6" />,
      priority: 'High',
      steps: [
        'Finalize and distribute AI Usage Policy company-wide',
        'Conduct mandatory AI governance training for all staff',
        'Set up approved AI tool roster with proper BAAs/DPAs',
        'Implement basic monitoring and compliance checks',
        'Establish incident reporting procedures'
      ],
      timeline: '3-4 weeks',
      cost: '$2,997 - $7,997 (depending on company size)'
    },
    {
      phase: 'Phase 3: Compliance Framework (Week 7-12)',
      icon: <Lock className="w-6 h-6" />,
      priority: 'Medium',
      steps: [
        'Complete NJDPA/HIPAA/NY RAISE Act gap analysis',
        'Implement data classification system',
        'Deploy zero-knowledge AI architecture where needed',
        'Set up continuous compliance monitoring',
        'Prepare for regulatory audits'
      ],
      timeline: '5-6 weeks',
      cost: '$7,997 - $15,997 (full compliance package)'
    },
    {
      phase: 'Phase 4: Certification & Optimization (Week 13-16)',
      icon: <Award className="w-6 h-6" />,
      priority: 'Strategic',
      steps: [
        'Complete Apex-Certified Safe AI audit',
        'Obtain certification badge for marketing use',
        'Optimize AI workflows for maximum productivity',
        'Establish quarterly compliance review schedule',
        'Train internal AI governance champions'
      ],
      timeline: '3-4 weeks',
      cost: '$4,997 (certification) + ongoing support'
    },
    {
      phase: 'Phase 5: Ongoing Excellence (Quarterly)',
      icon: <TrendingUp className="w-6 h-6" />,
      priority: 'Maintenance',
      steps: [
        'Quarterly compliance audits and policy updates',
        'New regulation monitoring and adaptation',
        'Staff refresher training sessions',
        'AI tool evaluation and approval process',
        'Certification renewal and continuous improvement'
      ],
      timeline: 'Ongoing',
      cost: '$997/month (support retainer)'
    }
  ];

  const industrySpecific = {
    healthcare: [
      'HIPAA Business Associate Agreements for all AI vendors',
      'PHI encryption at rest and in transit verification',
      'AI scribe audit for zero-knowledge architecture',
      'OCR readiness documentation and audit trails'
    ],
    'title-insurance': [
      'Settlement Shield wire fraud prevention protocol',
      'NJ AI photo disclosure compliance for MLS listings',
      'Identity verification procedures for AI-powered communications',
      'NJDPA consumer data protection framework'
    ],
    saas: [
      'IP leakage prevention for sales/CS AI agents',
      'Trade secret protection in model training data',
      'NY RAISE Act responsible AI implementation',
      'Customer data isolation and consent management'
    ]
  };

  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className={`inline-flex items-center space-x-2 px-6 py-3 ${riskLevel.bgColor} border ${riskLevel.borderColor} rounded-full mb-6`}>
              <Shield className={`w-5 h-5 ${riskLevel.color}`} />
              <span className={`text-lg font-bold ${riskLevel.color}`}>
                {riskLevel.level} Risk Level Detected
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Personalized{' '}
              <span className="bg-gradient-to-r from-cyber to-trust bg-clip-text text-transparent">
                AI Governance Roadmap
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Based on your risk score of <span className={`font-bold ${riskLevel.color}`}>{score}/100</span>, 
              here's your step-by-step path to full compliance and Apex-Certified status.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-600 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-trust to-cyber text-slate-950 px-6 py-3 rounded-lg font-bold hover:shadow-cyber-lg transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Strategy Call</span>
              </Link>
            </div>
          </motion.div>

          {/* Risk Score Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 text-cyber mr-3" />
              What This Score Means
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-500 mb-2">
                  {score >= 50 ? 'Yes' : 'Unlikely'}
                </div>
                <p className="text-slate-300">Regulatory Exposure</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {score >= 40 ? 'High' : 'Moderate'}
                </div>
                <p className="text-slate-300">Data Leak Risk</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">
                  {score >= 30 ? 'Needed' : 'Recommended'}
                </div>
                <p className="text-slate-300">Policy Priority</p>
              </div>
            </div>
          </motion.div>

          {/* Remediation Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Your 5-Phase Remediation Plan
            </h2>
            
            <div className="space-y-6">
              {remediationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyber/50 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cyber/10 border border-cyber/30 rounded-lg text-cyber flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{step.phase}</h3>
                        <div className="flex items-center space-x-4 text-sm mt-2 md:mt-0">
                          <span className={`px-3 py-1 rounded-full ${
                            step.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            step.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                            step.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-trust/20 text-trust'
                          }`}>
                            {step.priority}
                          </span>
                          <span className="text-slate-400">{step.timeline}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {step.steps.map((item, idx) => (
                          <li key={idx} className="flex items-start text-slate-300">
                            <CheckCircle className="w-4 h-4 text-trust mr-2 mt-1 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                        <span className="text-sm text-slate-400">Investment: <span className="text-white font-semibold">{step.cost}</span></span>
                        {index < 2 && (
                          <span className="text-xs px-2 py-1 bg-alert/20 text-alert rounded">
                            Start Immediately
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Industry-Specific Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-cyber mr-3" />
              Industry-Specific Priorities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(industrySpecific).map(([industry, items]) => (
                <div key={industry} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                    {industry === 'title-insurance' ? 'Title Insurance' : industry}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-trust mr-2 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-trust to-cyber rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-slate-950 mb-4">
              Ready to Start Your Compliance Journey?
            </h2>
            <p className="text-xl text-slate-800 mb-8 max-w-3xl mx-auto">
              Book a free 30-minute strategy call with our AI governance experts. 
              We'll review your roadmap and create a custom implementation plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-slate-950 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Free Consultation</span>
              </Link>
              <Link
                href="/apex-seal"
                className="inline-flex items-center space-x-2 bg-slate-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-700 transition-all"
              >
                <Award className="w-5 h-5" />
                <span>Learn About Apex-Certified</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default function Results() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Loading your roadmap...</div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}

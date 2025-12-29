'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  ChevronRight, 
  ChevronLeft,
  Lock,
  FileWarning,
  Users,
  Database,
  Mail
} from 'lucide-react';

interface Question {
  id: string;
  question: string;
  icon: React.ReactNode;
  options: {
    text: string;
    riskValue: number;
  }[];
}

const questions: Question[] = [
  {
    id: 'personal-ai',
    question: 'Do employees use personal ChatGPT/Claude accounts for work tasks?',
    icon: <Users className="w-6 h-6" />,
    options: [
      { text: 'Yes, frequently', riskValue: 25 },
      { text: 'Sometimes', riskValue: 15 },
      { text: 'Rarely', riskValue: 5 },
      { text: 'Never - we have approved tools only', riskValue: 0 }
    ]
  },
  {
    id: 'sensitive-data',
    question: 'Does your firm handle sensitive NJ consumer data (PII, PHI, financial)?',
    icon: <Lock className="w-6 h-6" />,
    options: [
      { text: 'Yes, daily - healthcare/financial/real estate', riskValue: 20 },
      { text: 'Yes, occasionally', riskValue: 10 },
      { text: 'Minimal sensitive data', riskValue: 5 },
      { text: 'No sensitive data', riskValue: 0 }
    ]
  },
  {
    id: 'ai-policy',
    question: 'Do you have a written AI Usage Policy in place?',
    icon: <FileWarning className="w-6 h-6" />,
    options: [
      { text: 'No policy exists', riskValue: 25 },
      { text: 'Informal guidelines only', riskValue: 15 },
      { text: 'Draft policy, not enforced', riskValue: 10 },
      { text: 'Yes, documented and enforced', riskValue: 0 }
    ]
  },
  {
    id: 'compliance',
    question: 'Are you aware of NJ Data Privacy Act (NJDPA) or NY RAISE Act requirements?',
    icon: <Shield className="w-6 h-6" />,
    options: [
      { text: 'Not familiar with either', riskValue: 20 },
      { text: 'Heard of them, not compliant', riskValue: 15 },
      { text: 'Partially compliant', riskValue: 8 },
      { text: 'Fully compliant and audited', riskValue: 0 }
    ]
  },
  {
    id: 'data-training',
    question: 'Could your AI tools be training on your proprietary data or client information?',
    icon: <Database className="w-6 h-6" />,
    options: [
      { text: 'Yes, definitely possible', riskValue: 25 },
      { text: 'Unsure - haven\'t checked', riskValue: 20 },
      { text: 'Probably not', riskValue: 10 },
      { text: 'No - we use zero-data-retention tools', riskValue: 0 }
    ]
  }
];

interface RiskLevel {
  level: 'Critical' | 'High' | 'Moderate' | 'Low';
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const getRiskLevel = (score: number): RiskLevel => {
  if (score >= 75) {
    return {
      level: 'Critical',
      color: 'text-red-500',
      icon: <AlertTriangle className="w-12 h-12 text-red-500" />,
      title: 'Critical Risk Exposure',
      description: 'Your organization faces immediate regulatory and security threats. Urgent action required.'
    };
  } else if (score >= 50) {
    return {
      level: 'High',
      color: 'text-orange-500',
      icon: <AlertTriangle className="w-12 h-12 text-orange-500" />,
      title: 'High Risk Level',
      description: 'Significant vulnerabilities detected. You should prioritize AI governance immediately.'
    };
  } else if (score >= 25) {
    return {
      level: 'Moderate',
      color: 'text-yellow-500',
      icon: <FileWarning className="w-12 h-12 text-yellow-500" />,
      title: 'Moderate Risk',
      description: 'Some gaps in your AI governance. Proactive measures recommended.'
    };
  } else {
    return {
      level: 'Low',
      color: 'text-trust',
      icon: <CheckCircle className="w-12 h-12 text-trust" />,
      title: 'Low Risk',
      description: 'You\'re on the right track! Let\'s ensure you stay ahead of evolving regulations.'
    };
  }
};

export default function InteractiveRiskCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({
    email: '',
    name: '',
    company: '',
    industry: 'healthcare'
  });

  const totalSteps = questions.length;
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleAnswer = (questionId: string, riskValue: number) => {
    setAnswers({ ...answers, [questionId]: riskValue });
    
    if (currentStep < totalSteps - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const calculateRiskScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0);
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const riskScore = calculateRiskScore();
    const riskLevel = getRiskLevel(riskScore);

    try {
      const response = await fetch('/api/risk-calculator-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          riskScore,
          riskLevel: riskLevel.level,
          answers
        })
      });

      if (response.ok) {
        setShowLeadForm(false);
        // Show full remediation roadmap
        window.location.href = `/results?score=${riskScore}&email=${encodeURIComponent(leadData.email)}`;
      }
    } catch (error) {
      console.error('Lead submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const riskScore = calculateRiskScore();
  const riskLevel = getRiskLevel(riskScore);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {!showResults ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 shadow-2xl"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-300">
                Question {currentStep + 1} of {totalSteps}
              </span>
              <span className="text-sm font-semibold text-cyber">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-trust to-cyber h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start space-x-4 mb-8">
                <div className="p-3 bg-cyber/10 border border-cyber/30 rounded-lg text-cyber">
                  {currentQuestion.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentQuestion.question}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Select the option that best describes your situation
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(currentQuestion.id, option.riskValue)}
                    className="w-full text-left p-4 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyber hover:bg-slate-800 transition-all group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200 group-hover:text-white font-medium">
                        {option.text}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-cyber transition-colors" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          {currentStep > 0 && (
            <div className="mt-6 flex justify-start">
              <button
                onClick={handlePrevious}
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-cyber transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Question</span>
              </button>
            </div>
          )}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 shadow-2xl"
        >
          {/* Results Preview */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              {riskLevel.icon}
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">
              Your Risk Score: <span className={riskLevel.color}>{riskScore}/100</span>
            </h2>
            <h3 className={`text-2xl font-semibold mb-4 ${riskLevel.color}`}>
              {riskLevel.title}
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {riskLevel.description}
            </p>
          </div>

          {/* Conversion Wall */}
          {!showLeadForm ? (
            <div className="bg-slate-800/50 border border-cyber/30 rounded-xl p-8 text-center">
              <Lock className="w-12 h-12 text-cyber mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Unlock Your 5-Page Remediation Roadmap
              </h3>
              <p className="text-slate-300 mb-6">
                See exactly which regulations apply to your industry, your compliance gaps, 
                and step-by-step actions to achieve Apex-Certified status.
              </p>
              <button
                onClick={() => setShowLeadForm(true)}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-trust to-cyber text-slate-950 px-8 py-4 rounded-lg font-bold hover:shadow-cyber-lg transition-all"
              >
                <Mail className="w-5 h-5" />
                <span>Get My Free Roadmap</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-slate-500 mt-4">
                No credit card required. Instant access via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitLead} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadData.name}
                    onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={leadData.email}
                    onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={leadData.company}
                  onChange={(e) => setLeadData({ ...leadData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Industry *
                </label>
                <select
                  required
                  value={leadData.industry}
                  onChange={(e) => setLeadData({ ...leadData, industry: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                >
                  <option value="healthcare">Healthcare</option>
                  <option value="title-insurance">Title Insurance / Real Estate</option>
                  <option value="saas">SaaS / Technology</option>
                  <option value="financial">Financial Services</option>
                  <option value="legal">Legal Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-trust to-cyber text-slate-950 px-8 py-4 rounded-lg font-bold hover:shadow-cyber-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    <span>Get My Remediation Roadmap</span>
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By submitting, you agree to receive our AI Governance Roadmap and occasional insights. 
                We respect your privacy and won't spam you.
              </p>
            </form>
          )}
        </motion.div>
      )}
    </div>
  );
}


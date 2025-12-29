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
  Mail,
  Sparkles
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
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [leadData, setLeadData] = useState({
    email: '',
    name: '',
    company: '',
    industry: 'healthcare'
  });

  const totalSteps = questions.length;
  const currentQuestion = questions[currentStep];
  const progress = showLeadForm ? 100 : ((currentStep + 1) / totalSteps) * 100;

  const handleAnswer = (questionId: string, riskValue: number) => {
    const newAnswers = { ...answers, [questionId]: riskValue };
    setAnswers(newAnswers);
    
    // If this is the last question, show lead form instead of results
    if (currentStep < totalSteps - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowLeadForm(true), 300);
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
        // Show success message
        setShowSuccess(true);
        
        // After 3 seconds, show the risk score results
        setTimeout(() => {
          setShowSuccess(false);
          setShowResults(true);
        }, 3000);
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const riskScore = calculateRiskScore();
  const riskLevel = getRiskLevel(riskScore);

  return (
    <div className="w-full max-w-4xl mx-auto">
      {!showLeadForm && !showSuccess && !showResults ? (
        /* QUESTIONS SECTION */
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
      ) : showLeadForm && !showSuccess && !showResults ? (
        /* LEAD CAPTURE FORM - BEFORE SHOWING SCORE */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Lock className="w-16 h-16 text-cyber animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Almost There! 🎯
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Enter your details to unlock your personalized risk score and receive your 
              <span className="font-bold text-cyber"> 2026 AI Remediation Roadmap</span> via email.
            </p>
          </div>

          <form onSubmit={handleSubmitLead} className="space-y-4 max-w-lg mx-auto">
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

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={leadData.name}
                onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Company
              </label>
              <input
                type="text"
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
                  <Sparkles className="w-5 h-5" />
                  <span>Show My Risk Score & Get Roadmap</span>
                </>
              )}
            </button>

            <p className="text-xs text-slate-400 text-center">
              By submitting, you'll receive your personalized AI Governance Roadmap addressing 
              the NJ Data Privacy Act. We respect your privacy.
            </p>
          </form>
        </motion.div>
      ) : showSuccess ? (
        /* SUCCESS MESSAGE */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900/50 border border-trust rounded-2xl p-12 shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-trust" />
              <motion.div
                className="absolute inset-0 bg-trust rounded-full opacity-20"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h2 className="text-4xl font-bold text-white mb-4">
            Success! 🎉
          </h2>
          <p className="text-xl text-trust font-semibold mb-4">
            Your Detailed 2026 AI Remediation Roadmap is being sent to your inbox.
          </p>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8">
            Check your email for a comprehensive PDF addressing the <span className="font-bold text-cyber">NJ Data Privacy Act</span> and your specific industry requirements. 
            Your risk score is being calculated...
          </p>
          
          <div className="flex justify-center">
            <div className="w-12 h-12 border-4 border-cyber border-t-transparent rounded-full animate-spin"></div>
          </div>
        </motion.div>
      ) : (
        /* RESULTS - SHOW AFTER SUCCESS MESSAGE */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 shadow-2xl"
        >
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

          <div className="bg-slate-800/50 border border-cyber/30 rounded-xl p-8 text-center">
            <Mail className="w-12 h-12 text-cyber mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Check Your Email!
            </h3>
            <p className="text-slate-300 mb-6">
              Your personalized <span className="font-bold text-cyber">2026 AI Remediation Roadmap</span> PDF 
              has been sent to <span className="font-semibold text-white">{leadData.email}</span>.
              It includes specific NJDPA compliance steps for your industry.
            </p>
            <p className="text-sm text-slate-400 mb-6">
              Don't see it? Check your spam folder or contact us at info@apexnovaconsulting.com
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-trust to-cyber text-slate-950 px-8 py-4 rounded-lg font-bold hover:shadow-cyber-lg transition-all"
            >
              <span>Book Free Strategy Call</span>
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}

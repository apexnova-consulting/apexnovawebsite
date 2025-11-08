'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaExclamationTriangle, FaCheckCircle, FaArrowRight, FaChartLine } from 'react-icons/fa';

interface Question {
  id: string;
  question: string;
  options: { label: string; value: number; risk: string }[];
}

export default function AIRiskCalculatorPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const questions: Question[] = [
    {
      id: 'q1',
      question: 'How many AI tools does your team currently use?',
      options: [
        { label: '0-2 tools', value: 1, risk: 'low' },
        { label: '3-5 tools', value: 2, risk: 'medium' },
        { label: '6-10 tools', value: 3, risk: 'high' },
        { label: '10+ tools (or we don\'t know)', value: 4, risk: 'critical' }
      ]
    },
    {
      id: 'q2',
      question: 'Do you have a written AI usage policy?',
      options: [
        { label: 'Yes, comprehensive and enforced', value: 1, risk: 'low' },
        { label: 'Yes, but not well enforced', value: 2, risk: 'medium' },
        { label: 'Draft/in progress', value: 3, risk: 'high' },
        { label: 'No policy exists', value: 4, risk: 'critical' }
      ]
    },
    {
      id: 'q3',
      question: 'How do you currently manage sensitive data in AI tools?',
      options: [
        { label: 'Strict protocols and data masking', value: 1, risk: 'low' },
        { label: 'Guidelines exist but inconsistently followed', value: 2, risk: 'medium' },
        { label: 'Rely on employee judgment', value: 3, risk: 'high' },
        { label: 'No specific guidelines', value: 4, risk: 'critical' }
      ]
    },
    {
      id: 'q4',
      question: 'Has your team received training on AI security best practices?',
      options: [
        { label: 'Regular comprehensive training', value: 1, risk: 'low' },
        { label: 'One-time training session', value: 2, risk: 'medium' },
        { label: 'Informal guidelines only', value: 3, risk: 'high' },
        { label: 'No formal training', value: 4, risk: 'critical' }
      ]
    },
    {
      id: 'q5',
      question: 'Do you monitor AI tool usage and data sharing?',
      options: [
        { label: 'Yes, with automated monitoring systems', value: 1, risk: 'low' },
        { label: 'Periodic manual audits', value: 2, risk: 'medium' },
        { label: 'No monitoring, trust-based system', value: 3, risk: 'high' },
        { label: 'Not sure/no monitoring', value: 4, risk: 'critical' }
      ]
    },
    {
      id: 'q6',
      question: 'Are you in a regulated industry (healthcare, finance, legal)?',
      options: [
        { label: 'Yes, with full compliance measures', value: 1, risk: 'low' },
        { label: 'Yes, working towards compliance', value: 3, risk: 'high' },
        { label: 'Yes, but no AI-specific compliance', value: 4, risk: 'critical' },
        { label: 'No, not regulated', value: 1, risk: 'low' }
      ]
    },
    {
      id: 'q7',
      question: 'What types of data does your team input into AI tools?',
      options: [
        { label: 'Only public/non-sensitive data', value: 1, risk: 'low' },
        { label: 'Some internal business data', value: 2, risk: 'medium' },
        { label: 'Customer data and PII', value: 3, risk: 'high' },
        { label: 'Highly sensitive IP, financial, or health data', value: 4, risk: 'critical' }
      ]
    },
    {
      id: 'q8',
      question: 'Have you reviewed the terms of service for your AI tools?',
      options: [
        { label: 'Yes, thoroughly for all tools', value: 1, risk: 'low' },
        { label: 'Reviewed some key tools', value: 2, risk: 'medium' },
        { label: 'No, but planning to', value: 3, risk: 'high' },
        { label: 'No, never reviewed them', value: 4, risk: 'critical' }
      ]
    }
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const calculateRiskScore = () => {
    const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const maxScore = questions.length * 4;
    const percentage = (totalScore / maxScore) * 100;

    if (percentage <= 25) return { level: 'Low Risk', color: 'text-green-600', bgColor: 'bg-green-100', description: 'Your AI security posture is solid, but there\'s always room for improvement.' };
    if (percentage <= 50) return { level: 'Medium Risk', color: 'text-yellow-600', bgColor: 'bg-yellow-100', description: 'You have some security measures in place, but significant vulnerabilities exist.' };
    if (percentage <= 75) return { level: 'High Risk', color: 'text-orange-600', bgColor: 'bg-orange-100', description: 'Your organization faces serious AI security risks that need immediate attention.' };
    return { level: 'Critical Risk', color: 'text-red-600', bgColor: 'bg-red-100', description: 'Your AI usage presents severe security and compliance risks. Immediate action required.' };
  };

  const getTop3Vulnerabilities = () => {
    const vulnerabilities = [
      { id: 'q2', issue: 'No AI Governance Policy', impact: 'Without clear policies, employees may inadvertently expose sensitive data.' },
      { id: 'q3', issue: 'Inadequate Data Protection', impact: 'Sensitive data may be training public AI models without your knowledge.' },
      { id: 'q4', issue: 'Lack of Security Training', impact: 'Untrained employees are your biggest security vulnerability.' },
      { id: 'q5', issue: 'No Monitoring Systems', impact: 'You can\'t protect what you can\'t see. Blind spots create risk.' },
      { id: 'q7', issue: 'Sensitive Data Exposure', impact: 'Customer data and IP in AI tools could lead to breaches and compliance violations.' },
      { id: 'q8', issue: 'Unreviewed Terms of Service', impact: 'You may have already agreed to terms that expose your data.' }
    ];

    return vulnerabilities
      .filter(v => answers[v.id] >= 3)
      .slice(0, 3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const riskScore = calculateRiskScore();
      const vulnerabilities = getTop3Vulnerabilities();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          type: 'ai-risk-calculator',
          riskScore: riskScore.level,
          vulnerabilities: vulnerabilities.map(v => v.issue).join(', ')
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const riskScore = showResults ? calculateRiskScore() : null;
  const vulnerabilities = showResults ? getTop3Vulnerabilities() : [];

  return (
    <main className="bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
              <FaShieldAlt className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            What's Your Company's AI Risk Score?
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Take this 2-minute assessment to discover your top 3 vulnerabilities and get a personalized security report.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {!showResults ? (
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary rounded-full h-3 transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-secondary">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary hover:bg-opacity-5 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-800 group-hover:text-primary">
                        {option.label}
                      </span>
                      <FaArrowRight className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {!submitSuccess ? (
                <div className="space-y-8">
                  {/* Results Card */}
                  <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${riskScore?.bgColor} mb-6`}>
                        {riskScore?.level.includes('Low') ? (
                          <FaCheckCircle className={`w-12 h-12 ${riskScore?.color}`} />
                        ) : (
                          <FaExclamationTriangle className={`w-12 h-12 ${riskScore?.color}`} />
                        )}
                      </div>
                      <h2 className={`text-4xl font-bold mb-4 ${riskScore?.color}`}>
                        {riskScore?.level}
                      </h2>
                      <p className="text-xl text-gray-600">
                        {riskScore?.description}
                      </p>
                    </div>

                    {/* Top Vulnerabilities */}
                    {vulnerabilities.length > 0 && (
                      <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-secondary">
                          Your Top {vulnerabilities.length} Vulnerabilities:
                        </h3>
                        <div className="space-y-6">
                          {vulnerabilities.map((vuln, index) => (
                            <div key={index} className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                              <div className="flex items-start">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                                    {index + 1}
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <h4 className="text-lg font-bold text-red-900 mb-2">{vuln.issue}</h4>
                                  <p className="text-red-800">{vuln.impact}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Lead Capture Form */}
                  <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
                    <h3 className="text-3xl font-bold mb-4 text-secondary text-center">
                      Get Your Personalized AI Security Report
                    </h3>
                    <p className="text-gray-600 text-center mb-8">
                      Enter your details below and we'll send you a comprehensive report with specific recommendations for your situation.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Role *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="e.g. CEO, CTO, Director of IT"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Sending...' : 'Get My Free Security Report'}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        We respect your privacy. Your information will never be shared with third parties.
                      </p>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-secondary">
                    Thank You!
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Your personalized AI Security Report is on its way to your inbox. 
                    We'll also reach out within 24 hours to discuss your results and how we can help.
                  </p>
                  <Link
                    href="/services/ai-governance"
                    className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all group"
                  >
                    Explore Our AI Security Services
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      {!showResults && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-secondary">
                Why Trust ApexNova with Your AI Security?
              </h2>
              <p className="text-lg text-gray-600">
                We've helped dozens of companies secure their AI operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <FaShieldAlt className="w-8 h-8" />, title: 'Enterprise-Grade Security', description: 'Battle-tested frameworks used by Fortune 500 companies' },
                { icon: <FaCheckCircle className="w-8 h-8" />, title: 'Compliance Experts', description: 'Deep expertise in GDPR, HIPAA, SOC 2, and more' },
                { icon: <FaChartLine className="w-8 h-8" />, title: 'Proven Results', description: 'Zero breaches for clients who implement our recommendations' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}


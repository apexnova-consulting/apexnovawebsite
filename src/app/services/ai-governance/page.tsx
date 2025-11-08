'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaShieldAlt, FaLock, FaChartLine, FaUsers, FaFileAlt, FaCog } from 'react-icons/fa';

export default function AIGovernancePage() {
  const benefits = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Data Protection",
      description: "Ensure your sensitive data never trains public AI models"
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "Compliance Ready",
      description: "Meet GDPR, HIPAA, SOC 2 and other regulatory requirements"
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Risk Mitigation",
      description: "Identify and eliminate vulnerabilities before they become breaches"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Team Enablement",
      description: "Empower your team to use AI confidently and safely"
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Clear Policies",
      description: "Custom governance frameworks that make sense for your business"
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Automated Security",
      description: "Build safeguards directly into your workflows"
    }
  ];

  const tiers = [
    {
      id: "starter",
      name: "AI Security Starter Kit",
      price: "$1,997",
      ideal: "Solo Entrepreneurs & Freelancers",
      description: "Get your AI house in order with essential security foundations.",
      features: [
        "AI Tool Audit (up to 5 tools)",
        "Basic Data Security Policy Template",
        "AI Usage Guidelines Document",
        "Security Checklist & Quick Wins",
        "1-hour Implementation Call"
      ],
      deliveryTime: "3-5 business days",
      cta: "Get Started",
      popular: false
    },
    {
      id: "sprint",
      name: "AI Integration & Compliance Sprint",
      price: "$14,997",
      ideal: "SMBs (10-50 employees)",
      description: "Complete AI governance rollout with team training and compliance framework.",
      features: [
        "Comprehensive AI Tool Stack Audit",
        "Custom AI Governance Policy",
        "Data Classification Framework",
        "Compliance Assessment (GDPR/HIPAA)",
        "Team Training Workshops (3 sessions)",
        "Secure Workflow Implementation",
        "30-day Post-Launch Support"
      ],
      deliveryTime: "4-6 weeks",
      cta: "Book Consultation",
      popular: true
    },
    {
      id: "enterprise",
      name: "AI Governance Rollout",
      price: "$49,997+",
      ideal: "Enterprises (50+ employees)",
      description: "Enterprise-grade AI governance with ongoing advisory and implementation support.",
      features: [
        "Enterprise-Wide AI Risk Assessment",
        "Multi-Department Governance Framework",
        "Custom Compliance Mapping",
        "Vendor Security Evaluation",
        "Executive Training & Buy-in Sessions",
        "Department-Specific Playbooks",
        "Quarterly Governance Reviews",
        "Dedicated Implementation Manager",
        "12-month Advisory Support"
      ],
      deliveryTime: "3-6 months",
      cta: "Contact Sales",
      popular: false
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We learn about your business, current AI usage, and pain points"
    },
    {
      step: "2",
      title: "Comprehensive Audit",
      description: "We map all AI tools, data flows, and identify vulnerabilities"
    },
    {
      step: "3",
      title: "Strategy Session",
      description: "We present findings and co-create your custom governance framework"
    },
    {
      step: "4",
      title: "Implementation",
      description: "We deploy policies, configure secure tools, and train your team"
    },
    {
      step: "5",
      title: "Ongoing Support",
      description: "Regular check-ins, updates, and continuous optimization"
    }
  ];

  const faqs = [
    {
      question: "Why do I need AI governance?",
      answer: "Every AI tool your team uses handles data. Without governance, you risk data leaks, compliance violations, IP theft, and reputational damage. AI governance ensures you get the benefits of AI without the catastrophic risks."
    },
    {
      question: "How long does implementation take?",
      answer: "It depends on your tier. Starter Kit: 3-5 days. Sprint: 4-6 weeks. Enterprise: 3-6 months. We move as fast as your team can absorb the changes."
    },
    {
      question: "Do you work with specific industries?",
      answer: "Yes! We have specialized experience in healthcare, financial services, legal, and technology companies. We understand industry-specific compliance requirements like HIPAA, PCI-DSS, and SOC 2."
    },
    {
      question: "What if we're already using AI tools?",
      answer: "Perfect! We'll audit your current setup, identify risks, and help you secure what you have while optimizing for better performance and compliance."
    },
    {
      question: "Can you help with AI policy creation?",
      answer: "Absolutely. Every engagement includes a custom AI governance policy tailored to your industry, size, and risk profile. No generic templates—just practical policies your team will actually follow."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              AI Governance & Security
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Your Outsourced AI Governance Team. We help you harness the power of AI without the legal, security, and operational risks.
            </p>
            <Link
              href="/ai-risk-calculator"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
            >
              Get Your Free AI Health Check
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              The Problem: AI Without Governance Is a Ticking Time Bomb
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Your team is using ChatGPT, Claude, Midjourney, and dozens of other AI tools right now. 
              Every prompt, every document upload, every generated output could be exposing your:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <h3 className="font-bold text-xl mb-2 text-secondary">Customer Data</h3>
              <p className="text-gray-600">PII, payment info, confidential communications</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <h3 className="font-bold text-xl mb-2 text-secondary">Intellectual Property</h3>
              <p className="text-gray-600">Proprietary code, product roadmaps, trade secrets</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <h3 className="font-bold text-xl mb-2 text-secondary">Strategic Plans</h3>
              <p className="text-gray-600">M&A discussions, pricing strategies, competitive intel</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <h3 className="font-bold text-xl mb-2 text-secondary">Legal Exposure</h3>
              <p className="text-gray-600">Compliance violations, regulatory fines, lawsuits</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-secondary">
              One careless prompt could cost you millions. Let's fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              What You Get With AI Governance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection that doesn't slow down innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              Choose Your AI Security Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a solo entrepreneur or a large enterprise, we have a tailored solution to secure your AI operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div 
                key={tier.id}
                id={tier.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all ${
                  tier.popular ? 'ring-4 ring-accent ring-opacity-50 transform scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded-bl-lg font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-secondary">{tier.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-sm font-semibold text-accent mb-4">{tier.ideal}</p>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-4">
                      ⏱️ Delivery: {tier.deliveryTime}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.id === 'enterprise' ? '/contact?service=enterprise' : '/contact?service=' + tier.id}
                    className={`group flex items-center justify-center w-full font-semibold px-6 py-4 rounded-lg transition-all ${
                      tier.popular 
                        ? 'bg-accent hover:bg-accent-dark text-white' 
                        : 'bg-primary hover:bg-primary-dark text-white'
                    }`}
                  >
                    {tier.cta}
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven, systematic approach from audit to implementation
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-secondary">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your AI Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Start with a free AI Health Check and discover your top 3 vulnerabilities.
          </p>
          <Link
            href="/ai-risk-calculator"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
          >
            Get Your Free AI Health Check
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}


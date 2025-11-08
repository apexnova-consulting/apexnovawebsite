'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp, FaShieldAlt, FaLock, FaCheckCircle, FaFileAlt, FaClock, FaUserShield } from 'react-icons/fa';

const InteractiveFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      question: "Why do I need AI governance?",
      answer: "Every AI tool your team uses handles data. Without governance, you risk data leaks, compliance violations, IP theft, and reputational damage. AI governance ensures you get the benefits of AI without the catastrophic risks. It's not just about security—it's about enabling innovation safely."
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      question: "How long does implementation take?",
      answer: "Timeline depends on your tier: Starter Kit (3-5 days), Sprint (4-6 weeks), Enterprise (3-6 months). We move as fast as your team can absorb the changes while ensuring nothing is rushed. Quick wins are implemented immediately, while comprehensive frameworks are built systematically."
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      question: "What if we're already using AI tools?",
      answer: "Perfect! Most of our clients are already using AI when they come to us. We'll audit your current setup, identify risks you didn't know existed, and help you secure what you have while optimizing for better performance and compliance. No need to start from scratch."
    },
    {
      icon: <FaFileAlt className="w-6 h-6" />,
      question: "Do you create AI policies from scratch?",
      answer: "Absolutely. Every engagement includes a custom AI governance policy tailored to your industry, size, and risk profile. No generic templates—just practical policies your team will actually follow. We also help with implementation and training to ensure adoption."
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      question: "Which compliance standards do you support?",
      answer: "We have specialized experience with GDPR, HIPAA, SOC 2, PCI-DSS, and industry-specific regulations. We map your AI usage to compliance requirements, identify gaps, and implement controls. We've helped companies pass audits with zero AI-related findings."
    },
    {
      icon: <FaUserShield className="w-6 h-6" />,
      question: "What makes your approach different?",
      answer: "We bridge the gap between AI innovation and security. Traditional cybersecurity firms don't understand AI's unique risks. AI consultants don't prioritize security. We do both. Plus, we're practitioners—we implement, not just advise. You get hands-on support, not just a report."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-secondary">
            Common Questions About AI Security
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the questions we hear most often from security-conscious leaders
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-primary transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    openIndex === index ? 'bg-primary text-white' : 'bg-white text-primary'
                  } transition-colors`}>
                    {faq.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary pr-4">{faq.question}</h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-16">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Have more questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/ai-risk-calculator"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Take the Free Assessment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white border-2 border-primary hover:bg-primary hover:text-white text-primary font-semibold px-8 py-4 rounded-lg transition-all"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveFAQ;


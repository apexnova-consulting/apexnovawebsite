'use client';

import React from 'react';
import Link from 'next/link';
import { FaSearch, FaShieldAlt, FaCogs, FaGraduationCap } from 'react-icons/fa';

const AISecurityFramework = () => {
  const steps = [
    {
      number: "01",
      icon: <FaSearch className="w-10 h-10" />,
      title: "Discover & Audit",
      description: "We map your AI usage and identify critical risks",
      details: [
        "Complete AI tool inventory across all departments",
        "Data flow mapping and classification",
        "Vulnerability assessment and risk scoring",
        "Shadow AI discovery (tools being used without approval)"
      ]
    },
    {
      number: "02",
      icon: <FaShieldAlt className="w-10 h-10" />,
      title: "Strategize & Secure",
      description: "We build your custom AI Policy and secure your toolstack",
      details: [
        "Custom AI Governance Policy tailored to your industry",
        "Compliance framework (GDPR, HIPAA, SOC 2)",
        "Vendor security evaluation and approval process",
        "Incident response protocols"
      ]
    },
    {
      number: "03",
      icon: <FaCogs className="w-10 h-10" />,
      title: "Integrate & Automate",
      description: "We implement safe, compliant AI workflows",
      details: [
        "Secure AI tool configuration and setup",
        "Data protection measures and access controls",
        "Workflow automation with built-in safeguards",
        "Monitoring and logging systems"
      ]
    },
    {
      number: "04",
      icon: <FaGraduationCap className="w-10 h-10" />,
      title: "Train & Empower",
      description: "We train your team to be AI Champions",
      details: [
        "Role-based training programs",
        "Security awareness workshops",
        "AI governance documentation and playbooks",
        "Ongoing support and quarterly reviews"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our AI Security Framework
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven, systematic approach to securing your AI operations without slowing down innovation.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative"
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 lg:w-1/3 flex flex-col items-center relative">
                  <div className="text-8xl font-bold text-accent-light opacity-20 mb-4">
                    {step.number}
                  </div>
                  <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center text-white mb-4 relative z-10">
                    {step.icon}
                  </div>
                  {/* Connector Line - positioned to not overlap content */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block w-0.5 h-16 bg-accent-light opacity-30 mt-4"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 lg:w-2/3 bg-secondary-light rounded-2xl p-8 shadow-xl">
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-xl text-gray-300 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-accent-light rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold mb-6">
            Ready to secure your AI operations?
          </p>
          <Link
            href="/ai-risk-calculator"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
          >
            Get Your Free AI Health Check
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AISecurityFramework;

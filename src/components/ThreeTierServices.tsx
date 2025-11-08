'use client';

import React from 'react';
import Link from 'next/link';
import { FaRocket, FaBuilding, FaCity, FaArrowRight, FaCheck } from 'react-icons/fa';

const ThreeTierServices = () => {
  const tiers = [
    {
      icon: <FaRocket className="w-12 h-12" />,
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
      cta: "Get Started",
      href: "/services/ai-governance#starter",
      popular: false
    },
    {
      icon: <FaBuilding className="w-12 h-12" />,
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
      cta: "Book Consultation",
      href: "/services/ai-governance#sprint",
      popular: true
    },
    {
      icon: <FaCity className="w-12 h-12" />,
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
      cta: "Contact Sales",
      href: "/contact?service=enterprise",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-secondary">
            Choose Your AI Security Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a solo entrepreneur or a large enterprise, we have a tailored solution to secure your AI operations.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105 ${
                tier.popular ? 'ring-4 ring-accent ring-opacity-50' : ''
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-accent text-white px-4 py-2 rounded-bl-lg font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    tier.popular ? 'bg-accent text-white' : 'bg-primary text-white'
                  }`}>
                    {tier.icon}
                  </div>
                </div>

                {/* Tier Name & Price */}
                <h3 className="text-2xl font-bold text-center mb-2 text-secondary">{tier.name}</h3>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                </div>
                <p className="text-center text-sm font-semibold text-accent mb-4">{tier.ideal}</p>
                <p className="text-center text-gray-600 mb-8">{tier.description}</p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <FaCheck className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={tier.href}
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

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Not sure which tier is right for you? 
            <Link href="/contact" className="text-primary hover:text-primary-dark font-semibold ml-2 underline">
              Schedule a free consultation
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThreeTierServices;


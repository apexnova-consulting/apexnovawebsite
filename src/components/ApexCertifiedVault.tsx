'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Award, FileCheck, Scale, CheckCircle, ArrowRight } from 'lucide-react';

export default function ApexCertifiedVault() {
  const certificationBenefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Regulatory Compliance',
      description: 'Verified NJDPA, NY RAISE Act, and HIPAA AI compliance'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'Audit-Ready',
      description: 'Complete documentation and evidence trail for OCR, state audits'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Marketing Advantage',
      description: 'Use the Apex-Certified badge on your website, proposals, and materials'
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: 'Legal Defensibility',
      description: 'Third-party verification reduces liability in AI-related disputes'
    }
  ];

  const legalIntelligence = [
    {
      title: 'NJ Data Privacy Act (NJDPA)',
      status: 'Active — Enforceable Now',
      icon: <Scale className="w-8 h-8 text-cyber" />,
      keyProvisions: [
        'Requires consumer consent for AI processing of personal data',
        'Mandates data minimization and purpose limitation',
        'Prohibits discriminatory AI decision-making',
        '$20,000 per violation penalty structure'
      ],
      impactedIndustries: ['Healthcare', 'Real Estate', 'Financial Services', 'SaaS'],
      deadline: 'January 15, 2025 (Compliance Required)'
    },
    {
      title: 'NY RAISE Act (Responsible AI in Employment)',
      status: 'Enacted — Expanding Scope',
      icon: <FileCheck className="w-8 h-8 text-trust" />,
      keyProvisions: [
        'Requires disclosure of AI use in employment decisions',
        'Mandates bias audits for AI hiring/promotion tools',
        'Applies to any company with NY employees or customers',
        'Civil penalties + private right of action for violations'
      ],
      impactedIndustries: ['All employers operating in NY', 'HR Tech SaaS', 'Recruiting Firms'],
      deadline: 'July 1, 2025 (Audit requirement active)'
    }
  ];

  const certificationLevels = [
    {
      level: 'Apex-Certified Safe AI',
      price: '$7,997',
      description: 'Complete AI governance certification for one industry vertical',
      features: [
        'Full NJDPA & RAISE Act compliance audit',
        'AI tool inventory and risk assessment',
        'Policy development and implementation',
        'Staff training (up to 50 employees)',
        'Certification badge and marketing kit',
        'Quarterly compliance reviews (Year 1)'
      ],
      badge: true
    },
    {
      level: 'Apex-Certified Safe Scribe™',
      price: '$4,997',
      description: 'Specialized certification for healthcare AI scribes',
      features: [
        'HIPAA-AI compliance verification',
        'Zero-knowledge architecture audit',
        'PHI encryption and BAA review',
        'NJ Civil Rights AI bias testing',
        'Safe Scribe certification badge',
        'OCR audit preparation'
      ],
      badge: true
    },
    {
      level: 'Apex-Certified Settlement Shield™',
      price: '$5,997',
      description: 'Wire fraud prevention certification for title companies',
      features: [
        'Voice-cloning prevention protocols',
        'Multi-factor wire verification setup',
        'Identity theft prevention audit',
        'NJDPA consumer data compliance',
        'Settlement Shield certification',
        'E&O insurance documentation'
      ],
      badge: true
    }
  ];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyber/10 border border-cyber/30 rounded-full mb-6">
            <Award className="w-5 h-5 text-cyber" />
            <span className="text-sm font-semibold text-cyber">
              The Apex-Certified Trust Vault
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Earn the{' '}
            <span className="bg-gradient-to-r from-cyber to-trust bg-clip-text text-transparent">
              Apex-Certified Safe AI
            </span>{' '}
            Badge
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The industry's most rigorous AI governance certification. Prove compliance, 
            reduce liability, and win more business with the trust badge that matters.
          </p>
        </motion.div>

        {/* Certification Badge SVG Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            {/* SVG Badge */}
            <svg
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              {/* Outer Circle */}
              <circle cx="140" cy="140" r="135" fill="url(#badgeGradient)" />
              <circle cx="140" cy="140" r="135" stroke="#00f5ff" strokeWidth="3" />
              
              {/* Inner Shield */}
              <path
                d="M140 45 L70 85 L70 155 Q70 210 140 235 Q210 210 210 155 L210 85 Z"
                fill="#0f172a"
                stroke="#10b981"
                strokeWidth="3"
              />
              
              {/* Check Mark */}
              <path
                d="M110 140 L130 160 L175 110"
                stroke="#00f5ff"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Top Text */}
              <text
                x="140"
                y="30"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="bold"
                fill="#00f5ff"
                textAnchor="middle"
              >
                APEX-CERTIFIED
              </text>
              
              {/* Bottom Text */}
              <text
                x="140"
                y="260"
                fontFamily="Arial, sans-serif"
                fontSize="14"
                fontWeight="bold"
                fill="#10b981"
                textAnchor="middle"
              >
                SAFE AI • 2026
              </text>
              
              {/* Side Text */}
              <text
                x="140"
                y="195"
                fontFamily="Arial, sans-serif"
                fontSize="11"
                fill="#cbd5e1"
                textAnchor="middle"
              >
                COMPLIANT
              </text>
              
              {/* Gradient Definitions */}
              <defs>
                <radialGradient id="badgeGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </radialGradient>
              </defs>
            </svg>
            
            {/* Animated Glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-50">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber to-trust rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {certificationBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-cyber/50 transition-all"
            >
              <div className="text-cyber mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Legal Intelligence Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Legal Intelligence: What You Need to Know
            </h3>
            <p className="text-lg text-slate-300">
              Stay ahead of evolving AI regulations with our expert analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {legalIntelligence.map((law, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-700 rounded-xl p-8 hover:border-cyber/50 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div>{law.icon}</div>
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2">{law.title}</h4>
                      <span className="inline-block px-3 py-1 bg-alert/20 text-alert text-sm font-semibold rounded-full">
                        {law.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-cyber uppercase tracking-wide mb-3">
                      Key Provisions
                    </h5>
                    <ul className="space-y-2">
                      {law.keyProvisions.map((provision, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-trust mr-2 mt-0.5 flex-shrink-0" />
                          <span>{provision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <h5 className="text-sm font-semibold text-cyber uppercase tracking-wide mb-2">
                      Impacted Industries
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {law.impactedIndustries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-sm">
                      <span className="font-semibold text-white">Deadline: </span>
                      <span className="text-alert">{law.deadline}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certification Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Choose Your Certification Path
            </h3>
            <p className="text-lg text-slate-300">
              Industry-specific certifications tailored to your compliance needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {certificationLevels.map((cert, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 border rounded-xl p-8 hover:border-cyber/50 transition-all ${
                  index === 0 ? 'border-cyber lg:scale-105' : 'border-slate-700'
                }`}
              >
                {index === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyber text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">{cert.level}</h4>
                  <p className="text-5xl font-extrabold text-cyber mb-2">
                    {cert.price}
                  </p>
                  <p className="text-sm text-slate-400">{cert.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {cert.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-trust mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center w-full px-6 py-3 rounded-lg font-bold transition-all ${
                    index === 0
                      ? 'bg-gradient-to-r from-trust to-cyber text-slate-950 hover:shadow-cyber-lg'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  Get Certified
                </Link>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-cyber to-trust rounded-2xl p-12"
        >
          <h3 className="text-4xl font-bold text-slate-950 mb-4">
            Ready to Get Apex-Certified?
          </h3>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            Book a free certification strategy call to determine which certification 
            path is right for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-slate-950 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all"
          >
            <span>Schedule Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


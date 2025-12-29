'use client';

import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Lock, FileCheck, Award } from 'lucide-react';
import Link from 'next/link';

export default function ApexSealSection() {
  const benefits = [
    {
      icon: Shield,
      title: 'Instant Trust Signal',
      description: 'Display the Apex Seal badge on your website, proposals, and marketing materials'
    },
    {
      icon: FileCheck,
      title: 'Compliance Verified',
      description: 'Annual audits ensure NJDPA, HIPAA, and SOC 2 compliance standards are met'
    },
    {
      icon: Lock,
      title: 'Zero-Knowledge Architecture',
      description: 'Certified encryption and data handling protocols for maximum security'
    },
    {
      icon: Award,
      title: 'Competitive Advantage',
      description: 'Stand out from competitors who cannot prove their AI is safe and compliant'
    }
  ];

  const certificationLevels = [
    {
      name: 'Basic',
      price: '$2,997',
      features: [
        'Initial compliance audit',
        'NJDPA readiness assessment',
        'Apex Seal badge (1 year)',
        'Quarterly check-ins',
        'Email support'
      ],
      cta: 'Get Certified',
      highlight: false
    },
    {
      name: 'Professional',
      price: '$7,997',
      features: [
        'Everything in Basic',
        'HIPAA compliance certification',
        'SOC 2 preparation guidance',
        'Monthly compliance updates',
        'Priority support',
        'Custom policy templates'
      ],
      cta: 'Most Popular',
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Multi-location certification',
        'Dedicated compliance officer',
        'White-label governance portal',
        '24/7 incident response',
        'Annual re-certification included'
      ],
      cta: 'Contact Sales',
      highlight: false
    }
  ];

  return (
    <section className="relative py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-8">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Shield className="w-20 h-20 text-trust" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-trust/20 rounded-full blur-xl animate-pulse"></div>
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-trust">Apex Seal</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Prove your AI is <span className="text-cyber font-semibold">safe, compliant, and trustworthy</span>
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The industry's first third-party certification for AI governance. Display it proudly to win more business.
          </p>
        </motion.div>

        {/* Visual Badge Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <div className="relative p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-trust/30 rounded-2xl shadow-trust">
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10 rounded-2xl"></div>
            <div className="relative text-center space-y-6">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-trust/10 rounded-full border-4 border-trust">
                <Shield className="w-16 h-16 text-trust" strokeWidth={2} />
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">
                  Apex-Certified Safe AI
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">
                  ID: AC-2025-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-trust">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">Valid through December 2025</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            Example of the Apex Seal badge your organization will receive
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-trust/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-trust/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-trust" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-slate-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            Choose Your Certification Level
          </h3>
          <p className="text-slate-400 text-center mb-12">
            All levels include the Apex Seal badge and verification page
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {certificationLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className={`
                  relative p-8 rounded-2xl border-2 transition-all duration-300
                  ${level.highlight
                    ? 'bg-gradient-to-br from-trust/10 to-cyber/10 border-trust shadow-trust scale-105'
                    : 'bg-slate-800/30 border-slate-700 hover:border-slate-600'
                  }
                `}
              >
                {level.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-trust to-cyber text-slate-950 text-xs font-bold rounded-full">
                    RECOMMENDED
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {level.name}
                  </h4>
                  <div className="text-4xl font-bold text-cyber mb-1">
                    {level.price}
                  </div>
                  {level.price !== 'Custom' && (
                    <div className="text-sm text-slate-400">per year</div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {level.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-trust flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={level.name === 'Enterprise' ? '/contact' : '/apex-seal/apply'}
                  className={`
                    block w-full px-6 py-3 rounded-lg font-bold text-center transition-all
                    ${level.highlight
                      ? 'bg-gradient-to-r from-trust to-cyber text-slate-950 hover:shadow-cyber'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                    }
                  `}
                >
                  {level.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center p-8 bg-slate-800/30 border border-slate-700 rounded-xl"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-slate-400 font-bold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-slate-300">
              <span className="font-bold text-trust">127 organizations</span> are already Apex-Certified
            </div>
          </div>
          <p className="text-sm text-slate-400">
            Join healthcare providers, title companies, and SaaS companies who display the Apex Seal with confidence
          </p>
        </motion.div>
      </div>
    </section>
  );
}


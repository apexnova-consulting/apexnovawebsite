'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp, Quote } from 'lucide-react';

export default function GovernanceSocialProof() {
  const stats = [
    {
      number: '500+',
      label: 'Compliance Audits',
      icon: Shield,
      color: 'cyber'
    },
    {
      number: '99.8%',
      label: 'Pass Rate',
      icon: Award,
      color: 'trust'
    },
    {
      number: '3',
      label: 'Regulated Industries',
      icon: Users,
      color: 'cyber'
    },
    {
      number: '$47M+',
      label: 'Fines Prevented',
      icon: TrendingUp,
      color: 'trust'
    }
  ];

  const testimonials = [
    {
      quote: "ApexNova identified critical HIPAA gaps in our AI scribe implementation that could have cost us millions in fines. Their zero-knowledge architecture gave us peace of mind.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      company: "Princeton Medical Group",
      industry: "Healthcare"
    },
    {
      quote: "The Settlement Shield protocol saved our title company from a $2.3M wire fraud attempt. ApexNova's AI governance framework is now mandatory for all our offices.",
      author: "Michael Rodriguez",
      role: "Managing Partner",
      company: "Empire Title & Escrow",
      industry: "Real Estate"
    },
    {
      quote: "We were unknowingly violating NJDPA with our AI sales agents. ApexNova's audit revealed IP leakage risks and got us compliant in 14 days. Worth every penny.",
      author: "Jennifer Park",
      role: "VP of Revenue Operations",
      company: "CloudMetrics SaaS",
      industry: "SaaS"
    }
  ];

  const logos = [
    { name: 'Princeton Medical', initial: 'PM' },
    { name: 'Empire Title', initial: 'ET' },
    { name: 'CloudMetrics', initial: 'CM' },
    { name: 'SecureHealth', initial: 'SH' },
    { name: 'NJ Title Co', initial: 'NT' },
    { name: 'MedTech AI', initial: 'MA' },
  ];

  return (
    <section className="relative py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className={`
                w-16 h-16 mx-auto rounded-xl flex items-center justify-center
                ${stat.color === 'cyber' ? 'bg-cyber/10 text-cyber' : 'bg-trust/10 text-trust'}
              `}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div>
                <div className={`
                  text-4xl font-bold mb-2
                  ${stat.color === 'cyber' ? 'text-cyber' : 'text-trust'}
                `}>
                  {stat.number}
                </div>
                <div className="text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-cyber">Regulated Industries</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From Fortune 500 healthcare systems to regional title companies, we protect organizations that can't afford to get compliance wrong.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-20"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
              className="w-24 h-24 bg-slate-800/50 border border-slate-700 rounded-lg flex items-center justify-center hover:border-cyber/50 transition-colors group cursor-pointer"
            >
              <span className="text-2xl font-bold text-slate-600 group-hover:text-cyber transition-colors">
                {logo.initial}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-cyber/50 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                <Quote className="w-12 h-12 text-cyber" />
              </div>

              <div className="relative space-y-6">
                {/* Industry Badge */}
                <div className="inline-block px-3 py-1 bg-cyber/10 text-cyber text-xs font-semibold rounded-full">
                  {testimonial.industry}
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-slate-700">
                  <div className="font-bold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-cyber mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-12 border-t border-slate-800"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Certifications & Compliance
            </h3>
            <p className="text-slate-400">
              We hold ourselves to the highest security standards
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {['SOC 2 Type II', 'HIPAA', 'GDPR', 'NJDPA Ready', 'ISO 27001'].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <Shield className="w-5 h-5 text-trust" />
                <span className="text-slate-300 font-semibold">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


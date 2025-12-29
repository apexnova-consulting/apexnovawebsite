'use client';

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    {
      icon: <FaShieldAlt className="w-8 h-8 text-cyber" />,
      title: "Security-First Mindset",
      description: "We believe AI should empower businesses, not expose them to risk. Every solution we design prioritizes data security and compliance."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-cyber" />,
      title: "Results-Focused",
      description: "We measure success by measurable outcomes: reduced risk scores, zero breaches, and full compliance with industry regulations."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-cyber" />,
      title: "Partnership Approach",
      description: "We don't just consult—we partner with you. Your success is our success, and we're committed to long-term relationships."
    }
  ];

  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Your Outsourced AI Governance Team
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto">
            ApexNova Consulting helps businesses harness the power of AI without the legal, security, and operational risks.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Why We Were Founded</h2>
            <div className="text-xl text-slate-300 max-w-4xl mx-auto space-y-6">
              <p>
                In 2023, we watched businesses rush to adopt AI tools—ChatGPT, Claude, Midjourney, and dozens more—without any governance framework in place. The result? Data leaks, compliance violations, and millions in potential liability.
              </p>
              <p>
                We founded ApexNova Consulting because we saw a critical gap: businesses desperately needed AI to stay competitive, but they lacked the expertise to use it safely. Traditional cybersecurity firms didn't understand AI's unique risks. AI consultants didn't prioritize security. We bridge that gap.
              </p>
              <p className="font-semibold text-cyber text-2xl">
                Our mission is simple: Help you innovate with AI, without the catastrophic risks.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyber/50 transition-all">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center border border-cyber/30">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem We Solve */}
      <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">The Problem We Solve</h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Most companies face the same dilemma when it comes to AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-alert/30 border-l-4">
              <h3 className="text-2xl font-bold mb-4 text-white">Without AI Governance</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-alert mr-3 mt-1">✗</span>
                  <span className="text-slate-300">Shadow AI usage across departments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-alert mr-3 mt-1">✗</span>
                  <span className="text-slate-300">Data leaks to public AI models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-alert mr-3 mt-1">✗</span>
                  <span className="text-slate-300">Compliance violations and fines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-alert mr-3 mt-1">✗</span>
                  <span className="text-slate-300">IP and trade secret exposure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-alert mr-3 mt-1">✗</span>
                  <span className="text-slate-300">Legal and reputational damage</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-trust/30 border-l-4">
              <h3 className="text-2xl font-bold mb-4 text-white">With ApexNova Consulting</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-trust mr-3 mt-1">✓</span>
                  <span className="text-slate-300">Complete visibility of all AI tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-trust mr-3 mt-1">✓</span>
                  <span className="text-slate-300">Data protection and encryption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-trust mr-3 mt-1">✓</span>
                  <span className="text-slate-300">Full regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-trust mr-3 mt-1">✓</span>
                  <span className="text-slate-300">Secure, approved AI workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-trust mr-3 mt-1">✓</span>
                  <span className="text-slate-300">Confident, trained team members</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Our Expertise</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine deep technical knowledge with practical business experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-cyber">AI Security</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Data protection frameworks</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Secure AI tool configuration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Risk assessment methodologies</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-cyber">Compliance</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">GDPR, HIPAA, SOC 2</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Industry-specific regulations</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Audit preparation and support</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-cyber">Implementation</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Policy development and rollout</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Team training and enablement</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-trust rounded-full mr-3"></span>
                  <span className="text-slate-300">Ongoing monitoring and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized expertise in highly regulated sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Healthcare', description: 'HIPAA compliance for AI tools handling PHI' },
              { name: 'Financial Services', description: 'PCI-DSS and SOX compliance frameworks' },
              { name: 'Legal', description: 'Attorney-client privilege protection' },
              { name: 'Technology', description: 'IP protection and secure development' }
            ].map((industry, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl text-center hover:border-cyber/50 transition-all">
                <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                <p className="text-slate-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Secure Your AI Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Start with a free AI Health Check and discover your top 3 vulnerabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/governance-dashboard"
              className="inline-flex items-center justify-center bg-gradient-to-r from-trust to-cyber text-slate-950 font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-cyber-lg group text-lg"
            >
              Get Your Free AI Health Check
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-cyber hover:bg-cyber/10 text-cyber font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

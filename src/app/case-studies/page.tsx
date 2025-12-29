'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaLightbulb, FaRocket } from 'react-icons/fa';

const caseStudies = [
  {
    id: 'fintech-adoption',
    client: 'Mid-size Fintech Company',
    challenge: 'Struggling with low AI tool adoption rates (< 20%) and inconsistent usage across teams.',
    solution: 'Implemented our 90-day AI Adoption Sprint, including custom training programs and workflow optimization.',
    outcome: 'Achieved 85% sustained adoption rate and reduced process time by 40%.',
    metrics: [
      '85% team adoption',
      '40% faster processes',
      '$180K annual savings'
    ],
    icon: <FaRocket className="w-8 h-8" />
  },
  {
    id: 'enterprise-transformation',
    client: 'Enterprise Tech Company',
    challenge: 'Complex AI implementation causing team resistance and poor ROI on $500K+ investment.',
    solution: 'Delivered comprehensive enablement blueprint and systematic training approach.',
    outcome: 'Transformed resistance into enthusiasm with measurable productivity gains.',
    metrics: [
      '3× productivity increase',
      '92% team satisfaction',
      '$1.2M ROI generated'
    ],
    icon: <FaLightbulb className="w-8 h-8" />
  },
  {
    id: 'saas-optimization',
    client: 'Growing SaaS Startup',
    challenge: 'Inefficient communication workflows causing delays in product development.',
    solution: 'Combined AI enablement with communication coaching for leadership team.',
    outcome: 'Dramatically improved team collaboration and development speed.',
    metrics: [
      '60% less meeting time',
      '45% faster delivery',
      '2× customer satisfaction'
    ],
    icon: <FaChartLine className="w-8 h-8" />
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from organizations that transformed their AI governance and security.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-8 hover:shadow-cyber-lg hover:border-cyber/50 transition-all duration-300"
              >
                <div className="text-cyber mb-6">
                  {study.icon}
                </div>
                <div className="text-sm text-cyber font-semibold mb-4">
                  {study.client}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-white">Challenge:</h3>
                    <p className="text-slate-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 text-white">Solution:</h3>
                    <p className="text-slate-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 text-white">Outcome:</h3>
                    <p className="text-slate-300">{study.outcome}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {study.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-slate-900/70 border border-slate-600 p-3 rounded-lg text-center hover:border-trust/50 transition-colors"
                      >
                        <div className="text-sm font-semibold text-trust">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-trust to-cyber py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6">
            Ready to Secure Your AI Operations?
          </h2>
          <p className="text-xl text-slate-800 mb-8">
            Get your free AI Health Check and discover your top vulnerabilities.
          </p>
          <Link
            href="/ai-risk-calculator"
            className="inline-flex items-center justify-center bg-slate-950 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Get Free AI Health Check
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}

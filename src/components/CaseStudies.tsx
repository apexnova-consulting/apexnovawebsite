'use client';

import React from 'react';
import { FaChartLine, FaRobot, FaClock } from 'react-icons/fa';

const CaseStudies = () => {
  const cases = [
    {
      type: "Mid-size fintech client",
      challenge: "Struggling with AI tool adoption and communication silos",
      solution: "90-day implementation of structured enablement program",
      outcome: "85% team adoption and 40% faster project delivery",
      icon: <FaRobot className="w-8 h-8 text-teal-500" />
    },
    {
      type: "Enterprise tech company",
      challenge: "Low ROI from AI investments and team resistance",
      solution: "Custom enablement blueprint and training system",
      outcome: "3× productivity increase across departments",
      icon: <FaChartLine className="w-8 h-8 text-teal-500" />
    },
    {
      type: "Growing SaaS startup",
      challenge: "Communication anxiety in client presentations",
      solution: "Executive coaching and AI workflow optimization",
      outcome: "60% reduction in preparation time",
      icon: <FaClock className="w-8 h-8 text-teal-500" />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from teams that transformed their communication and AI adoption.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{case_.icon}</div>
              <div className="text-sm text-teal-600 font-semibold mb-4">
                {case_.type}
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-600">{case_.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution</h4>
                  <p className="text-gray-600">{case_.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outcome</h4>
                  <p className="text-gray-600">{case_.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-gray-900 rounded-2xl p-12 text-white text-center">
          <blockquote className="text-xl sm:text-2xl font-medium mb-8">
            "ApexNova's systematic approach to AI adoption and communication training transformed how our entire organization works. The ROI was immediate and measurable."
          </blockquote>
          <cite className="text-gray-400 not-italic">
            — Director of Operations, Enterprise Tech Company
          </cite>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

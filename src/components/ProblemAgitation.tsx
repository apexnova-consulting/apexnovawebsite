'use client';

import React from 'react';
import { FaExclamationTriangle, FaDatabase, FaGavel, FaLightbulb, FaFireAlt } from 'react-icons/fa';

const ProblemAgitation = () => {
  const problems = [
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "Data Leaks",
      description: "Your sensitive company data could be training competitors' AI models without your knowledge."
    },
    {
      icon: <FaGavel className="w-8 h-8" />,
      title: "Compliance Violations",
      description: "GDPR, HIPAA, SOC 2 - one AI misstep could cost millions in fines and legal fees."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Loss of IP",
      description: "Proprietary information, trade secrets, and strategic plans exposed through AI tools."
    },
    {
      icon: <FaFireAlt className="w-8 h-8" />,
      title: "Reputational Damage",
      description: "One data breach headline can destroy years of trust with customers and partners."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
            <FaExclamationTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-secondary">
            The Hidden Cost of "Move Fast and Break Things"
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your team is using AI tools right now. But without proper governance, every interaction is a potential liability.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-red-200"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-100 transition-colors">
                  {problem.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-secondary">{problem.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-secondary mb-4">
            You need more than just tools. You need a governance strategy.
          </p>
          <p className="text-lg text-gray-600">
            That's where we come in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;


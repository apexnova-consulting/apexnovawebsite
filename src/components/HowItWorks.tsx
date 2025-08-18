'use client';

import React from 'react';
import { FaSearch, FaRocket, FaChartLine } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="w-12 h-12 text-blue-500" />,
      title: "Audit",
      description: "We analyze your current workflows and identify AI opportunities for maximum impact."
    },
    {
      icon: <FaRocket className="w-12 h-12 text-blue-500" />,
      title: "Enable",
      description: "We implement custom workflows and train your team for seamless adoption."
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
      title: "Scale",
      description: "We optimize and expand your AI usage to drive continuous ROI growth."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process for transforming AI investments into measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 -translate-y-1/2" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Case Study Snapshot */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Success Story</h3>
            <p className="text-gray-600">See how we transformed AI adoption for a growing tech company</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Before</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 2-week employee onboarding</li>
                <li>• Manual workflow documentation</li>
                <li>• Low AI tool adoption (25%)</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">After 90 Days</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 30% faster onboarding</li>
                <li>• Automated documentation</li>
                <li>• 85% team AI adoption</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
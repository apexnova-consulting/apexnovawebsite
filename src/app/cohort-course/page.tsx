'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function CohortCoursePage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            AI Enablement Leader Cohort
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive 4-week program to master AI enablement strategies and lead successful adoption.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="mt-8 inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Join the Waitlist
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                What You'll Learn
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "AI Strategy Development",
                    description: "Learn to create and implement effective AI adoption strategies."
                  },
                  {
                    title: "Change Management",
                    description: "Master techniques for managing resistance and driving adoption."
                  },
                  {
                    title: "ROI Measurement",
                    description: "Develop frameworks for tracking and reporting AI impact."
                  },
                  {
                    title: "Team Enablement",
                    description: "Build systems for sustainable AI usage and growth."
                  }
                ].map((topic, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Program Details
              </h3>
              <div className="text-3xl font-bold text-teal-600 mb-6">
                $997 per seat
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  Includes:
                </p>
                <ul className="space-y-3">
                  {[
                    "4 weeks of live sessions",
                    "Implementation templates",
                    "Private community access",
                    "Certificate of completion"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
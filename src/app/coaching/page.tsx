'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function CoachingPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            AI Enablement Coaching
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Personalized guidance to accelerate your team's AI adoption and maximize ROI.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Team's AI Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our coaching program helps teams overcome implementation challenges and develop sustainable AI practices.
              </p>
              <div className="space-y-4">
                {[
                  "Custom enablement strategies",
                  "Hands-on workflow optimization",
                  "Regular progress reviews",
                  "ROI tracking and reporting"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Coaching Package
              </h3>
              <div className="text-3xl font-bold text-teal-600 mb-6">
                Starting at $5K/month
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-gray-600">
                  Includes:
                </p>
                <ul className="space-y-3">
                  {[
                    "Monthly strategy sessions",
                    "Custom training workshops",
                    "Implementation support",
                    "Progress tracking dashboard"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-teal-500 hover:bg-teal-600 text-white text-center font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Coaching Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Assessment",
                description: "Evaluate current AI usage and identify opportunities."
              },
              {
                step: "2",
                title: "Strategy",
                description: "Develop custom enablement plan and KPIs."
              },
              {
                step: "3",
                title: "Implementation",
                description: "Guide teams through workflow optimization."
              },
              {
                step: "4",
                title: "Scale",
                description: "Monitor progress and expand capabilities."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Team?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Book Your Consultation
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
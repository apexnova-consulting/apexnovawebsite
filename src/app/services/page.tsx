'use client';

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaChartLine, FaArrowRight } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
            Choose the solution that fits your needs
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* AI Governance & Security */}
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all">
              <div className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                    <FaShieldAlt className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center">
                  AI Governance & Security
                </h2>
                <p className="text-xl text-gray-200 mb-8 text-center">
                  Our primary service: Secure your AI operations and eliminate risks
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1 text-xl">✓</span>
                    <span>Complete AI tool audits and risk assessments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1 text-xl">✓</span>
                    <span>Custom governance policies and compliance frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1 text-xl">✓</span>
                    <span>Team training and security awareness programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3 mt-1 text-xl">✓</span>
                    <span>Ongoing monitoring and optimization</span>
                  </li>
                </ul>
                <Link
                  href="/services/ai-governance"
                  className="group flex items-center justify-center w-full bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Explore AI Security Services
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-accent px-8 py-4 text-center">
                <p className="font-semibold">Starting at $1,997</p>
              </div>
            </div>

            {/* Sales & Marketing */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 transform hover:scale-105 transition-all">
              <div className="p-12">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                    <FaChartLine className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-center text-secondary">
                  Sales & Marketing Transformation
                </h2>
                <p className="text-xl text-gray-600 mb-8 text-center">
                  Our legacy services: Revenue growth and process optimization
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">✓</span>
                    <span className="text-gray-700">Fractional CMO services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">✓</span>
                    <span className="text-gray-700">Sales process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">✓</span>
                    <span className="text-gray-700">Go-to-market strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1 text-xl">✓</span>
                    <span className="text-gray-700">Revenue growth acceleration</span>
                  </li>
                </ul>
                <Link
                  href="/services/sales-marketing"
                  className="group flex items-center justify-center w-full bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all"
                >
                  Explore Sales & Marketing Services
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="bg-gray-200 px-8 py-4 text-center">
                <p className="font-semibold text-secondary">Custom pricing based on scope</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-secondary">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start with our free AI Health Check to identify your biggest risks and opportunities.
          </p>
          <Link
            href="/ai-risk-calculator"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
          >
            Get Your Free AI Health Check
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}

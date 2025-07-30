'use client';

import React, { useState } from 'react';
import { FaCheckCircle, FaDownload, FaLock } from 'react-icons/fa';
import Link from 'next/link';

export default function ToolkitDownload() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/toolkit-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, company }),
      });

      if (response.ok) {
        setSuccess(true);
        // Reset form
        setEmail('');
        setName('');
        setCompany('');
      } else {
        const data = await response.json();
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }

    setIsSubmitting(false);
  };

  const toolkitFeatures = [
    "AI Tool Selection Framework",
    "Team Readiness Assessment Template",
    "90-Day Adoption Roadmap",
    "ROI Calculator Spreadsheet",
    "20+ Pre-built Prompts for Business Tasks",
    "Implementation Checklist",
    "Training Session Templates"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {success ? (
          <div className="text-center">
            <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Check your email for your AI-Ready Teams™ Toolkit download link.
            </p>
            <Link 
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6">
                AI-Ready Teams™ Toolkit
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to kickstart your AI enablement journey. 
                Get instant access to our battle-tested templates, frameworks, and guides.
              </p>

              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <h2 className="text-xl font-semibold mb-4">What's Inside:</h2>
                <ul className="space-y-3">
                  {toolkitFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center text-gray-600 text-sm">
                <FaLock className="mr-2" />
                Your information is secure and will never be shared.
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Download Now</h2>
                <span className="text-2xl font-bold text-blue-600">$97</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  <FaDownload className="mr-2" />
                  {isSubmitting ? 'Processing...' : 'Get Instant Access'}
                </button>

                {error && (
                  <p className="text-red-600 text-center">{error}</p>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
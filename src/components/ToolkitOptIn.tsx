'use client';

import React, { useState } from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const ToolkitOptIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      // Redirect to thank you page with calendar link
      window.location.href = '/thank-you?type=toolkit';
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="text-primary mb-6">
              <FaDownload className="w-12 h-12" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Your Free AI Enablement Toolkit
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start transforming your team's AI adoption today with our comprehensive toolkit.
            </p>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <FaArrowRight className="w-4 h-4 text-primary mr-3" />
                <span>AI Readiness Assessment Template</span>
              </div>
              <div className="flex items-center">
                <FaArrowRight className="w-4 h-4 text-primary mr-3" />
                <span>ROI Calculator Spreadsheet</span>
              </div>
              <div className="flex items-center">
                <FaArrowRight className="w-4 h-4 text-primary mr-3" />
                <span>Implementation Checklist</span>
              </div>
              <div className="flex items-center">
                <FaArrowRight className="w-4 h-4 text-primary mr-3" />
                <span>Quick-Start Guide PDF</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              Get Instant Access
            </h3>
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {isSubmitting ? (
                  'Processing...'
                ) : (
                  <>
                    Get Instant Access
                    <FaArrowRight className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitOptIn;

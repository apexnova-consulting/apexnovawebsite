'use client';

import React, { useState } from 'react';
import { FaDownload, FaCheck } from 'react-icons/fa';

const ToolkitCTA = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/toolkit-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, company: 'From Homepage CTA' }),
      });

      if (response.ok) {
        setMessage('Success! Check your email for the toolkit.');
        setEmail('');
        setName('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  const toolkitFeatures = [
    "Communication Style Assessment",
    "Anxiety Management Techniques",
    "Executive Presence Checklist",
    "Meeting Preparation Templates",
    "Presentation Structure Guide",
    "Confidence Building Exercises"
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Executive Communication Confidence Toolkit
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get instant access to our proven frameworks, templates, and exercises to boost your communication confidence.
            </p>
            <ul className="space-y-4 mb-8">
              {toolkitFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Download Free Toolkit</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                <FaDownload className="mr-2" />
                {isSubmitting ? 'Sending...' : 'Get Instant Access'}
              </button>

              {message && (
                <p className={`text-center ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitCTA;
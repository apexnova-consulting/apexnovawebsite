'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaGraduationCap, FaUsers, FaClock, FaCalendarAlt, FaCheck } from 'react-icons/fa';

export default function CohortCourse() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/cohort-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Success! Check your email for next steps.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }

    setIsSubmitting(false);
  };

  const courseModules = [
    {
      week: 1,
      title: "AI Enablement Foundations",
      topics: [
        "Understanding AI tool categories and use cases",
        "Assessing organizational readiness",
        "Building your enablement roadmap"
      ]
    },
    {
      week: 2,
      title: "Training System Design",
      topics: [
        "Creating effective documentation",
        "Designing training workshops",
        "Building prompt libraries"
      ]
    },
    {
      week: 3,
      title: "Change Management & Adoption",
      topics: [
        "Overcoming resistance to change",
        "Measuring adoption metrics",
        "Running effective pilot programs"
      ]
    },
    {
      week: 4,
      title: "Scaling & Optimization",
      topics: [
        "Cross-team implementation strategies",
        "ROI tracking and reporting",
        "Continuous improvement frameworks"
      ]
    }
  ];

  const features = [
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Cohort-Based Learning",
      description: "Learn alongside other AI enablement leaders"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "4 Weeks, 4-6 Hours/Week",
      description: "Structured program with flexible scheduling"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Certification",
      description: "Earn your AI Enablement Leader certificate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            AI Enablement Leader Cohort Course
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Master the strategies and systems needed to lead successful AI adoption in your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="text-2xl font-bold bg-blue-600 px-8 py-4 rounded-lg">
              $997 per seat
            </div>
            <div className="text-gray-300">
              Next cohort starts {new Date().getMonth() + 2}/1
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Course Curriculum</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    {module.week}
                  </div>
                  <h3 className="text-xl font-semibold">{module.title}</h3>
                </div>
                <ul className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enrollment CTA */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join the Next Cohort
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Limited to 20 participants per cohort to ensure personalized attention.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Request Info'}
              </button>
            </div>
            {message && (
              <p className={`mt-4 ${message.includes('Success') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              What's the time commitment?
            </h3>
            <p className="text-gray-600">
              4-6 hours per week, including live sessions, assignments, and peer collaboration.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Is this right for me?
            </h3>
            <p className="text-gray-600">
              Perfect for team leads, project managers, and internal champions responsible for AI tool adoption.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              What if I miss a session?
            </h3>
            <p className="text-gray-600">
              All sessions are recorded and available for replay. We also offer 1:1 office hours for catch-up.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              What's included?
            </h3>
            <p className="text-gray-600">
              Live sessions, course materials, templates, frameworks, peer community, and certification upon completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
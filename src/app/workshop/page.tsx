'use client';

import React from 'react';
import { FaUsers, FaChartLine, FaRocket, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Workshop() {
  const benefits = [
    {
      icon: <FaUsers className="w-8 h-8 text-blue-500" />,
      title: "Team Alignment",
      description: "Get your entire department aligned on AI tool usage, roles, and workflows."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
      title: "Rapid Adoption",
      description: "Accelerate AI adoption with hands-on exercises and real-world scenarios."
    },
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "Immediate ROI",
      description: "Leave with actionable workflows and automations ready for implementation."
    }
  ];

  const agenda = [
    {
      time: "9:00 AM",
      title: "Current State Assessment",
      description: "Review existing tools, workflows, and pain points"
    },
    {
      time: "10:00 AM",
      title: "AI Tool Deep-Dive",
      description: "Hands-on training with your specific AI stack"
    },
    {
      time: "11:30 AM",
      title: "Workflow Optimization",
      description: "Design and document new AI-enabled processes"
    },
    {
      time: "1:30 PM",
      title: "Implementation Planning",
      description: "Create 30/60/90 day rollout strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Executive Enablement Workshop
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A half-day intensive session to align your department on AI adoption strategy and implementation.
          </p>
          <div className="inline-block bg-blue-600 text-2xl font-bold px-8 py-4 rounded-lg">
            $7,500 per half-day
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Agenda */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Workshop Agenda</h2>
          <div className="space-y-12">
            {agenda.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-blue-600 font-semibold">
                  {item.time}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking CTA */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Team's AI Adoption?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a discovery call to discuss your team's needs and check workshop availability.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <FaCalendarAlt className="mr-2" />
              Schedule Discovery Call
            </Link>
            <Link
              href="/toolkit-download"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            >
              Download Workshop Overview
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Who should attend this workshop?
            </h3>
            <p className="text-gray-600">
              Department leaders, team managers, and key stakeholders involved in AI tool implementation and workflow decisions.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              How many people can attend?
            </h3>
            <p className="text-gray-600">
              We recommend 8-12 participants to ensure meaningful interaction and personalized attention.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              What's the format?
            </h3>
            <p className="text-gray-600">
              Interactive sessions combining presentation, hands-on exercises, and collaborative planning.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              What do we need to prepare?
            </h3>
            <p className="text-gray-600">
              We'll send a pre-workshop questionnaire to customize the content for your team's specific needs and tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
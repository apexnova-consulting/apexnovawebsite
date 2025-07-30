'use client';

import React from 'react';
import Link from 'next/link';
import { FaRocket, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "Pioneering AI enablement strategies that transform how teams work and deliver value."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
      title: "Excellence",
      description: "Delivering proven frameworks that consistently produce measurable ROI and productivity gains."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-500" />,
      title: "Transformation",
      description: "Creating lasting change by addressing both technical and human aspects of AI adoption."
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-blue-500" />,
      title: "Results",
      description: "85% tool adoption rate, 3x productivity gains, and 60% reduction in workflow friction."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About ApexNova
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl">
            We help companies turn AI investments into real business outcomes through proven enablement strategies and systems.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              ApexNova was born out of frustration with how companies adopt technology. 
              We watched brilliant teams fail to get ROI from powerful tools because they 
              lacked the systems, structure, and training to make those tools stick.
            </p>
            <p className="text-gray-600 mb-6">
              AI is the greatest transformation opportunity of our time — but only if your 
              people can use it confidently and consistently. That's why we exist: to help 
              companies turn digital chaos into competitive clarity through enablement, not hype.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              Turn your investment into action.
              Turn your tools into transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Client Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <blockquote className="text-gray-600 mb-6">
              "ApexNova's enablement program helped us achieve 90% ChatGPT Enterprise adoption across our sales team in just 60 days."
            </blockquote>
            <p className="font-semibold">Sarah K.</p>
            <p className="text-sm text-gray-500">VP of Sales Operations → Chief Revenue Officer</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <blockquote className="text-gray-600 mb-6">
              "Their systematic approach to AI adoption transformed our customer support team, reducing response times by 65%."
            </blockquote>
            <p className="font-semibold">Michael R.</p>
            <p className="text-sm text-gray-500">Customer Experience Director</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <blockquote className="text-gray-600 mb-6">
              "We tried implementing AI tools before, but nothing stuck. ApexNova's enablement framework was the game-changer."
            </blockquote>
            <p className="font-semibold">Lisa M.</p>
            <p className="text-sm text-gray-500">Head of Operations</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your AI Investment?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading companies who have unlocked the full potential of their AI tools with ApexNova.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book a Strategy Call
            </Link>
            <Link 
              href="/toolkit-download"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            >
              Download AI Enablement Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
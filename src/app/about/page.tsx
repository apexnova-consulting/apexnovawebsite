'use client';

import React from 'react';
import Link from 'next/link';
import { FaRocket, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa';

export default function About() {
  const values = [
    {
      icon: <FaRocket className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description: "Blending proven communication principles with cutting-edge AI enablement strategies."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-blue-500" />,
      title: "Human-Centered",
      description: "Focusing on the human side of technology adoption and professional growth."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
      title: "Results-Driven",
      description: "Delivering measurable improvements in communication and team productivity."
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-blue-500" />,
      title: "Partnership",
      description: "Working closely with clients to create sustainable, long-term success."
    }
  ];

  const stats = [
    { number: "500+", label: "Professionals Coached" },
    { number: "50+", label: "Enterprise Teams Enabled" },
    { number: "85%", label: "Average Tool Adoption" },
    { number: "3x", label: "Productivity Increase" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            We Help Humans Thrive in a Tech-Driven World
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            ApexNova Consulting was founded to bridge the gap between powerful human communication and today's fast-moving digital landscape. We help professionals develop confident presence and help teams adopt AI with clarity and ease.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="prose prose-lg">
                <p className="text-gray-600 mb-6">
                  In today's rapidly evolving workplace, success requires both strong human communication skills and the ability to leverage AI tools effectively. We believe these two elements are deeply interconnected.
                </p>
                <p className="text-gray-600 mb-6">
                  Our mission is to help professionals and teams master both aspects: developing the confidence to communicate powerfully while embracing AI tools to enhance their capabilities.
                </p>
                <p className="text-gray-600">
                  Through our unique combination of communication coaching and AI enablement services, we're creating workplaces where humans and technology work together seamlessly.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Approach</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">For Professionals</h3>
              <p className="text-gray-600 mb-6">
                We help individuals overcome communication anxiety and develop powerful presence through proven frameworks, personalized coaching, and practical tools. Our approach combines traditional communication techniques with AI-enhanced practice and feedback.
              </p>
              <Link
                href="/professionals"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">For Companies</h3>
              <p className="text-gray-600 mb-6">
                We partner with organizations to create systematic AI adoption strategies that work. Our enablement programs focus on the human side of technology adoption, ensuring teams embrace AI tools confidently and effectively.
              </p>
              <Link
                href="/companies"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Note About Anonymity */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 italic">
            Note: Our founder maintains a low profile while working with high-impact leaders and organizations. This allows us to focus entirely on our clients' success and maintain the confidentiality they expect.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Impact?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're an individual looking to boost your communication confidence or a company seeking AI enablement, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link 
              href="/toolkit-download"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            >
              Download Free Toolkit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import React from 'react';
import Link from 'next/link';
import { FaRobot, FaUsers, FaChartLine, FaCheck, FaArrowRight } from 'react-icons/fa';

export default function Companies() {
  const services = [
    {
      icon: <FaRobot className="w-12 h-12 text-blue-500" />,
      title: "AI Adoption-as-a-Service™",
      description: "Complete enablement solution for enterprise AI tools.",
      features: [
        "Tool & workflow audit",
        "Enablement blueprints",
        "Custom SOPs & libraries",
        "Team training sessions",
        "Usage analytics & reviews"
      ],
      price: "$25,000 per engagement",
      cta: "Get Started",
      href: "/contact"
    },
    {
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
      title: "Executive Workshops",
      description: "Half-day intensive sessions to align departments on AI adoption.",
      features: [
        "Current state assessment",
        "AI tool deep-dive training",
        "Workflow optimization",
        "Implementation planning",
        "Team alignment activities"
      ],
      price: "$7,500 per half-day",
      cta: "Book Workshop",
      href: "/contact"
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
      title: "Enablement Coaching",
      description: "Ongoing support for sustainable AI adoption.",
      features: [
        "Monthly strategy sessions",
        "Progress tracking",
        "Custom documentation",
        "Team support",
        "ROI measurement"
      ],
      price: "$3,000 per month",
      cta: "Learn More",
      href: "/contact"
    }
  ];

  const outcomes = [
    "Increase AI tool adoption by 85%",
    "Reduce workflow friction by 60%",
    "Triple team productivity",
    "Clear ROI measurement",
    "Sustainable enablement systems",
    "Confident, AI-enabled teams"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transform How Your Team Uses AI
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Turn your AI investment into real business outcomes with proven enablement strategies and systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get Your AI Enablement Blueprint
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Services for Companies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {service.price}
                </div>
                <Link
                  href={service.href}
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Audit</h3>
              <p className="text-gray-600">Assess current tools, workflows, and pain points</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Build</h3>
              <p className="text-gray-600">Create custom enablement blueprints</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Train</h3>
              <p className="text-gray-600">Implement team-specific training</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Optimize</h3>
              <p className="text-gray-600">Monitor, measure, and improve</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Measurable Results
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our systematic approach to AI enablement delivers clear, measurable outcomes for your organization.
              </p>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">
                Get Started Today
              </h3>
              <p className="text-gray-600 mb-8">
                Book a discovery call to discuss your team's AI adoption goals and get a customized enablement plan.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors"
              >
                Schedule Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <blockquote className="text-gray-600 mb-6">
                "ApexNova's enablement program helped us achieve 90% ChatGPT Enterprise adoption across our sales team in just 60 days."
              </blockquote>
              <p className="font-semibold">Sarah K.</p>
              <p className="text-sm text-gray-500">VP of Sales Operations</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <blockquote className="text-gray-600 mb-6">
                "Their systematic approach to AI adoption transformed our customer support team, reducing response times by 65%."
              </blockquote>
              <p className="font-semibold">Michael R.</p>
              <p className="text-sm text-gray-500">Customer Experience Director</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <blockquote className="text-gray-600 mb-6">
                "We tried implementing AI tools before, but nothing stuck. ApexNova's enablement framework was the game-changer."
              </blockquote>
              <p className="font-semibold">Lisa M.</p>
              <p className="text-sm text-gray-500">Head of Operations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Team's AI Adoption?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with a free consultation and customized enablement plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Discovery Call
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
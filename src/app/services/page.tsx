'use client';

import React from 'react';
import Link from 'next/link';
import { FaRobot, FaUsers, FaGraduationCap, FaToolbox, FaChartLine, FaLightbulb } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaRobot className="w-12 h-12 text-blue-500" />,
      title: "AI Adoption-as-a-Service™",
      description: "Our flagship 90-day engagement to transform how your team uses AI tools.",
      price: "$25,000",
      features: [
        "Tool + Workflow Audit",
        "Enablement Blueprints by Team",
        "AI SOPs + Prompt Libraries",
        "Live Training Sessions",
        "Usage Dashboards & Reviews"
      ],
      link: "/#core-offer"
    },
    {
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
      title: "Executive Enablement Workshops",
      description: "Half-day intensive sessions to align departments on AI adoption strategy.",
      price: "$7,500 per half-day",
      features: [
        "Current State Assessment",
        "AI Tool Deep-Dive",
        "Workflow Optimization",
        "Implementation Planning",
        "Team Alignment Sessions"
      ],
      link: "/workshop"
    },
    {
      icon: <FaGraduationCap className="w-12 h-12 text-blue-500" />,
      title: "AI Enablement Leader Course",
      description: "4-week cohort program for internal champions leading AI adoption.",
      price: "$997 per seat",
      features: [
        "Live Weekly Sessions",
        "Peer Community Access",
        "Implementation Templates",
        "Certification Program",
        "Office Hours Support"
      ],
      link: "/cohort-course"
    }
  ];

  const additionalServices = [
    {
      icon: <FaToolbox className="w-8 h-8 text-blue-500" />,
      title: "Fractional AI Enablement Coach",
      description: "Ongoing support and guidance for your AI adoption journey.",
      price: "$3,000/month"
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
      title: "AI ROI Assessment",
      description: "Comprehensive analysis of your current AI tool utilization and ROI potential.",
      price: "Custom pricing"
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-blue-500" />,
      title: "Custom Training Development",
      description: "Tailored training programs for your specific AI tools and workflows.",
      price: "Custom pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            AI Enablement Services
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transform your AI investment into measurable business outcomes with our proven enablement frameworks.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-xl font-semibold text-blue-600 mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.link}
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{service.price}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Client Results</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-4">85%</div>
            <p className="text-gray-600">Average tool adoption rate within 90 days</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-4">3x</div>
            <p className="text-gray-600">Productivity improvement with AI workflows</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-blue-600 mb-4">60%</div>
            <p className="text-gray-600">Reduction in workflow friction points</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Accelerate Your AI Adoption?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a strategy call to discuss your team's specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Strategy Call
            </Link>
            <Link 
              href="/toolkit-download"
              className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            >
              Download Free Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
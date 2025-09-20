'use client';

import React from 'react';
import Link from 'next/link';
import { FaSearch, FaRocket, FaUserTie, FaArrowRight } from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaSearch className="w-12 h-12 text-teal-500" />,
      title: "AI ROI Audit",
      description: "14-day deep dive into your AI opportunities and communication workflows.",
      price: "$2.5K → $5K",
      features: [
        "Workflow analysis",
        "ROI blueprint",
        "Tool recommendations",
        "Quick-win roadmap"
      ],
      cta: "Book My Audit",
      href: "/roi-audit"
    },
    {
      icon: <FaRocket className="w-12 h-12 text-teal-500" />,
      title: "90-Day Sprint Program",
      description: "Complete implementation and training program for lasting transformation.",
      price: "$25K",
      features: [
        "Full implementation",
        "Team training",
        "Custom workflows",
        "ROI tracking"
      ],
      cta: "Learn More",
      href: "/sprint-program"
    },
    {
      icon: <FaUserTie className="w-12 h-12 text-teal-500" />,
      title: "Fractional Coach",
      description: "Ongoing advisory and implementation support for sustainable growth.",
      price: "$5K+ monthly",
      features: [
        "Monthly strategy",
        "Custom workshops",
        "Team coaching",
        "Progress reviews"
      ],
      cta: "Get Details",
      href: "/coaching"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transform Your Team's Potential
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right solution to unlock your team's communication and AI capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="text-2xl font-bold text-teal-600 mb-6">
                {service.price}
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="group flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {service.cta}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 pt-20 border-t border-gray-100">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Assess",
                description: "We analyze your current workflows and identify opportunities."
              },
              {
                step: "2",
                title: "Implement",
                description: "We deploy solutions and train your team for success."
              },
              {
                step: "3",
                title: "Scale",
                description: "We optimize and expand your capabilities for growth."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

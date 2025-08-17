'use client';

import React from 'react';
import Link from 'next/link';
import { FaDownload, FaSearch, FaRocket, FaUserTie } from 'react-icons/fa';

const DualServices = () => {
  const services = [
    {
      icon: <FaDownload className="w-12 h-12 text-blue-500" />,
      title: "Free AI Toolkit",
      description: "Get started with our comprehensive guide to AI implementation.",
      features: [
        "AI workflow templates",
        "Quick-win guides",
        "ROI calculator",
        "Implementation checklist"
      ],
      price: "Free",
      cta: "Download Now",
      href: "/toolkit-download"
    },
    {
      icon: <FaSearch className="w-12 h-12 text-blue-500" />,
      title: "AI ROI Audit",
      description: "14-day deep dive into your AI opportunities.",
      features: [
        "Workflow analysis",
        "ROI blueprint",
        "Tool recommendations",
        "Quick-win roadmap"
      ],
      price: "$2.5K pilot / $5K standard",
      cta: "Book My Audit",
      href: "/roi-audit"
    },
    {
      icon: <FaRocket className="w-12 h-12 text-blue-500" />,
      title: "AI Adoption Sprint",
      description: "90-day implementation and training program.",
      features: [
        "Full implementation",
        "Team training",
        "Custom workflows",
        "ROI tracking"
      ],
      price: "$25K",
      cta: "Learn More",
      href: "/contact"
    },
    {
      icon: <FaUserTie className="w-12 h-12 text-blue-500" />,
      title: "Fractional AI Enablement",
      description: "Ongoing advisory and implementation support.",
      features: [
        "Monthly strategy",
        "Custom workshops",
        "Team coaching",
        "Progress reviews"
      ],
      price: "From $5K/month",
      cta: "Get Details",
      href: "/contact"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Enablement Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From quick wins to full implementation, we help you maximize ROI at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-xl font-bold text-blue-600 mb-6">
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
  );
};

export default DualServices;
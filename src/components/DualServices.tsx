'use client';

import React from 'react';
import Link from 'next/link';
import { FaDownload, FaSearch, FaRocket, FaUserTie, FaCheck, FaMinus } from 'react-icons/fa';

const DualServices = () => {
  const services = [
    {
      icon: <FaDownload className="w-12 h-12 text-blue-500" />,
      title: "Free AI Toolkit",
      description: "Start your AI journey with our proven frameworks.",
      features: [
        "AI workflow templates",
        "Quick-win guides",
        "ROI calculator",
        "Implementation checklist"
      ],
      price: "Free",
      timeline: "Instant Access",
      outcome: "Self-guided implementation",
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
      price: "$2.5K pilot / $5K",
      timeline: "14 Days",
      outcome: "Clear implementation plan",
      cta: "Book My Audit",
      href: "/roi-audit",
      highlight: true
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
      timeline: "90 Days",
      outcome: "Complete team enablement",
      cta: "Learn More",
      href: "/contact"
    },
    {
      icon: <FaUserTie className="w-12 h-12 text-blue-500" />,
      title: "Fractional AI Coach",
      description: "Ongoing advisory and implementation support.",
      features: [
        "Monthly strategy",
        "Custom workshops",
        "Team coaching",
        "Progress reviews"
      ],
      price: "From $5K/month",
      timeline: "Ongoing",
      outcome: "Continuous optimization",
      cta: "Get Details",
      href: "/contact"
    }
  ];

  const comparisonFeatures = [
    { name: "Initial Assessment", toolkit: true, audit: true, sprint: true, coach: true },
    { name: "ROI Calculator", toolkit: true, audit: true, sprint: true, coach: true },
    { name: "Workflow Templates", toolkit: true, audit: true, sprint: true, coach: true },
    { name: "Custom Blueprint", toolkit: false, audit: true, sprint: true, coach: true },
    { name: "Implementation Support", toolkit: false, audit: false, sprint: true, coach: true },
    { name: "Team Training", toolkit: false, audit: false, sprint: true, coach: true },
    { name: "Progress Reviews", toolkit: false, audit: false, sprint: true, coach: true },
    { name: "Ongoing Advisory", toolkit: false, audit: false, sprint: false, coach: true }
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

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${
                service.highlight 
                  ? 'bg-blue-50 border-2 border-blue-200' 
                  : 'bg-gray-50'
              } rounded-xl shadow-lg p-8`}
            >
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
              <div className="text-xl font-bold text-blue-600 mb-2">
                {service.price}
              </div>
              <div className="text-sm text-gray-500 mb-6">
                {service.timeline} • {service.outcome}
              </div>
              <Link
                href={service.href}
                className={`block w-full text-center ${
                  service.highlight
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-900 hover:bg-gray-800'
                } text-white font-semibold px-6 py-3 rounded-lg transition-colors`}
              >
                {service.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-4">Features</th>
                <th className="text-center py-4 px-4">Free Toolkit</th>
                <th className="text-center py-4 px-4 bg-blue-50">ROI Audit</th>
                <th className="text-center py-4 px-4">90-Day Sprint</th>
                <th className="text-center py-4 px-4">Fractional Coach</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-4 px-4">{feature.name}</td>
                  <td className="text-center py-4 px-4">
                    {feature.toolkit ? <FaCheck className="inline text-green-500" /> : <FaMinus className="inline text-gray-300" />}
                  </td>
                  <td className="text-center py-4 px-4 bg-blue-50">
                    {feature.audit ? <FaCheck className="inline text-green-500" /> : <FaMinus className="inline text-gray-300" />}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.sprint ? <FaCheck className="inline text-green-500" /> : <FaMinus className="inline text-gray-300" />}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.coach ? <FaCheck className="inline text-green-500" /> : <FaMinus className="inline text-gray-300" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DualServices;
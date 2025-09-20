'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaSearch, FaRocket, FaUserTie, FaBook } from 'react-icons/fa';

export default function ServicesPage() {
  const services = [
    {
      icon: <FaSearch className="w-12 h-12 text-teal-500" />,
      title: "AI ROI Audit",
      price: "$2.5K → $5K",
      duration: "14 days",
      description: "Deep-dive analysis of your current AI tools and communication workflows.",
      deliverables: [
        "Comprehensive workflow analysis",
        "ROI opportunity mapping",
        "Tool stack assessment",
        "Quick-win implementation plan",
        "90-day roadmap"
      ],
      outcomes: [
        "Clear visibility into AI opportunities",
        "Prioritized action items",
        "Expected ROI calculations",
        "Risk mitigation strategies"
      ],
      cta: "Book Your Audit",
      href: "/roi-audit"
    },
    {
      icon: <FaRocket className="w-12 h-12 text-teal-500" />,
      title: "90-Day Sprint Program",
      price: "$25K",
      duration: "90 days",
      description: "Complete implementation and training program for lasting transformation.",
      deliverables: [
        "Custom enablement blueprint",
        "Workflow documentation",
        "Team training sessions",
        "Progress tracking dashboard",
        "Weekly check-ins"
      ],
      outcomes: [
        "80%+ team adoption rate",
        "Measurable productivity gains",
        "Documented processes",
        "Self-sustaining system"
      ],
      cta: "Learn More",
      href: "/sprint-program"
    },
    {
      icon: <FaUserTie className="w-12 h-12 text-teal-500" />,
      title: "Fractional Coach",
      price: "$5K+ monthly",
      duration: "Ongoing",
      description: "Dedicated advisory and implementation support for sustainable growth.",
      deliverables: [
        "Monthly strategy sessions",
        "Custom training workshops",
        "On-demand consulting",
        "Progress reviews",
        "ROI reporting"
      ],
      outcomes: [
        "Continuous optimization",
        "Rapid problem resolution",
        "Scaling best practices",
        "Long-term accountability"
      ],
      cta: "Get Details",
      href: "/coaching"
    }
  ];

  const digitalProducts = {
    icon: <FaBook className="w-12 h-12 text-teal-500" />,
    title: "Digital Products",
    description: "Self-paced resources for teams and individuals.",
    products: [
      {
        name: "AI-Ready Teams™ Toolkit",
        price: "$97",
        features: [
          "Workflow templates",
          "Prompt libraries",
          "SOPs and guides",
          "Training materials"
        ]
      },
      {
        name: "Communication Confidence Course",
        price: "$49",
        features: [
          "Video lessons",
          "Practice exercises",
          "Feedback templates",
          "Resource library"
        ]
      }
    ]
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive services to transform your team's communication and AI capabilities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  {service.price}
                </div>
                <div className="text-gray-600 mb-6">
                  Duration: {service.duration}
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h3 className="font-bold mb-3">Deliverables:</h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-bold mb-3">Outcomes:</h3>
                  <ul className="space-y-2">
                    {service.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

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
        </div>
      </section>

      {/* Digital Products Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              {digitalProducts.icon}
            </div>
            <h2 className="text-3xl font-bold mb-4">{digitalProducts.title}</h2>
            <p className="text-xl text-gray-600">{digitalProducts.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {digitalProducts.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="text-2xl font-bold text-teal-600 mb-6">
                  {product.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/digital-products"
                  className="group flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Learn More
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 
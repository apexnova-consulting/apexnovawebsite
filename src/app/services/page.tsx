'use client';

import React from 'react';
import Link from 'next/link';
import { FaUserTie, FaChalkboardTeacher, FaTools, FaRobot, FaUsers, FaChartLine } from 'react-icons/fa';

export default function Services() {
  const professionalServices = [
    {
      icon: <FaUserTie className="w-12 h-12 text-blue-500" />,
      title: "1:1 Communication Coaching",
      description: "Personalized coaching to build clarity, confidence, and executive presence.",
      features: [
        "Communication style assessment",
        "Anxiety management techniques",
        "Presentation skills development",
        "Executive presence coaching",
        "Voice and body language training"
      ],
      price: "Starting at $299/session",
      cta: "Book a Session"
    },
    {
      icon: <FaChalkboardTeacher className="w-12 h-12 text-blue-500" />,
      title: "Digital Courses",
      description: "Self-paced programs to master professional communication.",
      features: [
        "Confident Communication in 30 Days",
        "Executive Presence Masterclass",
        "High-Stakes Presentation Skills",
        "Video-based lessons",
        "Practice exercises & templates"
      ],
      price: "From $49",
      cta: "Browse Courses"
    },
    {
      icon: <FaTools className="w-12 h-12 text-blue-500" />,
      title: "Professional Tools",
      description: "Ready-to-use resources for immediate impact.",
      features: [
        "Presentation templates",
        "Meeting scripts",
        "Communication frameworks",
        "Confidence exercises",
        "Progress tracking tools"
      ],
      price: "From $97",
      cta: "View Tools"
    }
  ];

  const companyServices = [
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
      cta: "Get Started"
    },
    {
      icon: <FaUsers className="w-12 h-12 text-blue-500" />,
      title: "Team Enablement",
      description: "Custom training and systems for your organization.",
      features: [
        "Needs assessment",
        "Custom training programs",
        "Implementation support",
        "Progress tracking",
        "ROI measurement"
      ],
      price: "Custom pricing",
      cta: "Learn More"
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-blue-500" />,
      title: "Live Workshops",
      description: "Interactive sessions for departments and teams.",
      features: [
        "Half-day intensive sessions",
        "Hands-on exercises",
        "Tool-specific training",
        "Team alignment activities",
        "Action planning"
      ],
      price: "$7,500 per half-day",
      cta: "Book Workshop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive services to help professionals and companies thrive in today's AI-powered workplace.
          </p>
        </div>
      </div>

      {/* For Professionals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            For Professionals
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
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
                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {service.price}
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Companies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            For Companies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyServices.map((service, index) => (
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
                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {service.price}
                </div>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a discovery call to discuss your specific needs and goals.
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
'use client';

import React from 'react';
import Link from 'next/link';
import { FaUserTie, FaChalkboardTeacher, FaTools, FaCheck, FaArrowRight } from 'react-icons/fa';

export default function Professionals() {
  const services = [
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
      cta: "Book a Session",
      href: "/contact"
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
      cta: "Browse Courses",
      href: "/digital-products"
    },
    {
      icon: <FaTools className="w-12 h-12 text-blue-500" />,
      title: "Communication Tools",
      description: "Ready-to-use resources for immediate impact.",
      features: [
        "Presentation templates",
        "Meeting scripts",
        "Communication frameworks",
        "Confidence exercises",
        "Progress tracking tools"
      ],
      price: "From $97",
      cta: "View Tools",
      href: "/digital-products"
    }
  ];

  const outcomes = [
    "Overcome communication anxiety",
    "Develop executive presence",
    "Master high-stakes presentations",
    "Lead meetings with confidence",
    "Communicate complex ideas clearly",
    "Build stronger professional relationships"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Transform Your Professional Communication
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Build the confidence and skills to communicate powerfully in any professional setting.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Your Free Consultation
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Services for Professionals
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

      {/* Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Impact
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our proven frameworks and personalized coaching help you achieve lasting results in your professional communication.
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
                Start Your Journey
              </h3>
              <p className="text-gray-600 mb-8">
                Book a free consultation to discuss your communication goals and create a personalized development plan.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg transition-colors"
              >
                Schedule Your Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <blockquote className="text-gray-600 mb-6">
                "The communication coaching transformed how I present to executives. My confidence has grown tremendously, and I recently secured a promotion."
              </blockquote>
              <p className="font-semibold">J.K.</p>
              <p className="text-sm text-gray-500">Marketing Director, NYC</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <blockquote className="text-gray-600 mb-6">
                "I went from dreading presentations to actually enjoying them. The frameworks and techniques really work."
              </blockquote>
              <p className="font-semibold">M.R.</p>
              <p className="text-sm text-gray-500">Senior Engineer, SF</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <blockquote className="text-gray-600 mb-6">
                "The personalized coaching helped me overcome my speaking anxiety and develop an authentic leadership presence."
              </blockquote>
              <p className="font-semibold">S.L.</p>
              <p className="text-sm text-gray-500">Product Manager, Boston</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards confident, impactful communication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book Your Consultation
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
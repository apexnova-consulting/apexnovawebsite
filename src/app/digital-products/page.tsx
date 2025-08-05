'use client';

import React from 'react';
import Link from 'next/link';
import { FaDownload, FaBook, FaRobot, FaCheck } from 'react-icons/fa';

export default function DigitalProducts() {
  const products = [
    {
      icon: <FaBook className="w-12 h-12 text-blue-500" />,
      title: "Communication Confidence Course",
      description: "Master professional communication in 30 days with our comprehensive self-paced program.",
      features: [
        "6 video-based modules",
        "Practice exercises",
        "Templates & scripts",
        "Progress tracking",
        "Lifetime access"
      ],
      price: "$49",
      tag: "Most Popular"
    },
    {
      icon: <FaRobot className="w-12 h-12 text-blue-500" />,
      title: "AI-Ready Teams™ Toolkit",
      description: "Complete framework for implementing AI tools and workflows in your organization.",
      features: [
        "Tool selection guide",
        "Implementation templates",
        "Training materials",
        "ROI calculators",
        "Best practices library"
      ],
      price: "$97",
      tag: "Featured"
    },
    {
      icon: <FaDownload className="w-12 h-12 text-blue-500" />,
      title: "Executive Communication Toolkit",
      description: "Essential resources to boost your communication confidence and executive presence.",
      features: [
        "Style assessment",
        "Anxiety management guide",
        "Presentation templates",
        "Meeting scripts",
        "Progress journal"
      ],
      price: "Free",
      tag: "Lead Magnet"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Digital Products
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Instant access to proven frameworks, courses, and tools for communication excellence and AI enablement.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 relative">
                {product.tag && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {product.tag}
                  </div>
                )}
                <div className="mb-6">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {product.price}
                </div>
                <Link
                  href={product.price === "Free" ? "/toolkit-download" : "/contact"}
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {product.price === "Free" ? "Download Now" : "Get Access"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                How do I access the products after purchase?
              </h3>
              <p className="text-gray-600">
                After your purchase is confirmed, you'll receive immediate access via email with login credentials for our digital platform.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Are updates included?
              </h3>
              <p className="text-gray-600">
                Yes! All paid products include lifetime access and free updates as we continue to improve and expand the content.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Can I share these with my team?
              </h3>
              <p className="text-gray-600">
                Individual licenses are for personal use only. For team access, please contact us about our corporate licensing options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a quick call to discuss which solution best fits your needs.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
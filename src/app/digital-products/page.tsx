'use client';

import React from 'react';
import Link from 'next/link';
import { FaDownload, FaBook, FaVideo, FaArrowRight } from 'react-icons/fa';

export default function DigitalProductsPage() {
  const products = [
    {
      icon: <FaBook className="w-12 h-12 text-teal-500" />,
      title: "AI-Ready Teams™ Toolkit",
      price: "$97",
      description: "Complete toolkit to streamline AI adoption and boost team productivity.",
      features: [
        "50+ workflow templates",
        "Custom prompt library",
        "Implementation guides",
        "Training materials",
        "ROI tracking sheets"
      ],
      cta: "Buy Now",
      href: "/products/ai-toolkit"
    },
    {
      icon: <FaVideo className="w-12 h-12 text-teal-500" />,
      title: "Communication Confidence Course",
      price: "$49",
      description: "Self-paced course to master professional communication and reduce anxiety.",
      features: [
        "6 video modules",
        "Practice exercises",
        "Feedback templates",
        "Resource library",
        "Lifetime access"
      ],
      cta: "Enroll Now",
      href: "/products/communication-course"
    },
    {
      icon: <FaDownload className="w-12 h-12 text-teal-500" />,
      title: "Executive Communication Toolkit",
      price: "Free",
      description: "Essential resources to enhance your executive presence and communication.",
      features: [
        "Quick-start guide",
        "Communication templates",
        "Confidence exercises",
        "Meeting scripts",
        "Progress tracker"
      ],
      cta: "Download Now",
      href: "/toolkit-download"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Digital Products & Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Self-paced tools and training to enhance your team's communication and AI capabilities.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{product.icon}</div>
                <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
                <div className="text-2xl font-bold text-teal-600 mb-6">
                  {product.price}
                </div>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="mb-8">
                  <h3 className="font-bold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={product.href}
                  className="group flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  {product.cta}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "How do I access the products after purchase?",
                a: "You'll receive immediate access via email with download links and login credentials where applicable."
              },
              {
                q: "Are updates included?",
                a: "Yes, all products include lifetime updates at no additional cost."
              },
              {
                q: "Can I share these with my team?",
                a: "Individual licenses are for personal use. Team licenses are available - contact us for details."
              },
              {
                q: "What if I'm not satisfied?",
                a: "We offer a 30-day money-back guarantee on all paid products."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
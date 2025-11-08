'use client';

import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const AISecurityTestimonials = () => {
  const testimonials = [
    {
      quote: "Before working with ApexNova, we had no idea how many AI tools our team was using without proper security measures. The audit alone was eye-opening, and their governance framework gave us the confidence to embrace AI safely.",
      author: "Sarah Mitchell",
      role: "CTO, TechStart Inc.",
      company: "Series B SaaS Company",
      image: "/images/avatars/professional-1.jpg"
    },
    {
      quote: "The compliance assessment was exactly what we needed before our SOC 2 audit. ApexNova helped us identify and fix vulnerabilities we didn't even know existed. Worth every penny.",
      author: "James Chen",
      role: "VP of Security",
      company: "Healthcare Technology Firm",
      image: "/images/avatars/professional-2.jpg"
    },
    {
      quote: "We went from 'AI chaos' to having a complete governance strategy in 30 days. The team training was particularly valuable - now everyone understands how to use AI tools responsibly.",
      author: "Maria Rodriguez",
      role: "Chief Information Officer",
      company: "Financial Services",
      image: "/images/avatars/professional-3.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-secondary">
            Trusted by Forward-Thinking Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join companies that are harnessing AI's power without the risks.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white opacity-20">
                  <FaQuoteLeft className="w-6 h-6" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-secondary">{testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-primary font-semibold mt-1">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm italic">
            Client names have been generalized to protect confidentiality. Full case studies available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AISecurityTestimonials;


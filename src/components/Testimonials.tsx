'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ApexNova's AI Adoption-as-a-Service transformed how our entire organization uses AI tools. Their systematic approach helped us achieve 90% adoption across teams in just 60 days.",
      name: "Sarah Chen",
      title: "VP of Digital Transformation, Enterprise SaaS Company",
      image: "/images/testimonials/executive-1.jpg"
    },
    {
      quote: "The ROI was immediate. Our customer support team reduced response times by 65% using AI, and the enablement framework ensures consistent quality across all interactions.",
      name: "Marcus Rodriguez",
      title: "Head of Customer Experience, Tech Startup",
      image: "/images/testimonials/executive-2.jpg"
    },
    {
      quote: "We tried implementing AI tools before, but nothing stuck. ApexNova's enablement program was the game-changer. Now our sales team consistently uses AI to close deals faster.",
      name: "Jennifer Taylor",
      title: "Sales Operations Director, Fortune 500",
      image: "/images/testimonials/executive-3.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Transformation Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from organizations that successfully adopted AI tools and transformed their operations with ApexNova.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <Image
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            <div className="text-gray-900 font-semibold">
              {testimonials[activeIndex].name}
            </div>
            <div className="text-gray-600">
              {testimonials[activeIndex].title}
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-4">
            <button
              onClick={previousTestimonial}
              className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-4">
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
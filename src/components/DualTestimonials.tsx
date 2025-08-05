'use client';

import React, { useState } from 'react';

const DualTestimonials = () => {
  const testimonials = [
    {
      quote: "The communication coaching transformed how I present to executives. My confidence has grown tremendously, and I recently secured a promotion to Director level.",
      author: "J.K.",
      role: "Marketing Director, NYC"
    },
    {
      quote: "ApexNova's AI enablement program helped our team adopt ChatGPT Enterprise effectively. We've seen a 40% increase in productivity across our customer support department.",
      author: "M.R.",
      role: "Head of Customer Experience"
    },
    {
      quote: "The combination of communication training and AI tools has been game-changing. I'm now leading our company's digital transformation initiatives with confidence.",
      author: "S.L.",
      role: "Technical Program Manager, SF"
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Success Stories
        </h2>

        <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <blockquote className="text-xl md:text-2xl text-gray-700 mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            <div className="text-gray-900 font-semibold">
              {testimonials[activeIndex].author}
            </div>
            <div className="text-gray-600">
              {testimonials[activeIndex].role}
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

export default DualTestimonials;
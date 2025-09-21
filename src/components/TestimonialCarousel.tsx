'use client';

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    quote: "The ROI from our AI adoption program was immediate and measurable. Our team's productivity increased by 35% in just 90 days.",
    author: "CTO",
    company: "Enterprise Tech Company"
  },
  {
    quote: "ApexNova's systematic approach transformed how our entire organization works with AI tools. The adoption rate exceeded our expectations.",
    author: "Director of Operations",
    company: "Mid-size SaaS Company"
  },
  {
    quote: "Not just another consulting firm - they delivered real, measurable results. Our communication efficiency improved dramatically.",
    author: "VP of Sales",
    company: "Fortune 500 Company"
  }
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white/50 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="w-8 h-8" />
          </button>

          <div className="text-center">
            <FaQuoteLeft className="w-12 h-12 text-primary mx-auto mb-8" />
            <blockquote className="text-xl sm:text-2xl text-white font-medium mb-8">
              {testimonials[current].quote}
            </blockquote>
            <cite className="text-white/70 not-italic">
              <div className="font-semibold">{testimonials[current].author}</div>
              <div className="text-sm">{testimonials[current].company}</div>
            </cite>
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white/50 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-primary' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

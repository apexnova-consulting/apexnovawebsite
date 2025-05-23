'use client';

import { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  // Updated testimonials data focused on communication improvements
  const testimonials = [
    {
      id: 1,
      quote: "Working with ApexNova helped me overcome my lifelong fear of public speaking. The personalized coaching approach identified the root causes of my anxiety and gave me practical techniques to transform my fear into confidence.",
      name: "Sarah Johnson",
      title: "Marketing Director, TechVision Group",
      image: "/images/testimonial-1.jpg",
    },
    {
      id: 2,
      quote: "The AI-powered speech coaching provided real-time feedback on my pacing and filler words. I went from dreading presentations to confidently leading our company all-hands meetings in just 6 weeks.",
      name: "Michael Chen",
      title: "SVP of Marketing, Horizon Brands",
      image: "/images/testimonial-2.jpg",
    },
    {
      id: 3,
      quote: "As someone who struggled with severe communication anxiety, ApexNova's systematic approach was life-changing. Their 5-day challenge was the perfect starting point, and the follow-up coaching solidified my transformation.",
      name: "Amara Peterson",
      title: "Managing Director, Capital Advisors",
      image: "/images/testimonial-3.jpg",
    },
    {
      id: 4,
      quote: "I used to avoid speaking up in meetings at all costs. Now I confidently lead discussions and have earned two promotions since working with ApexNova. The ROI on this coaching has been incredible.",
      name: "David Rodriguez",
      title: "Product Manager, Innovate Solutions",
      image: "/images/testimonial-4.jpg",
    },
    {
      id: 5,
      quote: "The combination of one-on-one coaching and the SpeechFlow AI tool accelerated my progress. Being able to practice daily with AI feedback between my coaching sessions was the game-changer I needed.",
      name: "Jennifer Lin",
      title: "CEO, Healthcare Innovations",
      image: "/images/testimonial-5.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Communication Transformation Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real results from professionals who overcame communication anxiety and developed powerful speaking skills with ApexNova.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-xl p-8 md:p-12">
            <div className="absolute -top-5 -left-5 text-primary-600 text-6xl opacity-30">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
            </div>

            <div className="mb-8">
              <p className="text-xl italic text-gray-700 mb-6">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full bg-primary-200 flex items-center justify-center text-primary-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].title}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === activeIndex
                      ? 'bg-primary-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                  aria-label="Previous testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                  aria-label="Next testimonial"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
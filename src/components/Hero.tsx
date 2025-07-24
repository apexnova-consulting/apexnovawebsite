'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheck, FaChartLine } from 'react-icons/fa';

const benefits = [
  'For CTOs, VPs, and Senior Leaders Who Struggle with Presentation Anxiety',
  'Transform Nervous Energy into Executive Presence',
  '90-Day Proven System Used by 200+ Technical Leaders'
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/pattern.svg"
          alt=""
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-900 font-medium text-sm mb-6">
              <FaChartLine className="w-4 h-4 mr-2" />
              87% Report Significant Confidence Improvement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Letting Communication Anxiety Limit Your Leadership Potential
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We help technical leaders and sales professionals overcome speaking fears so they can confidently present to executives, lead high-performing teams, and accelerate their career advancement.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-900">
                    <FaCheck className="h-6 w-6" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/assessment"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Your Free Assessment
                <FaArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/schedule"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-900"
              >
                Schedule Strategy Call
                <FaArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative"
                  >
                    <Image
                      src={`/images/testimonials/avatar${i}.jpg`}
                      alt={`Client ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-blue-900">200+ Technical Leaders</span>
                <br />
                transformed their communication
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-presentation.jpg"
              alt="Technical leader giving confident presentation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaChartLine className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      "Within 90 days, I went from dreading board presentations to leading with confidence. I got promoted to CTO 6 months later."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Sarah K., VP of Engineering → CTO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
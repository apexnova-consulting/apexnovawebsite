'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaCheck, FaChartLine } from 'react-icons/fa';

const benefits = [
  'Break Free from Communication Anxiety & Self-Doubt',
  'Transform Mental Blocks into Leadership Presence',
  'Trusted by 200+ High-Performing Professionals'
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
              92% Report Breakthrough in Communication Confidence
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Communication Anxiety Into Your Greatest Leadership Asset
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Break through the emotional barriers holding you back. We help ambitious professionals transform anxiety into authentic confidence, so you can speak with power, lead with clarity, and achieve the impact you know you're capable of.
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule a Consultation
                <FaArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-blue-900"
              >
                View Our Services
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
                      src={`/images/avatars/professional-${i}.jpg`}
                      alt={`Client ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-blue-900">Join 200+ Leaders</span>
                <br />
                who transformed their communication
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/executive-speaking.jpg"
              alt="Professional overcoming communication anxiety"
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
                      "ApexNova helped me break through years of anxiety and imposter syndrome. I now lead my team with authentic confidence I never thought possible."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Rachel K., VP of Product → Chief Product Officer
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
'use client';

import Link from 'next/link';
import { FaTools, FaComments, FaBook, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/pattern.svg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/50 via-transparent to-primary-900/50 animate-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight animate-fade-in">
            Tools & Strategies for
            <span className="block text-accent-400 mt-2">Ambitious Professionals</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-16 leading-relaxed">
            Empower your career, master communication, and transform your mindset — at your pace.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-accent-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-accent-400 text-5xl mb-6">
                <FaTools />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Digital Tools & Templates</h3>
              <p className="text-gray-300">Practical resources to streamline your workflow and boost productivity</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-accent-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-accent-400 text-5xl mb-6">
                <FaComments />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Communication Skills Courses</h3>
              <p className="text-gray-300">Master the art of effective communication in any professional setting</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:border-accent-400/50 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-accent-400 text-5xl mb-6">
                <FaBook />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Journals & Mindset Resources</h3>
              <p className="text-gray-300">Tools for personal growth and mental clarity</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learning-library"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-primary-700 transition-all duration-200 transform hover:scale-105"
            >
              Browse Learning Library
              <FaArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl text-lg font-medium hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 border border-primary-600"
            >
              Connect With Us
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 
'use client';

import Link from 'next/link';
import { FaTools, FaComments, FaBook } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tools & Strategies for Ambitious Professionals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Empower your career, master communication, and transform your mindset — at your pace.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary-600 text-4xl mb-4">
                <FaTools />
              </div>
              <h3 className="text-xl font-semibold mb-2">Digital Tools & Templates</h3>
              <p className="text-gray-600">Practical resources to streamline your workflow and boost productivity</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary-600 text-4xl mb-4">
                <FaComments />
              </div>
              <h3 className="text-xl font-semibold mb-2">Communication Skills Courses</h3>
              <p className="text-gray-600">Master the art of effective communication in any professional setting</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary-600 text-4xl mb-4">
                <FaBook />
              </div>
              <h3 className="text-xl font-semibold mb-2">Journals & Mindset Resources</h3>
              <p className="text-gray-600">Tools for personal growth and mental clarity</p>
            </div>
          </div>

          <Link
            href="/learning-library"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Browse the Learning Library
          </Link>
        </div>
      </div>
    </section>
  );
} 
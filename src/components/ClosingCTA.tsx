'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const ClosingCTA = () => {
  return (
    <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Transform?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Book your audit today and unlock your team's full potential.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/mini-audit"
            className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
          >
            Book Your Audit Today
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;

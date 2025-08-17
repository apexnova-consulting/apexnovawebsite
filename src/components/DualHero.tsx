'use client';

import React from 'react';
import Link from 'next/link';

const DualHero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Turn AI Into Measurable ROI
            <br />
            <span className="text-blue-400">— Fast.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            We help executives and teams unlock productivity with AI adoption, training, and enablement. From friction to workflows → measurable results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/roi-audit"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book My AI ROI Audit
            </Link>
            <Link 
              href="/toolkit-download"
              className="inline-block bg-transparent hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            >
              Download Free AI Toolkit
            </Link>
          </div>
          <div className="mt-12 text-sm text-gray-400">
            Serving clients in NYC, NJ, and nationwide
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualHero;
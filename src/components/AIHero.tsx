import React from 'react';
import Link from 'next/link';

const AIHero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Your AI Stack Isn't the Problem.
            <br />
            <span className="text-blue-400">Your Enablement Strategy Is.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            ApexNova helps your team adopt AI tools, automate workflows, and finally see ROI — without overhauling your tech stack or overwhelming your people.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="/toolkit-download"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            >
              Download Free AI Enablement Toolkit
            </Link>
          </div>
          <div className="mt-16">
            <p className="text-sm text-gray-400 mb-4">Trusted by forward-thinking teams at</p>
            <div className="flex justify-center items-center gap-8 opacity-50">
              {/* Placeholder for client logos */}
              <div className="h-12 w-32 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-32 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-12 w-32 bg-gray-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHero;
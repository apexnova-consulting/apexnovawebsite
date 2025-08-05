'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DualHero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Powerful Communication.
            <br />
            <span className="text-blue-400">Smarter Teams.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            Helping professionals and companies speak with clarity, lead with confidence, and thrive in the AI-powered workplace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/toolkit-download"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Get the Free Toolkit
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>

        {/* Trust Bar */}
        <div className="mt-16">
          <p className="text-sm text-gray-400 mb-4 text-center">Trusted by forward-thinking professionals and teams</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-75">
            <div className="h-12 flex items-center justify-center">
              <Image
                src="/images/clients/client-1.svg"
                alt="Client Logo"
                width={120}
                height={48}
                className="h-8 w-auto"
              />
            </div>
            <div className="h-12 flex items-center justify-center">
              <Image
                src="/images/clients/client-2.svg"
                alt="Client Logo"
                width={120}
                height={48}
                className="h-8 w-auto"
              />
            </div>
            <div className="h-12 flex items-center justify-center">
              <Image
                src="/images/clients/client-3.svg"
                alt="Client Logo"
                width={120}
                height={48}
                className="h-8 w-auto"
              />
            </div>
            <div className="h-12 flex items-center justify-center">
              <Image
                src="/images/clients/client-4.svg"
                alt="Client Logo"
                width={120}
                height={48}
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualHero;
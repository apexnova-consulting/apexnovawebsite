'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaShieldAlt } from 'react-icons/fa';

const ClosingCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
            <FaShieldAlt className="w-10 h-10 text-white" />
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Don't Let AI Become Your Biggest Liability
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          Get your free AI Health Check and discover your top 3 vulnerabilities in just 2 minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/ai-risk-calculator"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
          >
            Get Your Free AI Health Check
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/services/ai-governance"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;

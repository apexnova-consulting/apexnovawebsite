'use client';

import React from 'react';
import Link from 'next/link';
import { FaShieldAlt, FaArrowRight, FaLock, FaChartLine } from 'react-icons/fa';

const AISecurityHero = () => {
  const trustIndicators = [
    { icon: <FaShieldAlt className="w-5 h-5" />, text: "Enterprise-Grade Security" },
    { icon: <FaLock className="w-5 h-5" />, text: "Compliance Ready" },
    { icon: <FaChartLine className="w-5 h-5" />, text: "Measurable ROI" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Is Your Company's Data Being Used<br />
            to <span className="text-accent-light">Train Public AI Models?</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            We Secure Your AI Future. Eliminate Data Leaks, Ensure Compliance, and Harness AI Safely.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              href="/ai-risk-calculator"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
            >
              Get Your Free AI Health Check
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/services/ai-governance"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-lg transition-colors border border-white/20 text-lg"
            >
              Explore Our AI Security Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {trustIndicators.map((indicator, index) => (
              <div 
                key={index}
                className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg py-4 px-6 border border-white/10"
              >
                <span className="text-accent-light mr-3">{indicator.icon}</span>
                <span className="font-semibold text-sm sm:text-base">{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISecurityHero;


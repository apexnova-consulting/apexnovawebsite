'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaRobot, FaClock } from 'react-icons/fa';

const DualHero = () => {
  const metrics = [
    { icon: <FaChartLine />, text: "85% tool adoption" },
    { icon: <FaRobot />, text: "3× productivity" },
    { icon: <FaClock />, text: "60% friction reduction" }
  ];

  return (
    <>
      {/* Sticky CTA Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 py-2 px-4 text-center text-white text-sm">
        <span className="mr-2">🔥 Limited Time: Book your AI ROI Audit for $2,500 (50% off)</span>
        <Link 
          href="/roi-audit"
          className="underline hover:text-white/90"
        >
          Book Now →
        </Link>
      </div>

      <section className="relative bg-gray-900 text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
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
              Unlock Fast, Measurable ROI from AI Adoption.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link 
                href="/roi-audit"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
              >
                Book My AI ROI Audit
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/toolkit-download"
                className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
              >
                Download Free AI Toolkit
              </Link>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center bg-gray-800/50 rounded-lg py-3 px-4"
                >
                  <span className="text-blue-400 mr-2">{metric.icon}</span>
                  <span className="font-semibold">{metric.text}</span>
                </div>
              ))}
            </div>

            <div className="text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-4">
              <span>Serving executives in NYC, NJ, and nationwide</span>
              <span className="hidden sm:inline">•</span>
              <span className="text-blue-400">Only 5 audit slots available per month</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DualHero;
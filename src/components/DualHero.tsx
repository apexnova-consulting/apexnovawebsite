'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaRobot, FaClock } from 'react-icons/fa';

const DualHero = () => {
  const metrics = [
    { icon: <FaChartLine className="w-5 h-5" />, text: "35% faster delivery" },
    { icon: <FaRobot className="w-5 h-5" />, text: "85% tool adoption" },
    { icon: <FaClock className="w-5 h-5" />, text: "$2.1M influenced" }
  ];

  return (
    <section className="relative bg-secondary text-white pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Monthly Openings Banner */}
      <div className="absolute top-0 left-0 right-0 bg-primary px-4 py-2 text-center">
        <div className="text-white font-semibold text-sm sm:text-base">
          <span role="img" aria-label="rocket" className="mr-2">🚀</span>
          September openings: 2 Free Mini Audits left this month — 
          <Link href="/mini-audit" className="underline ml-1 hover:text-white/90">
            book now
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary-dark to-primary opacity-90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Transform Your Team's Communication & AI Adoption
            <br />
            <span className="text-primary-light">into Measurable Growth</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Trusted by executives to cut friction, boost adoption, and deliver measurable ROI in 90 days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              href="/mini-audit"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            >
              Book My Free Mini Audit
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/toolkit-download"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Download Free AI Toolkit
            </Link>
          </div>

          {/* Case Study Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="flex items-center justify-center bg-white/5 backdrop-blur rounded-lg py-4 px-6"
              >
                <span className="text-primary-light mr-3">{metric.icon}</span>
                <span className="font-semibold">{metric.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualHero;
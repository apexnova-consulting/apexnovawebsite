'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 opacity-90"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Transform Your Team's Communication & AI Adoption
          <br />
          <span className="text-teal-400">into Measurable Growth</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          We help professionals and companies overcome communication anxiety and leverage AI tools to increase productivity, reduce friction, and scale results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button 
            className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors group"
            onClick={() => window.location.href = '/mini-audit'}
          >
            Book My Free Mini Audit
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            className="inline-flex items-center justify-center bg-transparent hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg border border-gray-600 transition-colors"
            onClick={() => window.location.href = '/toolkit-download'}
          >
            Download Free AI Toolkit
          </button>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { metric: "3×", label: "Productivity" },
            { metric: "85%", label: "Tool Adoption" },
            { metric: "60%", label: "Friction Reduction" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-center bg-gray-800/50 rounded-lg py-4 px-6"
            >
              <span className="text-2xl font-bold text-teal-400 mr-3">
                {item.metric}
              </span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
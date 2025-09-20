'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function SpeechFlowAIPage() {
  return (
    <main className="bg-white">
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            SpeechFlow AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered communication enhancement platform for executives and teams.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="mt-8 inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Request Early Access
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transform Your Communication
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Real-time Analysis",
                    description: "Get instant feedback on your communication style and effectiveness."
                  },
                  {
                    title: "AI-powered Insights",
                    description: "Leverage advanced AI to improve clarity and impact."
                  },
                  {
                    title: "Custom Training",
                    description: "Personalized exercises based on your communication patterns."
                  },
                  {
                    title: "Progress Tracking",
                    description: "Monitor your improvement with detailed analytics."
                  }
                ].map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">
                Coming Soon
              </h3>
              <p className="text-gray-600 mb-8">
                Join our waitlist to be among the first to experience SpeechFlow AI.
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Request Early Access
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
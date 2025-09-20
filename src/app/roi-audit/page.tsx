'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FaCheck, FaArrowRight, FaClock, FaChartLine, FaLightbulb } from 'react-icons/fa';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function ROIAuditPage() {
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    {
      icon: <FaLightbulb className="w-6 h-6 text-teal-500" />,
      title: "AI Opportunity Analysis",
      description: "Identify key areas where AI can drive immediate value."
    },
    {
      icon: <FaChartLine className="w-6 h-6 text-teal-500" />,
      title: "ROI Blueprint",
      description: "Get a clear roadmap to achieve $50k–$250k in productivity gains."
    },
    {
      icon: <FaClock className="w-6 h-6 text-teal-500" />,
      title: "Quick Implementation",
      description: "Start seeing results within 14 days of engagement."
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Discovery Call",
      description: "We learn about your team's current AI usage and challenges."
    },
    {
      number: "2",
      title: "Workflow Audit",
      description: "Deep-dive analysis of processes and opportunity areas."
    },
    {
      number: "3",
      title: "ROI Blueprint Delivery",
      description: "Receive your actionable implementation plan."
    }
  ];

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'price_pilot_audit', // This should match your Stripe price ID
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) throw new Error('Stripe failed to load');

      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) throw error;
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to initiate checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Find $50k–$250k in Untapped AI ROI
            <br />
            <span className="text-teal-400">Before Your Competitors Do</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            In 14 days, we'll audit your workflows, identify quick wins, and deliver a 1-page ROI blueprint to immediately boost efficiency and revenue.
          </p>
          <div className="inline-block bg-gray-800 rounded-lg p-1 mb-8">
            <div className="bg-teal-500 text-white px-4 py-2 rounded font-semibold">
              Limited Time Offer: Valid until Oct 30, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">AI ROI Audit</h2>
                <div className="flex items-center justify-center mb-4">
                  <span className="text-gray-500 line-through text-2xl">$5,000</span>
                  <span className="text-4xl font-bold text-teal-600 ml-4">$2,500</span>
                </div>
                <p className="text-gray-600">Pilot Program Offer</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Comprehensive workflow analysis",
                  "AI opportunity mapping",
                  "ROI calculation & projections",
                  "14-day delivery",
                  "Implementation blueprint",
                  "30-minute strategy call"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FaCheck className="w-5 h-5 text-teal-500 mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoading ? 'Processing...' : 'Book Your Audit'}
                  {!isLoading && <FaArrowRight className="ml-2" />}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  Limited to 5 clients per month
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
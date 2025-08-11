'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { FaCheckCircle, FaArrowRight, FaClock, FaSearch, FaFileAlt } from 'react-icons/fa';

const stripePromise = loadStripe('pk_live_51OwTzG03iAAJZGvi6lsLjfsvit1cmf2U9bi9Zx2nVTHfb3uXN0hBTDQf2nzKQrmzNWncm7JTOoBblp3xkj8ErVWw005W0yyKSJ');

export default function RoiAudit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const benefits = [
    "Identify AI automation opportunities across your workflow",
    "Calculate potential cost savings and revenue gains",
    "Get specific tool recommendations and implementation steps",
    "Receive prioritized quick-wins for immediate impact",
    "Learn industry benchmarks and competitor insights",
    "Get a clear ROI measurement framework"
  ];

  const steps = [
    {
      icon: <FaClock className="w-8 h-8 text-blue-500" />,
      title: "Discovery Call",
      description: "30-minute call to understand your current workflows and challenges."
    },
    {
      icon: <FaSearch className="w-8 h-8 text-blue-500" />,
      title: "Workflow Audit",
      description: "Deep analysis of your processes to identify AI opportunities."
    },
    {
      icon: <FaFileAlt className="w-8 h-8 text-blue-500" />,
      title: "ROI Blueprint Delivery",
      description: "Receive your actionable 1-page implementation plan."
    }
  ];

  const handleCheckout = async () => {
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: 'roi-audit',
          successUrl: 'https://calendly.com/apexnovaconsulting-info/30min',
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          setError(error.message || 'Something went wrong. Please try again.');
        }
      }
    } catch (err) {
      setError('Failed to initiate checkout. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Find $50k–$250k in Untapped AI ROI
            <br />
            <span className="text-blue-400">Before Your Competitors Do</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
            In 14 days, we'll audit your workflows, identify quick wins, and deliver a 1-page ROI blueprint to immediately boost efficiency and revenue.
          </p>
          <div className="inline-block bg-red-600 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            Limited to 5 clients/month
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                What You'll Get
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-gray-500 line-through text-2xl mb-2">$5,000</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">$2,500</div>
                <div className="text-gray-600 mb-6">Pilot Offer (Valid until Oct 30, 2025)</div>
                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center"
                >
                  {isLoading ? (
                    'Processing...'
                  ) : (
                    <>
                      Book Your Audit
                      <FaArrowRight className="ml-2" />
                    </>
                  )}
                </button>
                {error && (
                  <p className="mt-4 text-red-600 text-sm">{error}</p>
                )}
                <p className="mt-4 text-sm text-gray-500">
                  Secure payment via Stripe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don't Let Your Competition Get Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your ROI audit now and start seeing results in just 14 days.
          </p>
          <button
            onClick={handleCheckout}
            disabled={isLoading}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Book Your Audit Now'}
          </button>
        </div>
      </section>
    </div>
  );
}
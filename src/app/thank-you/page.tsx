'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function ThankYou() {
  // Get URL parameters to customize the message
  const params = new URLSearchParams(
    typeof window !== 'undefined' ? window.location.search : ''
  );
  const type = params.get('type') || 'default';

  const messages = {
    toolkit: {
      title: "Your AI-Ready Teams™ Toolkit is on its way!",
      description: "Check your email for your download link. While you wait, explore our other resources to accelerate your AI adoption journey.",
      cta: "Book a Strategy Call",
      ctaLink: "/contact"
    },
    workshop: {
      title: "Thanks for Your Interest in Our Workshop!",
      description: "We'll be in touch within 24 hours to schedule your discovery call and discuss your team's specific needs.",
      cta: "Browse Our Resources",
      ctaLink: "/toolkit-download"
    },
    cohort: {
      title: "Welcome to the AI Enablement Leader Community!",
      description: "Check your email for course information and next steps. We're excited to have you join our next cohort.",
      cta: "Learn About Our Services",
      ctaLink: "/services"
    },
    default: {
      title: "Thank You for Connecting with ApexNova!",
      description: "We appreciate your interest. Our team will be in touch shortly to assist you further.",
      cta: "Return to Homepage",
      ctaLink: "/"
    }
  };

  const message = messages[type as keyof typeof messages] || messages.default;

  const nextSteps = [
    {
      title: "Follow Us on LinkedIn",
      description: "Get the latest AI enablement tips and insights",
      link: "https://linkedin.com/company/apexnova"
    },
    {
      title: "Join Our Newsletter",
      description: "Weekly updates on AI adoption best practices",
      link: "/newsletter"
    },
    {
      title: "Download Free Resources",
      description: "Access our library of templates and guides",
      link: "/toolkit-download"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />

        <h1 className="text-4xl font-bold mb-4">
          {message.title}
        </h1>

        <p className="text-xl text-gray-600 mb-12">
          {message.description}
        </p>

        <Link
          href={message.ctaLink}
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors mb-16"
        >
          {message.cta}
          <FaArrowRight className="ml-2" />
        </Link>

        <div className="grid md:grid-cols-3 gap-8">
          {nextSteps.map((step, index) => (
            <Link
              key={index}
              href={step.link}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-left"
            >
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  
  const getContent = () => {
    switch (type) {
      case 'toolkit':
        return {
          title: 'Your AI Toolkit is On Its Way!',
          message: 'Check your email for your download link. While you wait, why not book a free mini audit to get personalized insights?',
          cta: {
            text: 'Book My Free Mini Audit',
            href: 'https://calendly.com/apexnovaconsulting-info/30min',
            icon: <FaCalendarAlt className="w-5 h-5" />
          }
        };
      case 'contact':
        return {
          title: 'Thanks for Reaching Out!',
          message: 'We\'ve received your message and will get back to you within 24 hours.',
          cta: {
            text: 'Explore Our Services',
            href: '/services',
            icon: <FaArrowRight className="w-5 h-5" />
          }
        };
      case 'payment':
        return {
          title: 'Payment Successful!',
          message: 'Your next step is to schedule your session. Click below to access our calendar.',
          cta: {
            text: 'Schedule Your Session',
            href: 'https://calendly.com/apexnovaconsulting-info/30min',
            icon: <FaCalendarAlt className="w-5 h-5" />
          }
        };
      default:
        return {
          title: 'Thank You!',
          message: 'We appreciate your interest in ApexNova Consulting.',
          cta: {
            text: 'Return to Homepage',
            href: '/',
            icon: <FaArrowRight className="w-5 h-5" />
          }
        };
    }
  };

  const content = getContent();

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <FaCheckCircle className="w-20 h-20 text-primary mx-auto mb-8" />
      <h1 className="text-4xl font-bold mb-4">{content.title}</h1>
      <p className="text-xl text-gray-600 mb-12">
        {content.message}
      </p>
      
      {/* Primary CTA */}
      <a
        href={content.cta.href}
        target={content.cta.href.startsWith('http') ? '_blank' : '_self'}
        rel={content.cta.href.startsWith('http') ? 'noopener noreferrer' : ''}
        className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors mb-8"
      >
        {content.cta.text}
        <span className="ml-2">{content.cta.icon}</span>
      </a>

      {/* Secondary Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12">
        <Link
          href="/insights"
          className="text-gray-600 hover:text-primary transition-colors"
        >
          Read Our Insights
        </Link>
        <Link
          href="/services"
          className="text-gray-600 hover:text-primary transition-colors"
        >
          View Services
        </Link>
        <Link
          href="/contact"
          className="text-gray-600 hover:text-primary transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main className="bg-white min-h-screen">
      <Suspense fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <FaCheckCircle className="w-20 h-20 text-primary mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-4">Processing...</h1>
          <p className="text-xl text-gray-600 mb-12">
            Please wait while we complete your request.
          </p>
        </div>
      }>
        <ThankYouContent />
      </Suspense>
    </main>
  );
}
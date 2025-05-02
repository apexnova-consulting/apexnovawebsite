'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone, FaRocket } from 'react-icons/fa';
import Image from 'next/image';

const inquiryTypes = [
  { id: 'partnership', label: 'Partnership Opportunity', description: 'Explore business partnerships and collaborations' },
  { id: 'collaboration', label: 'Content Collaboration', description: 'Work together on content creation and distribution' },
  { id: 'affiliate', label: 'Affiliate Program', description: 'Join our affiliate network and earn commissions' },
  { id: 'press', label: 'Press Inquiry', description: 'Media and press-related questions' },
  { id: 'support', label: 'Customer Support', description: 'Get help with your purchase or account' },
  { id: 'other', label: 'Other', description: 'Other inquiries and questions' }
];

const companySizes = [
  { id: '1-10', label: '1-10 employees' },
  { id: '11-50', label: '11-50 employees' },
  { id: '51-200', label: '51-200 employees' },
  { id: '201-500', label: '201-500 employees' },
  { id: '501+', label: '501+ employees' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '',
    inquiryType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedInquiryType, setSelectedInquiryType] = useState('');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        companySize: '',
        inquiryType: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');
    setNewsletterError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: newsletterEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe to newsletter');
      }

      setNewsletterStatus('success');
      setNewsletterEmail('');
    } catch (error) {
      setNewsletterStatus('error');
      setNewsletterError('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-primary-900/10" />
        <div className="absolute inset-0">
          <Image
            src="/images/pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in partnering with ApexNova? We're always open to exploring new collaborations and opportunities.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary-600 mb-4">
                <FaMapMarkerAlt className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">New Jersey</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-primary-600 mb-4">
                <FaPhone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(973) 348-5008</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select company size</option>
                    {companySizes.map((size) => (
                      <option key={size.id} value={size.id}>
                        {size.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Inquiry
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => {
                    setFormData({ ...formData, inquiryType: e.target.value });
                    setSelectedInquiryType(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {selectedInquiryType && (
                  <p className="mt-2 text-sm text-gray-500">
                    {inquiryTypes.find(type => type.id === selectedInquiryType)?.description}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  required
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
                  {errorMessage}
                </div>
              )}
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-xl">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-xl text-lg font-medium hover:bg-primary-700 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 mb-16">
            <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl overflow-hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/50" />
                <div className="absolute inset-0">
                  <Image
                    src="/images/pattern.svg"
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-10"
                  />
                </div>
                <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-accent-400 mb-4">
                        <FaRocket className="w-12 h-12" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        Stay Ahead of the Curve
                      </h2>
                      <p className="text-lg text-gray-200 mb-6">
                        Get exclusive insights, early access to new resources, and expert tips delivered straight to your inbox.
                      </p>
                      <ul className="space-y-3 text-gray-200">
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-accent-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Weekly expert insights
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-accent-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Early access to new resources
                        </li>
                        <li className="flex items-center">
                          <svg className="w-5 h-5 text-accent-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Exclusive discounts
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8">
                      <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                        <div>
                          <label htmlFor="newsletter-email" className="block text-sm font-medium text-white mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="newsletter-email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-colors"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        {newsletterStatus === 'error' && (
                          <div className="bg-red-500/20 border border-red-500/30 text-red-200 px-4 py-3 rounded-xl text-sm">
                            {newsletterError}
                          </div>
                        )}
                        {newsletterStatus === 'success' && (
                          <div className="bg-green-500/20 border border-green-500/30 text-green-200 px-4 py-3 rounded-xl text-sm">
                            Thanks for subscribing! Please check your email to confirm your subscription.
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={newsletterStatus === 'loading'}
                          className="w-full bg-accent-500 text-white px-6 py-4 rounded-xl text-lg font-medium hover:bg-accent-600 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          {newsletterStatus === 'loading' ? (
                            <span className="flex items-center justify-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Subscribing...
                            </span>
                          ) : 'Subscribe to Newsletter'}
                        </button>
                        <p className="text-sm text-gray-300 text-center">
                          We respect your privacy. Unsubscribe at any time.
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-8">
              <div className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                <FaInstagram className="w-5 h-5" />
                <a href="https://instagram.com/apexnova_consulting" target="_blank" rel="noopener noreferrer">
                  @apexnova_consulting
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-primary-600 transition-colors">
                <FaEnvelope className="w-5 h-5" />
                <a href="mailto:info@apexnovaconsulting.com">
                  info@apexnovaconsulting.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
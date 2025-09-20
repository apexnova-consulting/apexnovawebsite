'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaArrowRight } from 'react-icons/fa';

export default function ContactPage() {
  const [formType, setFormType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We will be in touch shortly.'
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can help transform your team's potential.
          </p>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 text-teal-500 mr-3" />
                  <a href="mailto:info@apexnovaconsulting.com" className="hover:text-teal-600">
                    info@apexnovaconsulting.com
                  </a>
                </div>
                <p className="text-gray-500">
                  Serving clients in NYC, NJ, and nationwide through our virtual enablement platform.
                </p>
              </div>

              {/* Form Type Selector */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4">How can we help?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-4 rounded-lg text-center transition-colors ${formType === 'general'
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    onClick={() => setFormType('general')}
                  >
                    General Inquiry
                  </button>
                  <button
                    className={`p-4 rounded-lg text-center transition-colors ${formType === 'audit'
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    onClick={() => setFormType('audit')}
                  >
                    Book AI ROI Audit
                  </button>
                </div>
              </div>

              {/* Careers/Partner Section */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Careers / Partnership</h3>
                <p className="text-gray-600 mb-4">
                  Interested in joining or partnering with ApexNova? We're always looking to connect with talented professionals and organizations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700"
                >
                  Learn More
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">
                {formType === 'general' ? 'Send Us a Message' : 'Book Your AI ROI Audit'}
              </h2>

              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : formType === 'general' ? 'Send Message' : 'Book Audit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
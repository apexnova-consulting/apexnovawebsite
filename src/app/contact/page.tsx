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
    <main className="bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-navy-950 to-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Let's discuss how ApexNova Consulting can secure your AI operations.
          </p>
        </div>
      </section>

      {/* Contact Forms Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6 text-slate-300">
                <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 text-cyber mr-3" />
                  <a href="mailto:info@apexnovaconsulting.com" className="hover:text-cyber transition-colors">
                    info@apexnovaconsulting.com
                  </a>
                </div>
                <p className="text-slate-400">
                  Serving New Jersey and the NYC Tri-State Area with enterprise AI governance.
                </p>
              </div>

              {/* Form Type Selector */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-4 text-white">How can we help?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-4 rounded-lg text-center transition-colors ${formType === 'general'
                        ? 'bg-cyber text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    onClick={() => setFormType('general')}
                  >
                    General Inquiry
                  </button>
                  <button
                    className={`p-4 rounded-lg text-center transition-colors ${formType === 'audit'
                        ? 'bg-cyber text-slate-950'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    onClick={() => setFormType('audit')}
                  >
                    Book Compliance Audit
                  </button>
                </div>
              </div>

              {/* Careers/Partner Section */}
              <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-white">Careers / Partnership</h3>
                <p className="text-slate-300 mb-4">
                  Interested in joining or partnering with ApexNova Consulting? We're always looking to connect with talented professionals and organizations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-cyber hover:text-trust transition-colors"
                >
                  Learn More
                  <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-white">
                {formType === 'general' ? 'Send Us a Message' : 'Book Your Compliance Audit'}
              </h2>

              {submitStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                      ? 'bg-trust/10 border border-trust/30 text-trust'
                      : 'bg-alert/10 border border-alert/30 text-alert'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-cyber focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-trust to-cyber text-slate-950 font-bold py-3 px-6 rounded-lg transition-all hover:shadow-cyber-lg disabled:opacity-50"
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
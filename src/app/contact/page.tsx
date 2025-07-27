'use client';

import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaInstagram, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

const programs = [
  { id: 'executive', name: 'Executive Communication Intensive ($18,000)' },
  { id: 'leadership', name: 'Technical Leadership Presence Program ($14,000)' },
  { id: 'presentation', name: 'High-Stakes Presentation Mastery ($9,500)' },
  { id: 'monthly', name: 'Monthly Executive Coaching ($4,500/month)' },
  { id: 'audit', name: 'Communication Confidence Audit ($2,500)' },
  { id: 'assessment', name: 'Free Communication Assessment Results' }
];

const digitalProducts = [
  {
    id: 'presentation-templates',
    name: 'Executive Presentation Templates Bundle',
    price: '$97',
    description: 'Professional templates for technical presentations, including board meetings, team updates, and project proposals.',
    includes: [
      '10 PowerPoint/Keynote templates',
      'Slide library with 50+ layouts',
      'Data visualization templates',
      'Executive summary templates'
    ]
  },
  {
    id: 'communication-workbook',
    name: 'Technical Communication Workbook',
    price: '$47',
    description: 'A comprehensive workbook to help you structure and simplify complex technical concepts.',
    includes: [
      'Message structuring frameworks',
      'Audience analysis templates',
      'Technical storytelling guides',
      'Practice exercises'
    ]
  },
  {
    id: 'anxiety-toolkit',
    name: 'Speaking Anxiety Management Toolkit',
    price: '$67',
    description: 'Digital toolkit with exercises and techniques to manage presentation anxiety.',
    includes: [
      'Anxiety assessment tools',
      'Breathing exercise guides',
      'Pre-presentation routines',
      'Confidence building exercises'
    ]
  },
  {
    id: 'leadership-journal',
    name: 'Communication Leadership Journal',
    price: '$37',
    description: 'Digital journal with prompts and exercises to develop your leadership communication style.',
    includes: [
      '90-day journal template',
      'Daily reflection prompts',
      'Progress tracking tools',
      'Goal setting frameworks'
    ]
  }
];

const inquiryTypes = [
  { id: 'program', name: 'Program Interest', description: 'Learn more about our programs or schedule a consultation' },
  { id: 'assessment', name: 'Assessment Follow-up', description: 'Discuss your assessment results and next steps' },
  { id: 'digital-products', name: 'Digital Products', description: 'Purchase our templates, toolkits, and resources' },
  { id: 'partnership', name: 'Partnership Opportunity', description: 'Explore business partnerships and collaborations' },
  { id: 'speaking', name: 'Speaking Engagement', description: 'Book a speaker for your event or organization' },
  { id: 'other', name: 'Other Inquiry', description: 'Other questions or requests' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    inquiryType: '',
    programInterest: '',
    digitalProductInterest: '',
    timeframe: '',
    message: '',
    hearAbout: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        inquiryType: '',
        programInterest: '',
        digitalProductInterest: '',
        timeframe: '',
        message: '',
        hearAbout: ''
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-900/10" />
        <div className="absolute inset-0">
          <Image
            src="/images/pattern.svg"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Transform Your Communication Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards confident, authentic leadership communication. We're here to help you succeed.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-900 mb-4">
                <FaMapMarkerAlt className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">New Jersey</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-900 mb-4">
                <FaPhone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(973) 348-5008</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-blue-900 mb-4">
                <FaEnvelope className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@apexnovaconsulting.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
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
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="e.g., Senior Engineering Manager, Technical Director"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type of Inquiry *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>

              {formData.inquiryType === 'digital-products' && (
                <div>
                  <label htmlFor="digitalProductInterest" className="block text-sm font-medium text-gray-700 mb-4">
                    Available Digital Products
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {digitalProducts.map((product) => (
                      <div
                        key={product.id}
                        className={`relative border-2 rounded-xl p-6 transition-all duration-200 ${formData.digitalProductInterest === product.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-200'
                          }`}
                      >
                        <input
                          type="radio"
                          name="digitalProductInterest"
                          id={product.id}
                          value={product.id}
                          checked={formData.digitalProductInterest === product.id}
                          onChange={(e) => setFormData({ ...formData, digitalProductInterest: e.target.value })}
                          className="sr-only"
                        />
                        <label htmlFor={product.id} className="cursor-pointer">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                            <span className="text-lg font-bold text-blue-900">{product.price}</span>
                          </div>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <ul className="space-y-2">
                            {product.includes.map((item, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <FaCheck className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                  Desired Timeframe
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select timeframe</option>
                  <option value="immediate">Ready to start immediately</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="exploring">Just exploring options</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={formData.inquiryType === 'digital-products'
                    ? "Any specific questions about the digital products or special requirements?"
                    : "Tell us about your communication goals and any specific challenges you'd like to address..."}
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="referral">Professional Referral</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="search">Google Search</option>
                  <option value="event">Professional Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl">
                  {errorMessage}
                </div>
              )}
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-xl">
                  Thank you for reaching out! We'll be in touch within 24 hours to schedule your consultation.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-blue-900 text-white px-6 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Submit Inquiry'}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://instagram.com/apexnova_consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-900 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
                @apexnova_consulting
              </a>
              <a
                href="mailto:info@apexnovaconsulting.com"
                className="flex items-center gap-3 text-gray-600 hover:text-blue-900 transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
                info@apexnovaconsulting.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interested in partnering with ApexNova? We're always open to exploring new collaborations and opportunities.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Partnership Proposal
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  required
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
              {status === 'success' && (
                <p className="text-green-500 text-sm">Thank you for your message! We'll get back to you soon.</p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Connect With Us
            </h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/apexnovaconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaInstagram className="w-8 h-8" />
              </a>
              <a
                href="mailto:partnerships@apexnovaconsulting.com"
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                <FaEnvelope className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
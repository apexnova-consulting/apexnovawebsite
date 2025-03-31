'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState<string>('');
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // In a real implementation, you would submit this data to your backend
    // Here we're just simulating success for demonstration
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success case
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for signing up! Check your email for the free mini-challenge.'
      });
      
      // Reset form
      setEmail('');
    } catch (error) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Free Communication Mini-Challenge
              </h2>
              <p className="text-xl text-primary-100 mb-8">
                Sign up for our newsletter and receive a free 5-day mini-challenge to improve your executive communication skills.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-accent-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">5-Day Challenge</h3>
                    <p className="text-primary-100">Simple daily exercises that take less than 10 minutes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-accent-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Free Journal PDF</h3>
                    <p className="text-primary-100">Download our communication reflection journal</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-6 w-6 text-accent-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Proven Techniques</h3>
                    <p className="text-primary-100">Strategies used by professional communicators</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Mini-Challenge</h3>
              
              {formStatus.submitted ? (
                <div className="bg-green-50 p-4 rounded-md mb-6">
                  <div className="flex">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-3">
                      <p className="text-sm text-green-800">{formStatus.message}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-gray-600 mb-6">
                    Enter your email below to receive the free mini-challenge and be the first to know about new resources and special offers.
                  </p>
                  
                  {formStatus.error && (
                    <div className="bg-red-50 p-4 rounded-md mb-6">
                      <div className="flex">
                        <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div className="ml-3">
                          <p className="text-sm text-red-800">{formStatus.message}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    >
                      Send Me the Challenge
                    </button>
                  </form>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                  <span className="font-semibold text-primary-600">Join 5,000+</span> professionals who have completed our mini-challenge
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
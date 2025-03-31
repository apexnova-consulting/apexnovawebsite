'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SpeechFlowAI() {
  return (
    <main>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-primary-700 to-primary-500 text-white pt-32 pb-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/speechflow-hero.jpg"
            alt="SpeechFlow AI"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Coaching – Elevate Your Communication
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Get instant speech feedback and AI-driven coaching in real-time.
            </p>

            <a
              href="https://www.speechflowai.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8"
            >
              See Pricing Options
            </a>
          </div>
        </div>
      </section>

      {/* What is SpeechFlow AI? */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary-500">What is SpeechFlow AI?</h2>

            <p className="text-lg text-gray-700 mb-8">
              SpeechFlow AI is a revolutionary platform that combines artificial intelligence with proven communication coaching techniques to provide personalized, real-time feedback on your speech and presentation skills. It's like having a professional communication coach available 24/7.
            </p>

            <div className="bg-primary-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4 text-primary-500">Key Features:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Real-time speech feedback</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>AI-powered coaching</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Personalized improvement plans</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Confidence-building exercises</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="https://www.speechflowai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-primary-500 hover:bg-primary-600 text-white inline-flex items-center"
              >
                See SpeechFlow AI in Action
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who is It For? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-500">Who is It For?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-500">Executives & Business Professionals</h3>
              <p className="text-gray-600">Improve leadership communication and enhance your executive presence.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-500">Public Speakers</h3>
              <p className="text-gray-600">Master stage presence and captivate audiences with confidence.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-500">Sales Teams & Negotiators</h3>
              <p className="text-gray-600">Speak persuasively and close more deals with effective communication.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-secondary-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary-500">Anyone Facing Communication Anxiety</h3>
              <p className="text-gray-600">Build confidence and overcome communication challenges step by step.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.speechflowai.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-secondary-500 hover:bg-secondary-600 text-white"
            >
              See Pricing Options
            </a>
          </div>
        </div>
      </section>

      {/* AI-Powered Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary-500">AI-Powered Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">Interactive Speech Evaluations</h3>
                <p className="text-gray-600">
                  Get AI-driven insights on tone, clarity, and delivery. Our advanced algorithms analyze your speech patterns and provide specific recommendations to enhance your communication effectiveness.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">Real-Time Practice Mode</h3>
                <p className="text-gray-600">
                  Speak, get instant feedback, and refine your skills on the spot. The intuitive interface highlights strengths and areas for improvement as you practice presentations or speeches.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">AI-Personalized Coaching</h3>
                <p className="text-gray-600">
                  Receive tailored exercises for faster improvement based on your specific communication patterns. Our AI adapts to your progress, focusing on the areas where you need the most support.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 flex items-start justify-center">
                <div className="bg-secondary-100 p-4 rounded-full text-secondary-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary-500">Analytics Dashboard</h3>
                <p className="text-gray-600">
                  Track your progress over time with comprehensive metrics and visual charts. Set goals, monitor improvements, and celebrate your communication victories as you develop your skills.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.speechflowai.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-primary-500 hover:bg-primary-600 text-white"
            >
              View SpeechFlow AI Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Transform Your Communication Skills Today
            </h2>
            <p className="text-xl mb-10 text-primary-100">
              Start your journey to powerful, confident communication with SpeechFlow AI.
            </p>
            <a
              href="https://www.speechflowai.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8"
            >
              Get Started with SpeechFlow AI
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
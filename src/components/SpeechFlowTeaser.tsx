'use client';

import Image from 'next/image';
import Link from 'next/link';

const SpeechFlowTeaser = () => {
  return (
    <section className="bg-gradient-to-br from-secondary-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
              Introducing SpeechFlow AI
            </h2>

            <p className="text-lg mb-6 text-gray-700">
              Get instant speech feedback and AI-driven coaching in real-time. SpeechFlow AI helps you overcome communication anxiety and master public speaking through personalized feedback.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">Real-time speech feedback and analysis</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">AI-powered coaching tailored to your needs</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">Personalized improvement plans</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-600 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">Confidence-building exercises</p>
              </div>
            </div>

            <Link href="/speechflow-ai" className="btn btn-secondary inline-flex items-center">
              Learn More About SpeechFlow AI
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden w-full aspect-video bg-gray-200">
              {/* Replace with actual image later */}
              <div className="absolute inset-0 flex items-center justify-center bg-secondary-100">
                <div className="text-secondary-600 text-6xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center group cursor-pointer">
                <div className="bg-secondary-600 rounded-full p-4 text-white shadow-lg transform transition-transform group-hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white py-3 px-6 rounded-lg shadow-lg">
              <p className="font-bold">Try SpeechFlow AI Free</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeechFlowTeaser; 
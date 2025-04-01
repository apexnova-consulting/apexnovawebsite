'use client';

import Image from 'next/image';

const SpeechFlowTeaser = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
              Introducing SpeechFlow AI
            </h2>

            <p className="text-lg mb-6 text-gray-700">
              Get instant speech feedback and AI-driven coaching in real-time. SpeechFlow AI helps you overcome communication anxiety and master public speaking through personalized feedback.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">Real-time speech feedback and analysis</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">AI-powered coaching tailored to your needs</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">Personalized improvement plans</p>
              </div>

              <div className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-700">Confidence-building exercises</p>
              </div>
            </div>

            <a href="https://www.speechflowai.com/pricing" target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105">
              View Pricing Options
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden w-full aspect-video">
              <Image
                src="/images/speechflow-screenshot.jpg"
                alt="SpeechFlow AI Interface"
                fill
                className="object-cover"
              />

              {/* Overlay with branding */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="absolute bottom-6 left-6 bg-white/90 p-3 rounded-lg shadow-md">
                  <h3 className="text-primary-600 font-bold text-lg">SpeechFlow AI</h3>
                  <p className="text-sm text-gray-600">AI-Powered Speech Coaching</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6">
              <a
                href="https://www.speechflowai.com/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 text-white py-3 px-6 rounded-lg shadow-lg font-bold hover:bg-primary-600 transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeechFlowTeaser; 
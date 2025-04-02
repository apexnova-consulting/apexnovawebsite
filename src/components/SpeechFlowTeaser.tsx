'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SpeechFlowTeaser() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600">
                SpeechFlow AI: Your AI Speech Coach
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Experience the future of communication training with our AI-powered speech coaching platform.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Real-time feedback on your speech and presentations</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Advanced analytics and improvement tracking</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Personalized exercises and practice sessions</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary-500 hover:bg-secondary-600 transition-colors"
              >
                Learn More
                <svg className="ml-2 -mr-1 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/speechflow-screenshot.jpg"
                alt="SpeechFlow AI Interface"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
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
                SpeechFlow AI: Overcome Communication Anxiety
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our AI-powered speech coaching platform helps you transform anxiety into confidence with personalized feedback and guided practice.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Real-time feedback on pacing, clarity, and vocal tone</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Anxiety-reduction exercises tailored to your specific challenges</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Personalized improvement plan that builds confidence step-by-step</span>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">Progress tracking to visualize your communication growth</span>
                </div>
              </div>
              <Link
                href="/speechflow-ai"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-secondary-500 hover:bg-secondary-600 transition-colors"
              >
                Try SpeechFlow AI
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
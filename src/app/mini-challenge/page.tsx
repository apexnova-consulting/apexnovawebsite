'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NewsletterSignup from '@/components/NewsletterSignup';
import Link from 'next/link';

export default function MiniChallenge() {
  const challengeDays = [
    {
      day: 1,
      title: "The Power of Perspective",
      description: "Learn how to reframe communication scenarios from threats to opportunities and reduce anxiety through visualization techniques."
    },
    {
      day: 2,
      title: "Finding Your Authentic Voice",
      description: "Discover techniques to speak with authenticity and confidence, even when feeling nervous or uncertain."
    },
    {
      day: 3,
      title: "Mastering Nonverbal Communication",
      description: "Understand how body language, eye contact, and vocal tone influence your communication effectiveness."
    },
    {
      day: 4,
      title: "Handling Difficult Conversations",
      description: "Learn strategies for navigating challenging interactions with confidence and clarity."
    },
    {
      day: 5,
      title: "Building Long-Term Communication Confidence",
      description: "Create your personalized confidence-building plan and learn how to maintain progress even in stressful situations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-800 to-primary-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                5-Day Communication Confidence Challenge
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your speaking confidence in just 5 days with our proven step-by-step system
              </p>
              <Link
                href="#signup"
                className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Join the Free Challenge
              </Link>
            </div>
          </div>
        </section>

        {/* Challenge Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What You'll Learn</h2>

              <div className="space-y-8">
                {challengeDays.map((day) => (
                  <div key={day.day} className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                        Day {day.day}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary-700">{day.title}</h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Why Join This Challenge?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-accent-500 mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Immediate Results</h3>
                  <p className="text-gray-600">
                    Start seeing improvements in your communication confidence from day one with our practical, easy-to-implement techniques.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-accent-500 mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Just 10 Minutes Daily</h3>
                  <p className="text-gray-600">
                    Each day's exercise takes only 10 minutes to complete, making it easy to fit into even the busiest schedule.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-accent-500 mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Free Workbook & Resources</h3>
                  <p className="text-gray-600">
                    Receive our Communication Confidence Workbook and additional resources to support your journey.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-accent-500 mb-4">
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community Support</h3>
                  <p className="text-gray-600">
                    Join thousands of other professionals who are on the same journey to overcome communication anxiety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What Past Participants Say</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-4">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold">James Davis</h4>
                      <p className="text-sm text-gray-500">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "I went from dreading team presentations to confidently leading them. The daily exercises were simple but incredibly effective. I saw a difference by day 3!"
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-4">
                      LP
                    </div>
                    <div>
                      <h4 className="font-bold">Lisa Parker</h4>
                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "As an introvert, speaking up always made me anxious. The perspective reframing techniques in this challenge have been game-changing for my career confidence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <div id="signup">
          <NewsletterSignup />
        </div>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">How does the challenge work?</h3>
                  <p className="text-gray-600">
                    When you sign up, you'll immediately receive Day 1 of the challenge by email. Each day for 5 days, you'll receive a new email with that day's exercise, which takes about 10 minutes to complete.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Is this really free?</h3>
                  <p className="text-gray-600">
                    Yes! The entire 5-day challenge is completely free, including the communication workbook and all resources. There's no catch or hidden fees.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">What if I miss a day?</h3>
                  <p className="text-gray-600">
                    No problem! You'll have access to all challenge materials, so you can complete the exercises at your own pace. The emails will still arrive each day, but you can save them and come back when you're ready.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">What happens after the 5 days?</h3>
                  <p className="text-gray-600">
                    After completing the challenge, you'll receive information about our more comprehensive coaching programs, but there's absolutely no obligation to continue. The 5-day challenge is valuable as a standalone program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 
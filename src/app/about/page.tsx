'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              About ApexNova Consulting
            </h1>
            <p className="text-xl text-center text-gray-100 mb-8">
              We help SaaS companies, startups, and entrepreneurs unlock hidden revenue by transforming
              the way they sell, communicate, and retain customers.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">Who We Are</h2>
              <p className="text-xl text-gray-700 mb-8">
                At ApexNova Consulting, we help SaaS companies, startups, and entrepreneurs unlock hidden
                revenue by transforming the way they sell, communicate, and retain customers.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We specialize in two things that drive growth in any business:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Optimizing your sales process to close more deals, faster.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Elevating your communication to pitch, present, and negotiate with confidence.</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-primary-500">Why We Exist</h3>
              <p className="text-lg text-gray-700 mb-6">
                Too many businesses lose revenue every single day because:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Their sales process is messy or inconsistent.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Their teams don't know how to confidently sell or present their value.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">They lack a system to turn conversations into contracts and customers into long-term relationships.</p>
                </li>
              </ul>
              <p className="text-lg text-gray-700">
                That's where we come in. We combine over 10 years of SaaS, sales, customer success, and communication
                expertise to help businesses like yours stop leaving money on the table and start scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary-500 text-center">Who We Serve</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-500">SaaS Companies & Tech Startups</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  Struggling with churn? Low upsells? Sales teams that aren't hitting their numbers?
                  We'll help you fix your sales process, renewals, and communication so you can grow faster.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-500">Entrepreneurs & Coaches</h3>
                </div>
                <p className="text-gray-700 ml-11">
                  Trying to close high-ticket offers? Struggling with sales calls? Unsure how to pitch your services
                  or present your value? We'll give you the tools and confidence to sell with power and clarity.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md font-semibold transition-all transform hover:scale-105"
              >
                Book Free Growth Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary-500 text-center">How We Deliver Results</h2>

            <p className="text-lg text-center text-gray-700 mb-10">
              At ApexNova, we don't believe in cookie-cutter strategies. Every business is unique. That's why we provide:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Tailored sales process audits and rebuilds.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Custom playbooks for upsells, renewals, and new client acquisition.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Live communication coaching to sharpen your sales conversations, pitches, and presentations.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3 text-secondary-500">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg">Ongoing support to make sure you're not just getting quick wins, but sustainable growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Founder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary-500 text-center">Meet The Founder</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Me.png"
                  alt="Mike Nielson, Founder"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-500">Mike Nielson</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Hi, I'm Mike Nielson, founder of ApexNova Consulting.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  After years of managing multi-million-dollar portfolios, driving over $1M in upsell revenue,
                  and training sales teams worldwide, I launched ApexNova to help businesses close the gaps
                  in their sales and communication strategies.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  I know what it feels like to have the potential but struggle to unlock it fully.
                  That's why my focus is on giving SaaS teams, entrepreneurs, and founders the proven
                  frameworks they need to scale fast and sell with confidence.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  When you work with ApexNova, you're getting more than advice—you're getting a partner
                  who's been in the trenches and knows how to win.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready To Grow Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Grow?</h2>
            <p className="text-xl mb-8">
              If you're serious about scaling your revenue, improving your sales process, or leveling up your
              communication, we're ready to help.
            </p>
            <Link
              href="/contact"
              className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md font-semibold transition-all transform hover:scale-105"
            >
              Book Your Free Strategy Call Now
            </Link>
            <p className="mt-4 text-lg">Let's Unlock Your Next Level!</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
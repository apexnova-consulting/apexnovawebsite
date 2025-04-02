'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Services() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Our Services
            </h1>
            <p className="text-xl text-center text-gray-100 mb-8">
              We offer specialized expertise to help you sell better, communicate more effectively, and leverage AI for better business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                How We Can Help You Grow
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                At ApexNova Consulting, we focus on three core areas that drive business growth and success:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Service 1: Sales Performance Optimization */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-6">Sales Performance Optimization</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Transform your sales process to close more deals and increase customer lifetime value through proven
                    frameworks and strategies.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Sales process audit & optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Upsell & renewal strategy development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Sales team training & enablement</span>
                    </li>
                  </ul>
                  <a
                    href="/services#sales-performance"
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Service 2: Communication Coaching */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-6">Communication Coaching</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Elevate how you pitch, present, and negotiate through personalized coaching to help you communicate with clarity and confidence.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Executive presence development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Sales presentation mastery</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Public speaking & pitch coaching</span>
                    </li>
                  </ul>
                  <a
                    href="/services#communication-coaching"
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Service 3: AI Automation Services */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-6">AI Automation Services</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Implement custom AI solutions to streamline your workflows, enhance customer engagement, and drive better business outcomes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Sales & marketing automation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>AI-powered customer engagement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Workflow optimization & efficiency</span>
                    </li>
                  </ul>
                  <a
                    href="/services#ai-automation"
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Performance Optimization Section */}
      <section id="sales-performance" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  Sales Performance Optimization
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  For SaaS teams and entrepreneurs struggling with messy sales cycles, low retention, or inconsistent deal flow.
                  We help you build a systematized, repeatable sales process that drives more revenue.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Sales Process Audit & Rebuild</h3>
                    <p className="text-gray-600">
                      We analyze your current sales approach, identify gaps and opportunities, then build a streamlined
                      process aligned with your business goals and customer journey.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Customer Retention Strategy</h3>
                    <p className="text-gray-600">
                      Develop effective frameworks for renewals, upsells, and cross-sells to maximize customer
                      lifetime value and reduce churn.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Sales Team Enablement</h3>
                    <p className="text-gray-600">
                      Equip your team with the tools, training, and frameworks they need to consistently hit targets
                      and close deals more effectively.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Transform Your Sales Process</h3>
                  <p className="text-lg opacity-90">Build a system that consistently drives revenue growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Coaching Section */}
      <section id="communication-coaching" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Master Your Communication</h3>
                  <p className="text-lg opacity-90">Develop the skills to influence and inspire</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  Communication Coaching
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Whether you're pitching to investors, presenting to clients, or leading your team, effective communication
                  is the key to success. Our coaching helps you develop the skills and confidence to excel in any situation.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Executive Presence</h3>
                    <p className="text-gray-600">
                      Develop the confidence and charisma needed to command attention and inspire others in any setting.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Presentation Skills</h3>
                    <p className="text-gray-600">
                      Master the art of delivering compelling presentations that engage your audience and drive results.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Negotiation Mastery</h3>
                    <p className="text-gray-600">
                      Learn proven techniques for successful negotiations that create value for all parties involved.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section id="ai-automation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  AI Automation Services
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Leverage the power of AI to streamline your operations, enhance customer engagement, and drive better
                  business outcomes. Our solutions are tailored to your specific needs and goals.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Sales Automation</h3>
                    <p className="text-gray-600">
                      Implement AI-powered tools to automate repetitive tasks, qualify leads, and optimize your sales process.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Customer Engagement</h3>
                    <p className="text-gray-600">
                      Use AI to deliver personalized experiences, predict customer needs, and improve satisfaction.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Workflow Optimization</h3>
                    <p className="text-gray-600">
                      Streamline your operations with AI-driven automation that reduces manual work and increases efficiency.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Automate Your Success</h3>
                  <p className="text-lg opacity-90">Let AI handle the routine while you focus on growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
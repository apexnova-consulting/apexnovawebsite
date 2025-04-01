'use client';

import Link from 'next/link';
import Image from 'next/image';
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
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src="/images/sales-performance.jpg"
                    alt="Sales Performance Optimization"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">Sales Performance Optimization</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Transform your sales process to close more deals and increase customer lifetime value through proven
                    frameworks and strategies.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Sales process audit & optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Upsell & renewal strategy development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Service 2: Communication Coaching */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src="/images/communication-coaching.jpg"
                    alt="Communication Coaching"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">Communication Coaching</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Elevate how you pitch, present, and negotiate through personalized coaching to help you communicate with clarity and confidence.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Executive presence development</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Sales presentation mastery</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Service 3: AI Automation Services */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src="/images/ai-automation.jpg"
                    alt="AI Automation Services"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent flex items-end">
                    <h3 className="text-2xl font-bold text-white p-6">AI Automation Services</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Implement custom AI solutions to streamline your workflows, enhance customer engagement, and drive better business outcomes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Sales & marketing automation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>AI-powered customer engagement</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/sales-performance-detailed.jpg"
                  alt="Sales Performance Optimization"
                  fill
                  className="object-cover"
                />
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
              <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/communication-coaching-detailed.jpg"
                  alt="Communication Coaching"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  Communication Coaching
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  For teams and individuals who want to present, pitch, and close like pros. Our coaching helps you
                  develop the skills and confidence to communicate effectively in any situation.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Executive Presence Development</h3>
                    <p className="text-gray-600">
                      Build the confidence and authority needed to lead effectively, influence decisions, and create a strong leadership impression.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Pitch & Presentation Mastery</h3>
                    <p className="text-gray-600">
                      Learn how to structure compelling presentations, handle objections, and deliver your message with impact and persuasion.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Individual & Team Communication Training</h3>
                    <p className="text-gray-600">
                      Tailored coaching sessions to help you or your team overcome specific communication challenges and achieve your goals.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Automation Services Section */}
      <section id="ai-automation" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  AI Automation Services
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  For businesses looking to integrate AI-powered solutions to enhance sales, marketing, customer engagement,
                  and workflow automation. We help you implement practical AI that delivers real results.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Sales & Marketing AI Integration</h3>
                    <p className="text-gray-600">
                      Implement AI tools to automate lead qualification, personalize customer outreach, and optimize your sales and marketing efforts.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Customer Experience Automation</h3>
                    <p className="text-gray-600">
                      Create seamless, personalized customer journeys with intelligent chatbots, recommendation engines, and automated follow-up systems.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Business Process Optimization</h3>
                    <p className="text-gray-600">
                      Streamline operations and reduce manual tasks by implementing AI-powered workflow automation and decision support systems.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Get Started
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/ai-automation-detailed.jpg"
                  alt="AI Automation Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SpeechFlow AI Section */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                Introducing SpeechFlow AI
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
                Our AI-powered communication coaching platform that helps you master public speaking,
                presentations, and leadership communication.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/speechflow-screenshot.jpg"
                  alt="SpeechFlow AI Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-600">AI-Powered Speech Coaching</h3>
                <p className="text-lg text-gray-700 mb-6">
                  SpeechFlow AI combines cutting-edge artificial intelligence with proven communication coaching
                  techniques to help you become a confident, effective communicator.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg">Real-time speech feedback and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg">Personalized improvement plans</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg">Confidence-building exercises</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.speechflowai.com/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center justify-center"
                  >
                    View Pricing Options
                  </a>
                  <Link
                    href="/speechflow-ai"
                    className="btn bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 text-lg py-3 px-8 rounded-md inline-flex items-center justify-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Book a free strategy call to see how our services can help you close more deals,
              communicate more effectively, and grow your business.
            </p>
            <Link
              href="/contact"
              className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-4 px-10 rounded-md font-semibold transition-all transform hover:scale-105"
            >
              Book Your Free Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
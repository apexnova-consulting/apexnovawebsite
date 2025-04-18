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
              Communication Coaching Services
            </h1>
            <p className="text-xl text-center text-gray-100 mb-8">
              Overcome anxiety, develop confidence, and master the art of impactful communication
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
                Our Coaching Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                We help professionals at all levels transform communication anxiety into confidence through our specialized coaching programs:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Service 1: One-on-One Coaching */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-6">One-on-One Coaching</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Personalized coaching tailored to your specific communication challenges and goals with direct feedback and guidance.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Customized improvement plan</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Video analysis and feedback</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>SpeechFlow AI integration</span>
                    </li>
                  </ul>
                  <a
                    href="#individual-coaching"
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Service 2: Group Workshops */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-6">Group Workshops</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Interactive team-based communication training to build collective confidence and improve organizational communication.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Team communication dynamics</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Practical group exercises</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Customized for your organization</span>
                    </li>
                  </ul>
                  <a
                    href="#group-workshops"
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Service 3: Digital Programs */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-56 bg-gradient-to-br from-primary-800 to-primary-900 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center px-6">Digital Programs</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Self-paced digital courses and resources designed to help you build communication confidence on your own schedule.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Comprehensive training modules</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Practice exercises and templates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Lifetime access to materials</span>
                    </li>
                  </ul>
                  <a
                    href="#digital-programs"
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

      {/* Individual Coaching Section */}
      <section id="individual-coaching" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  One-on-One Coaching
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  For professionals who struggle with communication anxiety, lack of confidence, or ineffective speaking. Our personalized coaching helps you develop a confident authentic voice that resonates with your audience.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Anxiety Management</h3>
                    <p className="text-gray-600">
                      Learn proven techniques to transform nervousness into positive energy and overcome fear of public speaking, presentations, or difficult conversations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Executive Presence</h3>
                    <p className="text-gray-600">
                      Develop the confidence, poise, and authentic voice needed to command attention and inspire trust in leadership situations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Presentation Mastery</h3>
                    <p className="text-gray-600">
                      Perfect your delivery, storytelling, and slide design to create compelling presentations that engage and persuade your audience.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Schedule a Consultation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="bg-primary-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Program Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">8-Week Transformation</h4>
                      <p className="text-white/80">Our core program includes 8 weekly one-hour sessions with your dedicated coach</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">AI-Enhanced Practice</h4>
                      <p className="text-white/80">SpeechFlow AI access for daily practice with real-time feedback between sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Video Analysis</h4>
                      <p className="text-white/80">Detailed feedback on your recorded presentations or conversations</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-accent-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Pricing</h4>
                      <p className="text-white/80">Starting at $299 per session or $1,999 for the complete 8-week program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Workshops Section */}
      <section id="group-workshops" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-secondary-500 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Workshop Formats</h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Half-Day Intensive</h4>
                      <p className="text-white/80">4-hour focused training session on a specific communication challenge</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Full-Day Workshop</h4>
                      <p className="text-white/80">Comprehensive 8-hour program covering multiple aspects of team communication</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Multi-Session Series</h4>
                      <p className="text-white/80">4-6 week program with weekly 2-hour sessions for progressive skill development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-white mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Pricing</h4>
                      <p className="text-white/80">Starting at $1,999 for half-day workshops; custom pricing for larger teams</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  Group Workshops
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Transform your team's communication effectiveness through interactive workshops that address common challenges and build collective confidence. Ideal for leadership teams, sales departments, or cross-functional groups.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Team Presentation Skills</h3>
                    <p className="text-gray-600">
                      Help your team deliver compelling, confident presentations with a consistent approach that reflects your organization's voice.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Difficult Conversations</h3>
                    <p className="text-gray-600">
                      Equip your team with frameworks and skills to navigate challenging interactions with confidence, clarity and empathy.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Leadership Communication</h3>
                    <p className="text-gray-600">
                      Develop your leadership team's ability to communicate vision, provide feedback, and inspire action through authentic communication.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Request Workshop Information
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Programs Section */}
      <section id="digital-programs" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
                  Digital Programs
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Self-paced digital courses and resources for professionals who want to improve their communication skills on their own schedule. Our comprehensive programs provide the structure and tools you need to build confidence at your own pace.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Communication Confidence Course</h3>
                    <p className="text-gray-600">
                      Our flagship 6-module course covering everything from anxiety management to storytelling and delivery techniques.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Presentation Templates</h3>
                    <p className="text-gray-600">
                      Professional slide templates and presentation frameworks designed to help you create compelling visual support.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-primary-600">Communication Workbooks</h3>
                    <p className="text-gray-600">
                      Downloadable resources with exercises and journaling prompts to build your communication skills over time.
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Browse Digital Products
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="bg-primary-800 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Available Programs</h3>
                <div className="space-y-5">
                  <div className="bg-primary-700 p-4 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">Communication Confidence Masterclass</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">Comprehensive 6-module course</p>
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">$299</span>
                    </div>
                  </div>
                  <div className="bg-primary-700 p-4 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">Presentation Anxiety Toolkit</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">3-module mini-course</p>
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">$99</span>
                    </div>
                  </div>
                  <div className="bg-primary-700 p-4 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">Executive Presence Blueprint</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">4-module course with templates</p>
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">$199</span>
                    </div>
                  </div>
                  <div className="bg-primary-700 p-4 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">Communication Confidence Bundle</h4>
                    <div className="flex justify-between items-center">
                      <p className="text-white/80">All courses and resources</p>
                      <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">$499</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Communication?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take the first step toward overcoming communication anxiety and becoming a confident, impactful communicator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/mini-challenge"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Join Our Free Challenge
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
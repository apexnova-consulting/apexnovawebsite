'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Coaching() {
  // Sample coaching packages
  const coachingPackages = [
    {
      id: 1,
      title: "Executive Presence Coaching",
      description: "One-on-one coaching to develop your executive presence, leadership communication, and authentic voice.",
      price: "Starting at $299/session",
      features: [
        "Personalized coaching plan",
        "Video recording and feedback",
        "Leadership voice development",
        "Presentation skill enhancement",
        "Confidence building exercises",
        "Regular progress assessments"
      ],
      popular: false,
      link: "/contact"
    },
    {
      id: 2,
      title: "AI-Assisted Coaching Program",
      description: "Our most popular program combines one-on-one coaching with SpeechFlow AI technology for accelerated improvement.",
      price: "Starting at $549/month",
      features: [
        "2 coaching sessions per month",
        "Unlimited SpeechFlow AI access",
        "Weekly practice assignments",
        "Personalized improvement plan",
        "Progress tracking dashboard",
        "Priority email support"
      ],
      popular: true,
      link: "/contact"
    },
    {
      id: 3,
      title: "Corporate Communication Training",
      description: "Customized training programs for teams to improve communication effectiveness organization-wide.",
      price: "Custom pricing",
      features: [
        "Tailored to your organization",
        "On-site or virtual options",
        "Group and individual coaching",
        "Communication frameworks",
        "Presentation skills workshops",
        "Leadership communication training"
      ],
      popular: false,
      link: "/contact"
    }
  ];

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Executive Communication Coaching
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Transform your leadership presence and communication skills with our expert coaching programs.
            </p>
            <Link href="#packages" className="btn btn-accent text-lg py-3 px-8 bg-secondary-500 hover:bg-secondary-600 rounded-md transition-all">
              Explore Coaching Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600">
                Our Coaching Approach
              </h2>
              <p className="text-lg text-gray-600">
                ApexNova's coaching methodology combines proven communication techniques with cutting-edge AI technology to deliver transformative results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Personalized</h3>
                <p className="text-gray-600">
                  Every coaching program is tailored to your specific needs, goals, and communication style.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
                <p className="text-gray-600">
                  Our AI-powered approach provides measurable feedback and tracks your improvement over time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Transformative</h3>
                <p className="text-gray-600">
                  Experience rapid progress with practice-based learning and real-time feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600">
              Coaching Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the coaching package that best fits your communication goals and learning style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coachingPackages.map((pkg) => (
              <div key={pkg.id} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-accent-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-accent-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4 min-h-[4rem]">{pkg.description}</p>
                  <p className="text-primary-600 font-bold text-xl mb-4">{pkg.price}</p>

                  <ul className="space-y-2 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-primary-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pkg.link}
                    className={`block w-full py-2 text-center rounded-md font-medium ${pkg.popular
                        ? 'bg-accent-500 hover:bg-accent-600 text-white'
                        : 'bg-primary-100 hover:bg-primary-200 text-primary-700'
                      }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="btn bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Coach Profiles */}
      <section id="coaches" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600">
              Meet Our Coaches
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert coaching to help you develop your communication skills and leadership presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Coach 1: Mike Nielson */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 relative">
                <Image
                  src="/images/Me.png"
                  alt="Mike Nielson"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-primary-600">Mike Nielson</h3>
                <p className="text-secondary-600 font-medium mb-3">Founder & Executive Communication Coach</p>
                <p className="text-gray-600 mb-4">
                  With over 10 years of experience in SaaS, sales, and client success, Mike has helped executives and teams worldwide develop powerful communication skills and optimize their sales processes.
                </p>
                <div className="flex space-x-3">
                  <a href="https://www.linkedin.com/company/apexnova-consulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/apexnova_consulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* AI Coach: SpeechFlow AI */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-80 relative">
                <Image
                  src="/images/speechflow-screenshot.jpg"
                  alt="SpeechFlow AI"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">SpeechFlow AI</h3>
                    <p className="text-gray-200">AI-Powered Speech Coaching</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-primary-600">SpeechFlow AI</h3>
                <p className="text-secondary-600 font-medium mb-3">AI Speech Coach</p>
                <p className="text-gray-600 mb-4">
                  Our cutting-edge AI platform provides real-time feedback on your speech, presentations, and communication style. Get personalized coaching 24/7 to accelerate your improvement.
                </p>
                <a
                  href="https://www.speechflowai.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Explore SpeechFlow AI
                  <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Section */}
      <section id="corporate" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-600">
                  Corporate Communication Training
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Elevate your team's communication skills with customized training programs designed for your organization's specific needs.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Leadership communication workshops</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Sales team presentation training</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Executive presence development</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="h-6 w-6 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">Group and individual coaching options</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8 rounded-md inline-flex items-center"
                >
                  Request Corporate Training
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/corporate-training.jpg"
                  alt="Corporate Communication Training"
                  fill
                  className="object-cover"
                />
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
              Ready to Elevate Your Communication?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Book a free strategy call to discuss your goals and find the right coaching program for you.
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
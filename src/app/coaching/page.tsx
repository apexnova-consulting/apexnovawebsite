'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Coaching() {
  // Communication coaching packages
  const coachingPackages = [
    {
      id: 1,
      title: "Foundation Program",
      description: "Our core 8-week program for professionals who want to overcome communication anxiety and develop confidence.",
      price: "$1,999 ($299/session)",
      features: [
        "Weekly 1-hour coaching sessions",
        "Personalized improvement plan",
        "Video recording and feedback",
        "SpeechFlow AI basic access",
        "Communication workbook",
        "Email support between sessions"
      ],
      popular: false,
      link: "/contact"
    },
    {
      id: 2,
      title: "Accelerator Program",
      description: "Our most comprehensive program for rapid transformation of your communication skills and confidence.",
      price: "$2,999 for 12 weeks",
      features: [
        "12 weekly coaching sessions",
        "Unlimited SpeechFlow AI access",
        "Presentation preparation support",
        "Video analysis & detailed feedback",
        "Personalized practice assignments",
        "Priority support & accountability"
      ],
      popular: true,
      link: "/contact"
    },
    {
      id: 3,
      title: "Team Communication Training",
      description: "Transform your team's communication effectiveness with our customized group program.",
      price: "Starting at $4,999",
      features: [
        "Assessment of team dynamics",
        "Custom workshop development",
        "Interactive group sessions",
        "Individual coaching add-ons",
        "Communication frameworks",
        "Implementation support"
      ],
      popular: false,
      link: "/contact"
    }
  ];

  // Client results
  const clientResults = [
    {
      name: "Sarah J.",
      role: "Marketing Director",
      result: "Overcame severe presentation anxiety to deliver a keynote speech at an industry conference with confidence.",
      image: "/images/testimonial1.jpg"
    },
    {
      name: "Michael T.",
      role: "Senior Software Engineer",
      result: "Transformed from avoiding speaking up in meetings to confidently leading technical discussions with leadership.",
      image: "/images/testimonial2.jpg"
    },
    {
      name: "Priya K.",
      role: "Startup Founder",
      result: "Improved investor pitch delivery, resulting in successfully securing $1.2M in funding for her startup.",
      image: "/images/testimonial3.jpg"
    },
    {
      name: "David L.",
      role: "Sales Executive",
      result: "Developed authentic communication style that increased client conversion rate by 40% over three months.",
      image: "/images/testimonial4.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Communication Coaching
              </h1>
              <p className="text-xl mb-8">
                Transform anxiety into confidence and unlock your authentic speaking voice
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#programs"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Programs
                </Link>
                <Link
                  href="/mini-challenge"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Join Free 5-Day Challenge
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Approach Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Coaching Approach</h2>

              <div className="bg-white p-8 rounded-xl shadow-md mb-12">
                <p className="text-gray-700 text-lg mb-6">
                  At ApexNova, we understand that communication anxiety is one of the biggest barriers to professional success. Our coaching methodology combines proven psychological techniques, personalized feedback, and technological innovation to help you:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4">
                      <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">Overcome Communication Anxiety</h3>
                      <p className="text-gray-600">Learn techniques to transform nervousness into positive energy and presence.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4">
                      <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">Develop Authentic Presence</h3>
                      <p className="text-gray-600">Find your unique voice and communicate in a way that feels natural and confident.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4">
                      <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">Master Impactful Delivery</h3>
                      <p className="text-gray-600">Learn the techniques of powerful speakers: pacing, pausing, vocal variety, and body language.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-100 p-2 rounded-full mr-4">
                      <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-700 mb-1">Structure Compelling Content</h3>
                      <p className="text-gray-600">Craft messages that resonate, persuade, and inspire action from your audience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Process Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Coaching Process</h2>

              <div className="space-y-6 relative">
                <div className="hidden md:block absolute left-[19px] top-[40px] bottom-[80px] w-1 bg-primary-200"></div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex flex-col items-center mr-6">
                    <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">1</div>
                    <div className="hidden md:block h-full w-0.5 bg-gray-300"></div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-grow mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Assessment & Goal Setting</h3>
                    <p className="text-gray-600">We begin with a thorough assessment of your current communication strengths and challenges. Together, we'll identify specific goals and create a personalized coaching plan.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex flex-col items-center mr-6">
                    <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">2</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-grow mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Skill Development</h3>
                    <p className="text-gray-600">Through one-on-one coaching sessions, you'll learn and practice techniques to overcome anxiety, develop presence, and improve your delivery. We'll use video recording and SpeechFlow AI to provide targeted feedback.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex flex-col items-center mr-6">
                    <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">3</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-grow mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Guided Practice</h3>
                    <p className="text-gray-600">Between sessions, you'll complete personalized assignments to reinforce your learning. Our SpeechFlow AI platform provides real-time feedback as you practice, accelerating your improvement.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex flex-col items-center mr-6">
                    <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">4</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-grow mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Real-World Application</h3>
                    <p className="text-gray-600">Apply your new skills to actual presentations, meetings, or conversations. We'll prepare you for specific communication challenges you face in your professional life.</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 flex flex-col items-center mr-6">
                    <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">5</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-grow mt-4 md:mt-0">
                    <h3 className="text-xl font-bold text-primary-700 mb-2">Refinement & Integration</h3>
                    <p className="text-gray-600">Continuously refine your communication approach based on real-world experience and feedback. Develop sustainable habits that ensure long-term confidence and effectiveness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Results Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Real Client Outcomes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {clientResults.map((client, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-primary-100 flex items-center justify-center p-4">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-primary-200 rounded-full mx-auto mb-3 overflow-hidden">
                        {/* You can use actual images if you have them */}
                        <div className="w-full h-full flex items-center justify-center text-primary-600 text-2xl font-bold">
                          {client.name.charAt(0)}
                        </div>
                      </div>
                      <h3 className="font-bold">{client.name}</h3>
                      <p className="text-sm text-gray-600">{client.role}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <svg className="h-8 w-8 text-primary-300 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700">{client.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Coaching Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coachingPackages.map((pkg) => (
                <div key={pkg.id} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-secondary-500 transform md:scale-105' : ''}`}>
                  {pkg.popular && (
                    <div className="bg-secondary-500 text-white text-center py-2 font-semibold">
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
                      className={`block w-full py-3 text-center rounded-md font-medium ${pkg.popular
                        ? 'bg-secondary-500 hover:bg-secondary-600 text-white'
                        : 'bg-primary-100 hover:bg-primary-200 text-primary-700'
                        }`}
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">Not sure which program is right for you?</h3>
              <p className="text-gray-600 text-center mb-6">
                Schedule a free 30-minute consultation to discuss your communication goals and challenges.
                We'll recommend the best approach based on your specific needs.
              </p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Book Your Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-700">How quickly will I see results?</h3>
                  <p className="text-gray-600">
                    Most clients notice improvements in their confidence and delivery within the first 2-3 sessions. More significant transformation typically occurs over the full 8-12 week program as new skills become habits. Your rate of improvement depends on your starting point and how consistently you practice between sessions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-700">How do the virtual coaching sessions work?</h3>
                  <p className="text-gray-600">
                    Virtual coaching sessions are conducted via Zoom and are just as effective as in-person coaching. We use screen sharing, video recording, and other tools to provide comprehensive feedback and guidance. All you need is a decent internet connection and a quiet space to work.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-700">What makes your approach different from other coaches?</h3>
                  <p className="text-gray-600">
                    Our unique combination of personalized coaching, technological support through SpeechFlow AI, and focus on anxiety management sets us apart. Many communication coaches focus only on delivery techniques, but we address the psychological barriers that prevent authentic communication while providing practical tools for improvement.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-700">Can you help with specific presentations or speeches?</h3>
                  <p className="text-gray-600">
                    Absolutely. While our programs focus on developing your overall communication abilities, we frequently help clients prepare for specific high-stakes presentations, speeches, or interviews. We can provide feedback on content, structure, delivery, and visual aids to ensure you make maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Communication?</h2>
              <p className="text-xl mb-8">
                Take the first step toward becoming a confident, impactful communicator.
                Schedule a free consultation to discuss your goals and see if our coaching is right for you.
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
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Join Free 5-Day Challenge
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
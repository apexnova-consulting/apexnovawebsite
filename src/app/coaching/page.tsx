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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Executive Coaching
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Transform your leadership potential with personalized executive coaching
            </p>
          </div>
        </section>

        {/* Why Executive Coaching Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Executive Coaching Works</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary-700">Elevated Communication Skills</h3>
                  <p className="text-gray-600">
                    Develop powerful communication techniques that enhance your ability to articulate complex ideas, lead compelling presentations, and engage effectively with stakeholders at all levels.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary-700">Enhanced Leadership Presence</h3>
                  <p className="text-gray-600">
                    Cultivate an authentic executive presence that inspires confidence, commands attention, and establishes you as a trusted authority in your organization and industry.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary-700">Strategic Decision Making</h3>
                  <p className="text-gray-600">
                    Strengthen your ability to evaluate situations objectively, make sound decisions under pressure, and communicate those decisions with clarity and conviction.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3 text-primary-700">Breakthrough Performance</h3>
                  <p className="text-gray-600">
                    Identify and overcome limiting beliefs and behaviors that may be holding you back, transforming potential roadblocks into stepping stones for accelerated professional growth.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 text-center mb-6">
                At ApexNova Consulting, our coaching programs are designed to address the unique challenges faced by today's executives. We combine proven coaching methodologies with innovative tools and technologies to deliver measurable results.
              </p>

              <p className="text-gray-700 text-center">
                Whether you're preparing for a critical presentation, navigating organizational change, or seeking to elevate your overall leadership effectiveness, our tailored coaching programs provide the guidance, feedback, and support you need to excel.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Coaching Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Leadership?</h2>
              <p className="text-gray-600 mb-8">
                Take the first step towards becoming a more effective leader. Contact us to schedule a consultation and learn how executive coaching can help you achieve your goals.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 
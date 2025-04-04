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

        {/* Coach Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/images/Me.png"
                  alt="Mike Nielson"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Meet Your Coach</h2>
                <p className="text-gray-600 mb-6">
                  Hi, I'm Mike Nielson, founder of ApexNova Consulting and your executive coach dedicated to transforming the way you communicate and lead. With years of experience in high-stakes corporate environments, I've worked with executives, business professionals, and aspiring leaders to refine their communication skills, master confidence, and overcome mental barriers that hold them back.
                </p>
                <p className="text-gray-600 mb-6">
                  But my journey didn't start at the top. I struggled with communication anxiety, phone fear, and the mental hurdles that many professionals face. Instead of letting these challenges define me, I turned them into my strength—learning, adapting, and eventually excelling in corporate sales, securing multi-million dollar deals, and earning leadership roles through the power of effective communication.
                </p>
                <p className="text-gray-600 mb-6">
                  Now, I help others do the same. Through ApexNova Consulting, I provide coaching, digital resources, and actionable strategies to help professionals like you enhance your presence, articulate ideas with clarity, and build unshakable confidence—whether in the boardroom, on stage, or in everyday interactions.
                </p>
                <p className="text-gray-600">
                  If you've ever felt that your communication skills are holding you back, I'm here to show you that it doesn't have to be that way. Let's transform the way you speak, lead, and influence—because when you master communication, you master your future.
                </p>
              </div>
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
'use client';

import { FaStar, FaUsers, FaRocket, FaChartLine, FaArrowRight, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

const premiumServices = [
  {
    tier: "Premium",
    name: "Executive Communication Intensive",
    price: "$18,000",
    duration: "90-day transformation program",
    description: "Our flagship program for CTOs and VPs who want to transform their communication impact.",
    features: [
      "Weekly 1:1 coaching sessions",
      "Custom presentation coaching",
      "24/7 support for urgent presentations",
      "Results guarantee: Improved confidence scores or money back"
    ],
    icon: FaStar,
    primary: true,
    image: "/images/services/executive.jpg"
  },
  {
    tier: "Professional",
    name: "Technical Leadership Presence Program",
    price: "$14,000",
    duration: "60-day program",
    description: "Perfect for senior engineers moving into leadership roles.",
    features: [
      "Group coaching (max 8 people)",
      "Mock presentation practice",
      "Executive presence training",
      "Career advancement support"
    ],
    icon: FaUsers,
    primary: false,
    image: "/images/services/leadership.jpg"
  },
  {
    tier: "Accelerated",
    name: "High-Stakes Presentation Mastery",
    price: "$9,500",
    duration: "30-day intensive",
    description: "Focused program for conference speaking and board presentations.",
    features: [
      "Personalized presentation development",
      "Anxiety management techniques",
      "Professional presentation coaching",
      "Rehearsal and feedback sessions"
    ],
    icon: FaRocket,
    primary: false,
    image: "/images/services/presentation.jpg"
  }
];

const professionalServices = [
  {
    name: "Monthly Executive Coaching",
    price: "$4,500/month",
    features: [
      "Ongoing support for technical executives",
      "Monthly strategy sessions",
      "Presentation prep as needed",
      "Email/Slack support"
    ],
    icon: FaChartLine,
    image: "/images/services/coaching.jpg"
  },
  {
    name: "Communication Confidence Audit",
    price: "$2,500",
    features: [
      "2-hour assessment",
      "Personalized development roadmap",
      "Video analysis",
      "30-day action plan"
    ],
    icon: FaStar,
    image: "/images/services/audit.jpg"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
            Premium Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Transform Your Communication Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed for technical leaders who are ready to overcome communication anxiety and advance their careers.
          </p>
        </div>

        {/* Premium Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {premiumServices.map((service) => (
            <div
              key={service.name}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 ${service.primary ? 'ring-2 ring-blue-900' : ''
                }`}
            >
              {service.primary && (
                <div className="absolute top-0 inset-x-0 bg-blue-900 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <div className="text-sm font-medium">{service.tier}</div>
                    <div className="text-2xl font-bold">{service.price}</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{service.duration}</p>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-xl font-medium transition-all duration-200 ${service.primary
                      ? 'bg-blue-900 text-white hover:bg-blue-800'
                      : 'bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50'
                    }`}
                >
                  Schedule Your Consultation
                  <FaArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Services */}
        <div className="grid md:grid-cols-2 gap-8">
          {professionalServices.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <div className="text-2xl font-bold">{service.price}</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.name}
                </h3>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="w-5 h-5 text-blue-600 mt-0.5 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block text-center py-3 px-6 rounded-xl font-medium bg-white text-blue-900 border-2 border-blue-900 hover:bg-blue-50 transition-all duration-200"
                >
                  Learn More
                  <FaArrowRight className="inline-block ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-blue-900 rounded-2xl overflow-hidden">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <div className="relative z-10">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Not Sure Which Program Is Right for You?
                  </h2>
                  <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    Schedule a free strategy call to discuss your goals and get personalized recommendations.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Schedule Your Strategy Call
                    <FaArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50" />
              <div className="absolute inset-0">
                <Image
                  src="/images/pattern.svg"
                  alt=""
                  fill
                  className="object-cover opacity-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
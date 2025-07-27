'use client';

import Image from 'next/image';
import { FaChartLine, FaArrowRight, FaStar, FaTrophy, FaChartBar } from 'react-icons/fa';

const metrics = [
  {
    value: '87%',
    label: 'Report significant confidence improvement',
    icon: FaChartLine
  },
  {
    value: '73%',
    label: 'Receive promotions within 12 months',
    icon: FaChartBar
  },
  {
    value: '$47k',
    label: 'Average salary increase',
    icon: FaTrophy
  }
];

const testimonials = [
  {
    quote: "The program helped me transform from a nervous presenter to someone the CEO specifically requests for investor meetings.",
    author: "Michael R.",
    role: "Technical Director → VP of Engineering",
    image: "/images/testimonials/executive-1.jpg"
  },
  {
    quote: "I went from avoiding speaking opportunities to confidently leading our global team meetings. The ROI has been incredible.",
    author: "Sarah K.",
    role: "Senior Product Manager → Director of Product",
    image: "/images/testimonials/executive-2.jpg"
  },
  {
    quote: "The frameworks for handling anxiety and communicating technical concepts have been game-changing for my career.",
    author: "David L.",
    role: "Engineering Manager → CTO",
    image: "/images/testimonials/executive-3.jpg"
  }
];

const caseStudies = [
  {
    title: "From Anxiety to Authority",
    description: "How a technical leader overcame presentation anxiety to secure a $2M investment",
    metrics: ["450% increase in speaking confidence", "Promoted to CTO", "$85k salary increase"],
    image: "/images/case-studies/case-1.jpg"
  },
  {
    title: "Technical to Executive Communication",
    description: "Transforming complex technical updates into compelling board presentations",
    metrics: ["Board presentation effectiveness up 200%", "Secured executive buy-in for key initiatives", "Led company-wide transformation"],
    image: "/images/case-studies/case-2.jpg"
  },
  {
    title: "Leading Through Communication",
    description: "Building a high-performing engineering team through improved leadership communication",
    metrics: ["Team satisfaction up 85%", "Retention increased by 60%", "Promoted to VP of Engineering"],
    image: "/images/case-studies/case-3.jpg"
  }
];

export default function Results() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-900/10" />
        <div className="absolute inset-0">
          <Image
            src="/images/pattern.svg"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Results, Real Impact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped technical leaders transform their communication anxiety into career-defining strengths.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-blue-600" />
                  <span className="text-3xl font-bold text-blue-900">{metric.value}</span>
                </div>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Featured Case Studies */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-48">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description}
                    </p>
                    <ul className="space-y-2">
                      {study.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <FaStar className="w-4 h-4 text-blue-600 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Client Transformations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-900 rounded-2xl overflow-hidden">
            <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Communication Impact?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                  Join our community of successful technical leaders who've overcome communication anxiety and advanced their careers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Schedule Your Strategy Call
                    <FaArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/assessment"
                    className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Take Free Assessment
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
      </section>
    </main>
  );
} 
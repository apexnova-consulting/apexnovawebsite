'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa';

const values = [
  {
    icon: FaRocket,
    title: 'Innovation',
    description: 'Pushing boundaries and embracing new technologies to deliver cutting-edge solutions.'
  },
  {
    icon: FaLightbulb,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality in everything we do.'
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description: 'Building strong partnerships and fostering a culture of teamwork.'
  },
  {
    icon: FaChartLine,
    title: 'Growth',
    description: 'Continuously learning and evolving to better serve our clients.'
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-primary-900/10" />
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
              About ApexNova
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering professionals to reach their full potential through innovative learning solutions and expert guidance.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At ApexNova, we're dedicated to transforming how professionals learn and grow. We combine cutting-edge technology with proven methodologies to create an engaging, effective learning experience.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Our platform provides the tools, resources, and support needed to excel in today's fast-paced business environment.
                </p>
                <Link
                  href="/learning-library"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-primary-700 transition-all duration-200 transform hover:scale-105"
                >
                  Explore Our Resources
                  <FaArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/about/mission.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-primary-600 mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/50" />
              <div className="absolute inset-0">
                <Image
                  src="/images/pattern.svg"
                  alt=""
                  fill
                  className="object-cover opacity-10"
                />
              </div>
              <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  Join thousands of professionals who have already enhanced their skills with ApexNova.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/learning-library"
                    className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-accent-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Explore Resources
                    <FaArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 transition-all duration-200 transform hover:scale-105 border border-white/20"
                  >
                    Contact Us
                    <FaArrowRight className="w-5 h-5" />
                  </Link>
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
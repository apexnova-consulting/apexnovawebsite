'use client';

import Image from 'next/image';
import { FaRocket, FaLightbulb, FaUsers, FaChartLine, FaArrowRight } from 'react-icons/fa';

const values = [
  {
    icon: FaRocket,
    title: 'Innovation',
    description: 'Pioneering neuroscience-based techniques that transform technical leaders into confident communicators.'
  },
  {
    icon: FaLightbulb,
    title: 'Excellence',
    description: 'Delivering proven frameworks that consistently produce measurable results and career advancement.'
  },
  {
    icon: FaUsers,
    title: 'Transformation',
    description: 'Creating lasting change by addressing both the technical and emotional aspects of communication.'
  },
  {
    icon: FaChartLine,
    title: 'Results',
    description: '87% confidence improvement, 73% promotion rate, and $47k average salary increase.'
  }
];

export default function About() {
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
              About ApexNova
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help technical leaders overcome communication anxiety and transform it into their greatest professional asset.
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
                  At ApexNova, we understand the unique challenges technical leaders face. Our mission is to transform communication anxiety from a career obstacle into a powerful catalyst for professional growth.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Through our neuroscience-based approach, we've helped hundreds of technical professionals overcome speaking anxiety, master high-stakes presentations, and advance into senior leadership roles. Our proven frameworks combine technical precision with emotional intelligence, ensuring you can communicate complex ideas with confidence and impact.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
                >
                  Schedule Your Consultation
                  <FaArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/mission/leadership.jpg"
                  alt="Technical Leadership Transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaChartLine className="w-6 h-6 text-blue-900" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          "The program's focus on both technical and emotional aspects of communication was exactly what I needed to break through."
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          Sarah K., Engineering Director → CTO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <div className="text-blue-900 mb-4">
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
          <div className="bg-blue-900 rounded-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50" />
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
                  Ready to Transform Your Communication Impact?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  Join hundreds of technical leaders who have overcome communication anxiety and advanced their careers with ApexNova.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
                  >
                    Schedule Your Consultation
                    <FaArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Explore Our Programs
                    <FaArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
'use client';

import React from 'react';
import { FaLightbulb, FaChartLine, FaUsers } from 'react-icons/fa';

export default function AboutPage() {
  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8 text-teal-500" />,
      title: "Innovation-Driven",
      description: "We stay ahead of AI trends to deliver cutting-edge solutions that drive real business outcomes."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-teal-500" />,
      title: "Results-Focused",
      description: "Every engagement is measured by concrete metrics and ROI improvements."
    },
    {
      icon: <FaUsers className="w-8 h-8 text-teal-500" />,
      title: "People-First",
      description: "Technology serves people, not the other way around. We prioritize human-centric solutions."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            We Help Humans Thrive in a Tech-Driven World
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ApexNova Consulting bridges the gap between powerful human communication and today's fast-moving digital landscape.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why We Were Founded</h2>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto space-y-6">
              <p>
                ApexNova Consulting was born out of frustration with how companies adopt technology. We watched brilliant teams fail to get ROI from powerful tools because they lacked the systems, structure, and training to make those tools stick.
              </p>
              <p>
                AI is the greatest transformation opportunity of our time — but only if your people can use it confidently and consistently. That's why we exist: to help companies turn digital chaos into competitive clarity through enablement, not hype.
              </p>
              <p className="font-semibold text-gray-800">
                Our mission is simple: Turn your investment into action. Turn your tools into transformation.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep expertise in communication psychology, AI implementation, and change management to deliver lasting transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Communication Mastery</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Executive presence development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Anxiety reduction techniques
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  High-stakes presentation coaching
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">AI Implementation</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Workflow optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  Team enablement systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                  ROI measurement frameworks
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
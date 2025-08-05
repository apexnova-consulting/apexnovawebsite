'use client';

import React from 'react';
import Link from 'next/link';
import { FaUserTie, FaBuilding, FaChalkboardTeacher, FaRobot, FaTools, FaChartLine } from 'react-icons/fa';

const DualServices = () => {
  const services = {
    professionals: [
      {
        icon: <FaUserTie className="w-8 h-8 text-blue-500" />,
        title: "1:1 Coaching",
        description: "Personalized communication coaching to build clarity and confidence."
      },
      {
        icon: <FaChalkboardTeacher className="w-8 h-8 text-blue-500" />,
        title: "Digital Courses",
        description: "Self-paced programs to master professional communication."
      },
      {
        icon: <FaTools className="w-8 h-8 text-blue-500" />,
        title: "Communication Tools",
        description: "Templates, scripts, and frameworks for immediate impact."
      }
    ],
    companies: [
      {
        icon: <FaRobot className="w-8 h-8 text-blue-500" />,
        title: "AI Adoption-as-a-Service™",
        description: "Complete enablement solution for enterprise AI tools."
      },
      {
        icon: <FaBuilding className="w-8 h-8 text-blue-500" />,
        title: "Team Enablement",
        description: "Custom blueprints and training for your organization."
      },
      {
        icon: <FaChartLine className="w-8 h-8 text-blue-500" />,
        title: "SOPs & Systems",
        description: "Documented processes and prompt libraries for scale."
      }
    ]
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          What We Do
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Professionals */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">For Professionals</h3>
              <p className="text-gray-600">
                Build confidence, clarity, and executive presence through proven frameworks and personalized coaching.
              </p>
            </div>

            <div className="space-y-8">
              {services.professionals.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/professionals"
                className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* For Companies */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">For Companies</h3>
              <p className="text-gray-600">
                Transform how your teams adopt and leverage AI tools through systematic enablement.
              </p>
            </div>

            <div className="space-y-8">
              {services.companies.map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/companies"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualServices;
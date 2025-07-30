import React from 'react';
import Link from 'next/link';

const ServicesGrid = () => {
  const services = [
    {
      title: "Fractional AI Enablement Coach",
      price: "$3,000/month",
      description: "Ongoing AI adoption support, async documentation, and custom enablement plans.",
      link: "/services/coach"
    },
    {
      title: "Executive Enablement Workshops",
      price: "$7,500 per half-day",
      description: "For departments like RevOps, Sales, HR, and CS to align and activate team usage.",
      link: "/workshop"
    },
    {
      title: "AI Enablement Leader Cohort Course",
      price: "$997 per seat",
      description: "4-week program for internal champions to master enablement systems and lead adoption.",
      link: "/cohort-course"
    },
    {
      title: "AI-Ready Teams™ Toolkit",
      price: "$97",
      description: "Plug-and-play workflows, prompt libraries, onboarding guides, SOPs. High-value entry funnel.",
      link: "/toolkit-download"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          Additional Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">{service.price}</p>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
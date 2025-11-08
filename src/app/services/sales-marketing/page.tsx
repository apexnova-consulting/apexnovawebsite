'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaUsers, FaBullhorn, FaCog, FaRocket, FaUserTie } from 'react-icons/fa';

export default function SalesMarketingPage() {
  const services = [
    {
      icon: <FaUserTie className="w-12 h-12" />,
      title: "Fractional CMO Services",
      description: "Senior marketing leadership without the full-time cost",
      features: [
        "Marketing strategy development",
        "Campaign planning and execution",
        "Team management and mentorship",
        "Budget optimization",
        "Performance analytics and reporting"
      ],
      pricing: "Starting at $5,000/month"
    },
    {
      icon: <FaCog className="w-12 h-12" />,
      title: "Sales Process Optimization",
      description: "Streamline your sales operations for maximum efficiency",
      features: [
        "Sales funnel analysis and optimization",
        "CRM setup and automation",
        "Lead qualification frameworks",
        "Sales enablement materials",
        "Performance tracking dashboards"
      ],
      pricing: "Custom pricing based on scope"
    },
    {
      icon: <FaBullhorn className="w-12 h-12" />,
      title: "Go-to-Market Strategy",
      description: "Launch new products and enter new markets with confidence",
      features: [
        "Market research and competitive analysis",
        "Positioning and messaging development",
        "Channel strategy and partner selection",
        "Launch planning and execution",
        "Post-launch optimization"
      ],
      pricing: "Project-based: $15,000 - $50,000"
    },
    {
      icon: <FaRocket className="w-12 h-12" />,
      title: "Revenue Growth Acceleration",
      description: "90-day sprints focused on measurable revenue impact",
      features: [
        "Revenue opportunity assessment",
        "Quick-win implementation",
        "Sales and marketing alignment",
        "Conversion rate optimization",
        "Scaling playbook development"
      ],
      pricing: "$25,000 per 90-day sprint"
    }
  ];

  const outcomes = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Increased Revenue",
      description: "Drive measurable growth through optimized sales and marketing processes"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Better Alignment",
      description: "Get your sales and marketing teams working toward the same goals"
    },
    {
      icon: <FaCog className="w-8 h-8" />,
      title: "Operational Efficiency",
      description: "Eliminate bottlenecks and automate repetitive tasks"
    }
  ];

  const testimonials = [
    {
      quote: "ApexNova helped us restructure our entire sales process. We went from chaos to a well-oiled machine in just 60 days. Revenue is up 40%.",
      author: "David Thompson",
      role: "CEO, B2B SaaS Company"
    },
    {
      quote: "The fractional CMO service was exactly what we needed. Senior-level strategy without the full-time salary. Best decision we made this year.",
      author: "Lisa Martinez",
      role: "Founder, E-commerce Startup"
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary-dark to-primary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Sales & Marketing Transformation
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Proven strategies to accelerate revenue growth, optimize your sales funnel, and align your teams for maximum impact.
          </p>
          <Link
            href="/contact?service=sales-marketing"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
          >
            Schedule a Consultation
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              Our Sales & Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic expertise to help your business scale revenue efficiently
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center text-secondary">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-primary font-bold text-center">{service.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              What You'll Achieve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real outcomes that impact your bottom line
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {outcomes.map((outcome, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white">
                    {outcome.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{outcome.title}</h3>
                <p className="text-gray-600">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-secondary">
              Client Success Stories
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <div className="font-bold text-secondary">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic process for sustainable growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assess", description: "Deep-dive into your current state, challenges, and opportunities" },
              { step: "2", title: "Strategize", description: "Develop a custom roadmap aligned with your business goals" },
              { step: "3", title: "Implement", description: "Execute with precision, measuring results at every step" },
              { step: "4", title: "Optimize", description: "Continuously refine based on data and performance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss how we can help you achieve your revenue goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact?service=sales-marketing"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg group text-lg"
            >
              Schedule a Consultation
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


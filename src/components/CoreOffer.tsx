import React from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

const CoreOffer = () => {
  const deliverables = [
    "Tool + Workflow Audit",
    "Enablement Blueprints by Team",
    "AI SOPs + Prompt Libraries",
    "Live Team Training Sessions",
    "Usage Dashboards & Accountability Reviews"
  ];

  const steps = [
    { title: "Audit", description: "Deep-dive into your current tools and workflows" },
    { title: "Build", description: "Create custom enablement blueprints" },
    { title: "Train", description: "Implement team-specific training" },
    { title: "Optimize", description: "Monitor, measure, and improve" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Adoption-as-a-Service™
          </h2>
          <p className="text-2xl font-semibold text-blue-600 mb-4">
            $25,000 | 90-day engagement
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For mid-sized teams with AI tools like ChatGPT Enterprise, Notion AI, Microsoft Copilot, Salesforce Einstein, etc., but no adoption strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">What's Included:</h3>
            <ul className="space-y-4">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6">Our Process:</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Get Your AI Enablement Blueprint
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoreOffer;
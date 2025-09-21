'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

const ServiceTiers = () => {
  const tiers = [
    {
      name: "AI ROI Audit",
      price: "$2.5K–$5K",
      duration: "14 days",
      description: "Quick-win assessment and implementation roadmap.",
      features: [
        "Current state assessment",
        "ROI opportunity mapping",
        "Quick-win identification",
        "14-day action plan",
        "Executive summary",
        "Tool stack review",
        "Priority recommendations",
        "Implementation roadmap"
      ],
      bestFor: "Teams starting their AI journey",
      cta: "Book My Audit",
      href: "/roi-audit",
      highlight: false
    },
    {
      name: "90-Day Sprint",
      price: "$25K",
      duration: "90 days",
      description: "Full implementation and team enablement program.",
      features: [
        "Everything in AI ROI Audit",
        "Custom enablement blueprint",
        "Weekly implementation support",
        "Team training sessions",
        "Process documentation",
        "ROI tracking dashboard",
        "Change management support",
        "90-day success plan"
      ],
      bestFor: "Teams ready for transformation",
      cta: "Start Your Sprint",
      href: "/sprint",
      highlight: true
    },
    {
      name: "Fractional Coach",
      price: "$5K+/mo",
      duration: "Ongoing",
      description: "Dedicated advisory and implementation support.",
      features: [
        "Everything in 90-Day Sprint",
        "Monthly strategy sessions",
        "On-demand consulting",
        "Custom workshops",
        "Progress reviews",
        "Team coaching",
        "Continuous optimization",
        "Priority support"
      ],
      bestFor: "Enterprise-scale adoption",
      cta: "Learn More",
      href: "/coaching",
      highlight: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Choose Your Transformation Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the right solution for your team's AI adoption journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl shadow-xl overflow-hidden ${
                tier.highlight
                  ? 'border-2 border-primary transform lg:-translate-y-4'
                  : 'border border-gray-200'
              }`}
            >
              {tier.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-primary">
                    {tier.price}
                  </span>
                  <span className="ml-2 text-gray-500">
                    • {tier.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{tier.description}</p>

                <div className="mb-8">
                  <div className="font-medium mb-4">What's included:</div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="w-5 h-5 text-primary shrink-0 mt-0.5 mr-3" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-gray-500 mb-6">
                  Best for: {tier.bestFor}
                </div>

                <Link
                  href={tier.href}
                  className={`group flex items-center justify-center w-full py-4 px-6 rounded-lg transition-colors ${
                    tier.highlight
                      ? 'bg-primary hover:bg-primary-dark text-white'
                      : 'bg-secondary hover:bg-secondary-dark text-white'
                  }`}
                >
                  {tier.cta}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-12">
            Which Solution is Right for You?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6">Features</th>
                  <th className="text-center py-4 px-6">AI ROI Audit</th>
                  <th className="text-center py-4 px-6 bg-primary/5">90-Day Sprint</th>
                  <th className="text-center py-4 px-6">Fractional Coach</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Current State Assessment",
                  "ROI Opportunity Mapping",
                  "Implementation Support",
                  "Team Training",
                  "Process Documentation",
                  "Change Management",
                  "Ongoing Support",
                  "Custom Workshops"
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-600">{feature}</td>
                    <td className="text-center py-4 px-6">
                      {index < 2 ? <FaCheck className="w-5 h-5 text-primary mx-auto" /> : "—"}
                    </td>
                    <td className="text-center py-4 px-6 bg-primary/5">
                      {index < 6 ? <FaCheck className="w-5 h-5 text-primary mx-auto" /> : "—"}
                    </td>
                    <td className="text-center py-4 px-6">
                      <FaCheck className="w-5 h-5 text-primary mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTiers;

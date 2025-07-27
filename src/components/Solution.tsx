'use client';

import { FaBrain, FaComments, FaUserTie, FaArrowRight, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

const pillars = [
  {
    icon: FaBrain,
    title: "Anxiety Mastery",
    description: "Transform nervous energy into confident presence using neuroscience-based techniques that work specifically for technical professionals.",
    benefits: [
      "Proven anxiety management techniques",
      "Real-time stress response strategies",
      "Confidence building exercises"
    ]
  },
  {
    icon: FaComments,
    title: "Technical Translation",
    description: "Learn proven frameworks to communicate complex concepts clearly to non-technical executives and stakeholders.",
    benefits: [
      "Executive communication frameworks",
      "Storytelling for technical concepts",
      "Stakeholder engagement strategies"
    ]
  },
  {
    icon: FaUserTie,
    title: "Leadership Communication",
    description: "Build the executive presence needed to lead teams effectively and influence key decisions at the highest levels.",
    benefits: [
      "Executive presence development",
      "Team leadership communication",
      "Strategic influence techniques"
    ]
  }
];

export default function Solution() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
            Our Proven Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            The Executive Presence Framework That Transforms Technical Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive system designed specifically for technical professionals who want to communicate with confidence and authority.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/images/hero/executive-presence.jpg"
              alt="Technical leader presenting with confidence"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <FaUserTie className="w-6 h-6 text-blue-900" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        "The program helped me transform from a nervous presenter to someone the CEO specifically requests for investor meetings."
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Michael R., Technical Director → VP of Engineering
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <pillar.icon className="w-6 h-6 text-blue-900" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2">
                      {pillar.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <FaCheck className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between p-6 bg-blue-900 rounded-xl text-white">
              <div className="space-y-1">
                <div className="text-2xl font-bold">87%</div>
                <div className="text-sm text-blue-100">
                  Report significant confidence improvement
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">73%</div>
                <div className="text-sm text-blue-100">
                  Receive promotions within 12 months
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">$47k</div>
                <div className="text-sm text-blue-100">
                  Average salary increase
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule Your Strategy Call
            <FaArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
} 
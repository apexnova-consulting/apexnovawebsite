import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "I've tried other coaching programs before. How is ApexNova different?",
    answer: "Unlike traditional coaching that focuses only on techniques, ApexNova uniquely addresses the root emotional barriers holding you back. We blend executive communication strategies with mental health-informed support to create lasting transformation, not just surface-level fixes. Our 92% success rate speaks to the effectiveness of this comprehensive approach."
  },
  {
    question: "I'm not sure if I'm 'anxious enough' to need this. Is this program right for me?",
    answer: "If you're a high-performing professional who knows you could have more impact but find yourself holding back in key moments, this program is for you. Our clients range from mild presentation nerves to severe communication anxiety. The common thread is they're all talented individuals who want to break through the internal barriers holding them back."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most clients report noticeable improvements in their confidence within the first 30 days. By following our proven framework, 85% of our clients advance in their careers within 12 months. However, the pace of transformation varies based on your unique situation and commitment to the process."
  },
  {
    question: "What if I'm too busy right now?",
    answer: "Our program is designed for busy professionals. The initial breakthrough session is just 60 minutes, and our flexible coaching structure adapts to your schedule. Ask yourself: how much time and energy are you currently losing to communication anxiety? Our clients typically find they become more efficient and effective in their roles after our work together."
  },
  {
    question: "Is this a good investment right now?",
    answer: "Consider this: our clients see an average salary increase of $52,000 within 18 months of completing our program. Beyond the financial return, they report greater job satisfaction, improved relationships, and reduced stress. The real question is: what is it costing you to stay stuck where you are?"
  },
  {
    question: "What kind of support will I receive?",
    answer: "You'll receive a personalized transformation plan, 1-on-1 coaching sessions, emergency support for high-stakes situations, and access to our proprietary tools and frameworks. We're committed to your success - that's why we offer a satisfaction guarantee on our premium programs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-900 font-semibold text-sm uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about transforming your communication impact.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0 text-blue-900">
                    {openIndex === index ? (
                      <FaChevronUp className="w-5 h-5" />
                    ) : (
                      <FaChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Still have questions? We're here to help you break through to your next level.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
} 
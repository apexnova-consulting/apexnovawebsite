'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaClock } from 'react-icons/fa';

const articles = [
  {
    id: 'hidden-cost-poor-communication',
    title: 'The Hidden Cost of Poor Communication in Teams',
    excerpt: 'Discover how ineffective communication impacts productivity, employee satisfaction, and your bottom line - and what you can do about it.',
    readTime: '6 min read',
    category: 'Team Communication',
    date: 'September 21, 2025',
    slug: '/insights/hidden-cost-poor-communication'
  },
  {
    id: '85-percent-ai-adoption',
    title: 'How to Get 85% AI Tool Adoption in 90 Days',
    excerpt: 'A step-by-step framework for implementing AI tools and achieving high adoption rates through systematic enablement and training.',
    readTime: '8 min read',
    category: 'AI Implementation',
    date: 'September 21, 2025',
    slug: '/insights/85-percent-ai-adoption'
  },
  {
    id: 'measure-ai-roi',
    title: 'Measuring AI ROI: Beyond the Basic Metrics',
    excerpt: 'Learn how to track and measure the true impact of your AI investments across productivity, efficiency, and revenue generation.',
    readTime: '7 min read',
    category: 'ROI Optimization',
    date: 'September 21, 2025',
    slug: '/insights/measure-ai-roi'
  }
];

export default function InsightsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights on AI implementation, team enablement, and communication excellence.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 gap-4 no-scrollbar">
            {['All', 'AI Implementation', 'Team Communication', 'ROI Optimization', 'Case Studies'].map((category, index) => (
              <button
                key={category}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Link href={article.slug} className="block p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center ml-4">
                      <FaClock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-secondary hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Read More
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights on AI implementation, team enablement, and communication excellence delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogPage() {
  // Sample blog posts - in production, these would come from a CMS or API
  const posts: BlogPost[] = [
    {
      id: '1',
      title: 'The ROI-Driven Approach to AI Implementation',
      excerpt: 'Learn how to measure and maximize return on investment from your AI tools and workflows.',
      date: '2025-09-15',
      category: 'AI Strategy',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Overcoming Team Resistance to AI Adoption',
      excerpt: 'Practical strategies to help your team embrace AI tools and overcome implementation challenges.',
      date: '2025-09-10',
      category: 'Change Management',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Building an AI-First Communication Culture',
      excerpt: 'How to create a workplace culture that leverages AI while maintaining human connection.',
      date: '2025-09-05',
      category: 'Leadership',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'AI Strategy', 'Change Management', 'Leadership', 'ROI', 'Case Studies'];

  return (
    <main>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Insights & Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Expert insights on AI implementation, team enablement, and communication excellence.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{post.category}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-3">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-teal-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                Read More
                <FaArrowRight className="ml-2 text-sm" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20 bg-gray-900 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
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
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
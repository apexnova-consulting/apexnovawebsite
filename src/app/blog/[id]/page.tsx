'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // In production, this would fetch from a CMS or API
  const post: BlogPost = {
    id: params.id,
    title: 'The ROI-Driven Approach to AI Implementation',
    content: `
      <p>In today's rapidly evolving business landscape, implementing AI tools is no longer optional—it's imperative. However, the key to successful AI adoption lies not in the tools themselves, but in the strategic approach to implementation and team enablement.</p>

      <h2>Understanding the ROI Framework</h2>
      <p>Before diving into implementation, it's crucial to establish clear metrics for measuring success. This includes:</p>
      <ul>
        <li>Time saved per task</li>
        <li>Error reduction rates</li>
        <li>Employee satisfaction scores</li>
        <li>Customer response times</li>
      </ul>

      <h2>The Implementation Process</h2>
      <p>A successful AI implementation follows these key steps:</p>
      <ol>
        <li>Audit current workflows and identify pain points</li>
        <li>Select appropriate AI tools based on specific needs</li>
        <li>Develop clear implementation timelines</li>
        <li>Create comprehensive training programs</li>
        <li>Monitor adoption rates and adjust as needed</li>
      </ol>

      <h2>Measuring Success</h2>
      <p>Regular monitoring and adjustment of your AI implementation strategy is crucial for maintaining momentum and achieving desired outcomes.</p>
    `,
    date: '2025-09-15',
    category: 'AI Strategy',
    readTime: '5 min read',
    author: {
      name: 'ApexNova Team',
      role: 'AI Implementation Experts'
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <FaArrowLeft className="mr-2" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span>{post.category}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-6">
          {post.title}
        </h1>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">{post.author.name}</div>
            <div className="text-sm text-gray-500">{post.author.role}</div>
          </div>
          <div className="flex gap-4">
            <button className="text-gray-400 hover:text-gray-600">
              <FaTwitter className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <FaLinkedin className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Newsletter Signup */}
      <div className="mt-20 bg-gray-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Want more insights like this?
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest AI implementation strategies and team enablement tips.
        </p>
        <form className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Related Posts */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Overcoming Team Resistance to AI Adoption',
              excerpt: 'Practical strategies to help your team embrace AI tools.',
              category: 'Change Management',
              id: '2'
            },
            {
              title: 'Building an AI-First Communication Culture',
              excerpt: 'Create a workplace culture that leverages AI effectively.',
              category: 'Leadership',
              id: '3'
            }
          ].map((post) => (
            <div key={post.id} className="bg-gray-50 rounded-xl p-6">
              <div className="text-sm text-gray-500 mb-2">{post.category}</div>
              <h3 className="text-xl font-bold mb-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-teal-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
} 
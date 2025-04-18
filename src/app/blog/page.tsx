'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Executive Communication in the AI Era',
    excerpt: 'Explore how artificial intelligence is transforming executive communication and what it means for business leaders.',
    date: 'March 15, 2024',
    category: 'Executive Communication',
    readTime: '5 min read',
    image: '/images/blog/executive-communication.jpg'
  },
  {
    id: 2,
    title: 'Building a High-Performance Team: Strategies for Success',
    excerpt: 'Learn proven strategies for building and maintaining high-performance teams in today\'s dynamic business environment.',
    date: 'March 10, 2024',
    category: 'Leadership',
    readTime: '7 min read',
    image: '/images/blog/team-building.jpg'
  },
  {
    id: 3,
    title: 'The Role of AI in Modern Business Coaching',
    excerpt: 'Discover how AI is revolutionizing business coaching and what it means for professional development.',
    date: 'March 5, 2024',
    category: 'Business Coaching',
    readTime: '6 min read',
    image: '/images/blog/ai-coaching.jpg'
  }
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-2xl">
            Insights and strategies to help you elevate your communication skills and leadership presence.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.id}`} key={post.id} className="block transition-transform hover:scale-105">
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                  <div className="h-48 bg-gray-200">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-blue-600 font-medium">Read More →</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Get the latest insights on communication, leadership, and personal development
            delivered directly to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 
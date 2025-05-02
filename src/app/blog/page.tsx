'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaCalendar, FaUser, FaTag, FaArrowRight, FaSearch } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering the Art of Public Speaking',
    excerpt: 'Learn essential techniques to deliver impactful presentations and engage your audience effectively.',
    image: '/images/blog/public-speaking.jpg',
    date: 'March 15, 2024',
    author: 'Mike Nielson',
    category: 'Communication',
    slug: 'mastering-public-speaking'
  },
  {
    id: '2',
    title: 'Building Confidence in Professional Settings',
    excerpt: 'Discover strategies to overcome anxiety and project confidence in any professional situation.',
    image: '/images/blog/confidence.jpg',
    date: 'March 10, 2024',
    author: 'Mike Nielson',
    category: 'Mindset',
    slug: 'building-confidence'
  },
  {
    id: '3',
    title: 'Effective Leadership Communication',
    excerpt: 'Key principles for leaders to communicate effectively and inspire their teams.',
    image: '/images/blog/leadership.jpg',
    date: 'March 5, 2024',
    author: 'Mike Nielson',
    category: 'Leadership',
    slug: 'leadership-communication'
  }
];

const categories = [
  { id: 'all', name: 'All Posts' },
  { id: 'communication', name: 'Communication' },
  { id: 'leadership', name: 'Leadership' },
  { id: 'mindset', name: 'Mindset' }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-primary-900/10" />
        <div className="absolute inset-0">
          <Image
            src="/images/pattern.svg"
            alt=""
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Insights & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our collection of articles, tips, and strategies to enhance your professional communication and personal growth.
            </p>
          </div>

          {/* Search and Categories */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-12 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full transition-all duration-200 ${selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser className="w-4 h-4" />
                      {post.author}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      <FaTag className="w-4 h-4" />
                      {post.category}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      Read More
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-primary-800/50" />
              <div className="absolute inset-0">
                <Image
                  src="/images/pattern.svg"
                  alt="Background Pattern"
                  fill
                  className="object-cover opacity-10"
                />
              </div>
              <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  Subscribe to our newsletter for the latest insights and resources delivered straight to your inbox.
                </p>
                <form className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-6 py-4 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-accent-500 text-white rounded-xl font-medium hover:bg-accent-600 transition-all duration-200 transform hover:scale-105"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 
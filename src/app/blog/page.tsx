'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Speak Confidently at Work',
    excerpt: 'Learn practical techniques to boost your confidence and communicate effectively in professional settings.',
    image: '/images/blog/confidence.jpg',
    date: '2024-03-15',
    category: 'Communication',
    slug: 'how-to-speak-confidently-at-work'
  },
  {
    id: '2',
    title: 'Digital Tools That Help You Communicate Better',
    excerpt: 'Discover the best digital tools and apps that can enhance your communication skills and productivity.',
    image: '/images/blog/tools.jpg',
    date: '2024-03-10',
    category: 'Tools & Resources',
    slug: 'digital-tools-for-better-communication'
  },
  {
    id: '3',
    title: 'Best Journaling Prompts to Overcome Anxiety',
    excerpt: 'A collection of powerful journaling prompts designed to help you manage anxiety and build confidence.',
    image: '/images/blog/journaling.jpg',
    date: '2024-03-05',
    category: 'Mindset',
    slug: 'journaling-prompts-for-anxiety'
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tools & Strategies Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover practical insights, tips, and resources to enhance your communication skills and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
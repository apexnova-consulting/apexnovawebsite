'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Executive Communication in the AI Era',
    content: `
      <p>In today's rapidly evolving business landscape, artificial intelligence is transforming how executives communicate and lead their organizations. The integration of AI tools in executive communication is not just a trend—it's becoming a necessity for staying competitive.</p>
      
      <h2>The Impact of AI on Executive Communication</h2>
      <p>AI-powered communication tools are revolutionizing how executives:</p>
      <ul>
        <li>Analyze and respond to complex business challenges</li>
        <li>Deliver more effective presentations</li>
        <li>Engage with stakeholders across multiple channels</li>
        <li>Make data-driven decisions</li>
      </ul>

      <h2>Key Benefits for Business Leaders</h2>
      <p>The adoption of AI in executive communication offers several significant advantages:</p>
      <ul>
        <li>Enhanced decision-making through data analysis</li>
        <li>Improved message clarity and consistency</li>
        <li>More efficient communication processes</li>
        <li>Better stakeholder engagement</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As AI continues to evolve, executives who embrace these technologies will gain a competitive edge in their communication strategies. The key is to find the right balance between human expertise and AI capabilities.</p>
    `,
    date: 'March 15, 2024',
    category: 'Executive Communication',
    readTime: '5 min read',
    author: 'ApexNova Team'
  },
  {
    id: 2,
    title: 'Building a High-Performance Team: Strategies for Success',
    content: `
      <p>Creating and maintaining a high-performance team is crucial for organizational success. This article explores proven strategies that leaders can implement to build and sustain effective teams.</p>
      
      <h2>Essential Elements of High-Performance Teams</h2>
      <p>Successful teams share several key characteristics:</p>
      <ul>
        <li>Clear goals and objectives</li>
        <li>Strong communication channels</li>
        <li>Diverse skill sets and perspectives</li>
        <li>Mutual trust and respect</li>
      </ul>

      <h2>Leadership Strategies</h2>
      <p>Effective leaders can foster high performance by:</p>
      <ul>
        <li>Setting clear expectations</li>
        <li>Providing regular feedback</li>
        <li>Encouraging professional development</li>
        <li>Creating a positive work environment</li>
      </ul>
    `,
    date: 'March 10, 2024',
    category: 'Leadership',
    readTime: '7 min read',
    author: 'ApexNova Team'
  },
  {
    id: 3,
    title: 'The Role of AI in Modern Business Coaching',
    content: `
      <p>Artificial Intelligence is revolutionizing the field of business coaching, offering new opportunities for personalized development and growth.</p>
      
      <h2>AI-Powered Coaching Tools</h2>
      <p>Modern coaching platforms leverage AI to provide:</p>
      <ul>
        <li>Personalized learning paths</li>
        <li>Real-time feedback and analysis</li>
        <li>Data-driven insights</li>
        <li>24/7 accessibility</li>
      </ul>

      <h2>Benefits for Coaches and Clients</h2>
      <p>The integration of AI in coaching offers advantages for both coaches and their clients:</p>
      <ul>
        <li>More efficient coaching sessions</li>
        <li>Better tracking of progress</li>
        <li>Enhanced personalization</li>
        <li>Scalable solutions</li>
      </ul>
    `,
    date: 'March 5, 2024',
    category: 'Business Coaching',
    readTime: '6 min read',
    author: 'ApexNova Team'
  }
];

export default function BlogPost() {
  const params = useParams();
  const postId = parseInt(params.id as string);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The requested blog post could not be found.</p>
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Blog Post Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link
                href="/blog"
                className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block"
              >
                ← Back to Blog
              </Link>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{post.category}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                  {post.author.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">{post.author}</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-4">Share this article</h2>
              <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-primary-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-primary-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-primary-600">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
} 
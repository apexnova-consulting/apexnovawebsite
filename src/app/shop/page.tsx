'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaShoppingCart, FaDownload, FaBook, FaTools, FaFilter, FaArrowRight, FaComments } from 'react-icons/fa';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'download' | 'course' | 'tool';
  category: 'communication' | 'leadership' | 'mindset' | 'productivity';
  price: string;
  link: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Communication Prompts Journal',
    description: 'A comprehensive digital journal with prompts and exercises to improve your communication skills.',
    image: '/images/products/journal.jpg',
    type: 'download',
    category: 'communication',
    price: '$19.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '2',
    title: 'Public Speaking Cheat Sheet',
    description: 'Quick reference guide for confident public speaking and presentation skills.',
    image: '/images/products/cheatsheet.jpg',
    type: 'download',
    category: 'communication',
    price: '$9.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '3',
    title: 'Overcoming Communication Anxiety',
    description: 'An in-depth eBook with strategies and techniques to conquer speaking anxiety.',
    image: '/images/products/ebook.jpg',
    type: 'download',
    category: 'mindset',
    price: '$24.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '4',
    title: 'Communication Mastery Workshop',
    description: 'Recorded workshop with practical exercises and real-world applications.',
    image: '/images/products/workshop.jpg',
    type: 'course',
    category: 'leadership',
    price: '$49.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  }
];

const categories = [
  { id: 'all', name: 'All Products', icon: FaFilter },
  { id: 'communication', name: 'Communication', icon: FaComments },
  { id: 'leadership', name: 'Leadership', icon: FaTools },
  { id: 'mindset', name: 'Mindset', icon: FaBook }
];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-primary-900/10" />
        <div className="absolute inset-0">
          <Image
            src="/images/pattern.svg"
            alt="Background Pattern"
            fill
            className="object-cover opacity-5"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Digital Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of premium digital resources designed to help you master communication and personal growth.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200 ${selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {product.type === 'download' ? 'Digital Download' :
                        product.type === 'course' ? 'Online Course' : 'Tool'}
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      {product.price}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-2 w-full justify-center bg-primary-600 text-white px-4 py-3 rounded-xl hover:bg-primary-700 transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    {product.type === 'download' ? 'Download Now' : 'Learn More'}
                    <FaArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Skills?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have already enhanced their communication and leadership abilities with our resources.
            </p>
            <Link
              href="/learning-library"
              className="inline-flex items-center gap-2 bg-accent-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-accent-600 transition-all duration-200 transform hover:scale-105"
            >
              Explore All Resources
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function DigitalProducts() {
  // Sample products data - in a real app, this would come from a CMS or API
  const products = [
    {
      id: 1,
      title: "Executive Communication Playbook",
      description: "Master the art of leadership communication with our comprehensive guide. This e-book provides step-by-step strategies for effective executive presence.",
      price: 29.99,
      category: "E-Book",
      image: "/images/product-1.jpg", // Replace with actual image path
      features: [
        "Communication frameworks for leadership",
        "50+ exercises to enhance your executive presence",
        "Proven strategies from Fortune 500 executives",
        "Instant PDF download"
      ]
    },
    {
      id: 2,
      title: "Public Speaking Anxiety Journal",
      description: "Track your progress and overcome speaking anxiety with guided exercises designed to build confidence systematically.",
      price: 19.99,
      category: "Journal",
      image: "/images/product-2.jpg", // Replace with actual image path
      features: [
        "90-day structured journaling program",
        "Anxiety-reduction techniques",
        "Progress tracking metrics",
        "Reflection prompts and exercises"
      ]
    },
    {
      id: 4,
      title: "Executive Presence Blueprint",
      description: "A comprehensive workbook for developing your executive presence, with assessments and action plans tailored to your leadership style.",
      price: 39.99,
      category: "Workbook",
      image: "/images/product-4.jpg", // Replace with actual image path
      features: [
        "Self-assessment tools",
        "Customizable action plans",
        "Feedback collection templates",
        "Development tracking worksheets"
      ]
    },
    {
      id: 5,
      title: "Communication Confidence Course",
      description: "A step-by-step course to build confidence in various communication scenarios, from one-on-one meetings to large presentations.",
      price: 79.99,
      category: "Course",
      image: "/images/product-5.jpg", // Replace with actual image path
      features: [
        "8 modules of comprehensive training",
        "Practice exercises for each scenario",
        "Role-play guide with scripts",
        "Certificate of completion"
      ]
    },
    {
      id: 6,
      title: "Executive Communication Toolkit",
      description: "A bundle of templates, scripts, and frameworks to handle any communication challenge in leadership roles.",
      price: 49.99,
      category: "Toolkit",
      image: "/images/product-6.jpg", // Replace with actual image path
      features: [
        "25+ email and message templates",
        "Difficult conversation frameworks",
        "Meeting facilitation guides",
        "Presentation structures for various contexts"
      ]
    }
  ];

  // Organize products by category - using filter instead of Set to avoid TypeScript errors
  const categories = products
    .map(product => product.category)
    .filter((category, index, array) => array.indexOf(category) === index);

  // Calculate total value of all products
  const totalProductsValue = products.reduce((total, product) => total + product.price, 0);
  const bundlePrice = 149.99;

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Products & Resources
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Enhance your communication skills with premium resources designed by executive communication experts.
            </p>
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/digital-products-hero.jpg"
                alt="Digital communication resources"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full bg-primary-600 text-white font-medium">
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-200 hover:bg-primary-100 text-gray-800 font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-56 bg-gray-200 relative">
                  {/* Replace with actual image implementation */}
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-100 text-primary-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="absolute top-2 right-2 bg-accent-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {product.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 h-12 overflow-hidden">
                    {product.description.substring(0, 80)}...
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">KEY FEATURES:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-4 w-4 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-bold text-xl">
                      ${product.price}
                    </span>
                    <Link href={`/digital-products/${product.id}`} className="btn btn-outline text-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle Offer */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16">
                <div className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-500 font-medium text-sm mb-4">
                  SPECIAL BUNDLE
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-500">
                  Complete Communication Mastery Bundle
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get all our premium resources at a discounted price. This bundle includes all e-books, courses, and toolkits for a complete communication transformation.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>All 5 digital products included</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Significant savings compared to individual purchases</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Free quarterly updates to all materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secondary-500 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Bonus: 3 coaching session recordings</span>
                  </li>
                </ul>

                <div className="flex items-center mb-8">
                  <span className="text-3xl font-bold text-primary-500">${bundlePrice.toFixed(2)}</span>
                  <span className="ml-3 text-lg text-gray-500 line-through">${totalProductsValue.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => alert('To integrate with Stripe, please connect your account using the Stripe API key.')}
                  className="btn bg-secondary-500 hover:bg-secondary-600 text-white text-lg py-3 px-8"
                >
                  Get The Bundle
                </button>
              </div>

              <div className="bg-primary-50 p-8 md:p-12 lg:p-16 flex items-center justify-center">
                <div>
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h3 className="text-lg font-bold mb-2">What's Included:</h3>
                    <ul className="space-y-2 text-sm">
                      {products.map((product) => (
                        <li key={product.id} className="flex justify-between">
                          <span>{product.title}</span>
                          <span className="text-gray-500">${product.price.toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between font-bold">
                      <span>Total Value:</span>
                      <span>${totalProductsValue.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="bg-secondary-500 text-white rounded-lg p-4 text-center">
                    <p className="font-bold">Save ${(totalProductsValue - bundlePrice).toFixed(2)} ({Math.round((1 - bundlePrice / totalProductsValue) * 100)}% Off)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from professionals who have transformed their communication skills with our resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The Executive Communication Playbook transformed how I approach leadership meetings. The frameworks are practical and easy to implement."
              </p>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-semibold">Robert Martinez</p>
                  <p className="text-gray-500">CEO, TechStart Inc.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "I've tried many public speaking resources, but the Anxiety Journal actually provides a systematic approach that works. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-semibold">Samantha Wong</p>
                  <p className="text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">
                "The Communication Confidence Course was exactly what I needed. The practical exercises helped me become a more effective speaker in just weeks."
              </p>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-semibold">James Wilson</p>
                  <p className="text-gray-500">VP of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get a Free Resource
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Sign up for our newsletter and receive our "10 Techniques to Command a Room" mini-guide for free.
            </p>

            <form className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:ring-2 focus:ring-accent-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="btn bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-md"
                >
                  Get Free Guide
                </button>
              </div>
            </form>

            <p className="text-sm text-primary-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
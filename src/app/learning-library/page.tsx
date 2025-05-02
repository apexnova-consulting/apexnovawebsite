import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  type: 'download' | 'course' | 'tool';
  price?: string;
  link: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Communication Prompts Journal',
    description: 'A comprehensive digital journal with prompts and exercises to improve your communication skills.',
    image: '/images/products/journal.jpg',
    type: 'download',
    price: '$19.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '2',
    title: 'Public Speaking Cheat Sheet',
    description: 'Quick reference guide for confident public speaking and presentation skills.',
    image: '/images/products/cheatsheet.jpg',
    type: 'download',
    price: '$9.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '3',
    title: 'Overcoming Communication Anxiety',
    description: 'An in-depth eBook with strategies and techniques to conquer speaking anxiety.',
    image: '/images/products/ebook.jpg',
    type: 'download',
    price: '$24.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '4',
    title: 'Communication Mastery Workshop',
    description: 'Recorded workshop with practical exercises and real-world applications.',
    image: '/images/products/workshop.jpg',
    type: 'course',
    price: '$49.99',
    link: 'https://beacons.ai/apexnovaconsulting'
  }
];

export default function LearningLibrary() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Learning Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of digital resources designed to help you master communication and personal growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600">
                      {product.type === 'download' ? 'Digital Download' :
                        product.type === 'course' ? 'Online Course' : 'Tool'}
                    </span>
                    {product.price && (
                      <span className="text-lg font-semibold text-gray-900">
                        {product.price}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link
                    href={product.link}
                    className="inline-block w-full text-center bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    {product.type === 'download' ? 'Download Now' : 'Learn More'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
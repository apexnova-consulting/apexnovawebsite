import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  type: 'journal' | 'ebook' | 'course' | 'bundle';
  link: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'Communication Mastery Bundle',
    description: 'Complete package including journal, cheat sheets, and mini-course for comprehensive communication training.',
    image: '/images/shop/bundle.jpg',
    price: '$99.99',
    type: 'bundle',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '2',
    title: 'Professional Growth Journal',
    description: 'Digital journal with prompts and exercises for career development and personal growth.',
    image: '/images/shop/journal.jpg',
    price: '$29.99',
    type: 'journal',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '3',
    title: 'Confidence Building eBook',
    description: 'Comprehensive guide to building confidence in professional settings.',
    image: '/images/shop/ebook.jpg',
    price: '$19.99',
    type: 'ebook',
    link: 'https://beacons.ai/apexnovaconsulting'
  },
  {
    id: '4',
    title: 'Leadership Communication Course',
    description: 'Self-paced course on effective leadership communication and team management.',
    image: '/images/shop/course.jpg',
    price: '$79.99',
    type: 'course',
    link: 'https://beacons.ai/apexnovaconsulting'
  }
];

export default function Shop() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Products & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our collection of digital products designed to help you master communication and personal growth.
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
                      {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
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
                    className="inline-block w-full text-center bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
                  >
                    Purchase Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Looking for More Resources?
            </h2>
            <p className="text-gray-600 mb-6">
              Visit our Beacons page to explore additional digital products and resources.
            </p>
            <Link
              href="https://beacons.ai/apexnovaconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Visit Beacons Store
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
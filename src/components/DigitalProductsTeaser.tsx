'use client';

import Link from 'next/link';

const DigitalProductsTeaser = () => {
  // Sample products data
  const products = [
    {
      id: 1,
      title: "Executive Communication Playbook",
      description: "Master the art of leadership communication with our comprehensive guide.",
      price: 29.99,
      category: "E-Book",
      image: "/images/product-1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      title: "Public Speaking Anxiety Journal",
      description: "Track your progress and overcome speaking anxiety with guided exercises.",
      price: 19.99,
      category: "Journal",
      image: "/images/product-2.jpg", // Replace with actual image path
    },
    {
      id: 3,
      title: "Leadership Voice Masterclass",
      description: "Video course to develop your authentic leadership voice and presence.",
      price: 99.99,
      category: "Course",
      image: "/images/product-3.jpg", // Replace with actual image path
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital Products & Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your communication skills with our premium digital products designed for executives and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-200 relative">
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
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
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

        <div className="mt-12 text-center">
          <Link href="/digital-products" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalProductsTeaser; 
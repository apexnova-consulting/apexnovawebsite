'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Success() {
  const searchParams = useSearchParams();
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      // Here you would typically verify the session with your backend
      // and get the download URL for the purchased product
      // For now, we'll simulate this
      setDownloadUrl('/digital-products/example.pdf');
    }
  }, [searchParams]);

  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-600 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank You for Your Purchase!
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your payment was successful. You can now download your product.
            </p>

            {downloadUrl ? (
              <a
                href={downloadUrl}
                download
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Download Your Product
              </a>
            ) : error ? (
              <p className="text-red-200">{error}</p>
            ) : (
              <div className="animate-pulse">
                <div className="h-12 bg-white/20 rounded-md w-48 mx-auto"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-600">
              What's Next?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Check your email for your receipt and additional information about your purchase.
            </p>
            <Link
              href="/digital-products"
              className="inline-block bg-primary-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse More Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 
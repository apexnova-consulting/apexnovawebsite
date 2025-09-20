'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('Thank you for your submission!');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'payment') {
      setMessage('Thank you for your purchase!');
    } else if (type === 'contact') {
      setMessage('Thank you for contacting us!');
    }
  }, [searchParams]);

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
        <h1 className="text-4xl font-bold mb-4">{message}</h1>
        <p className="text-xl text-gray-600 mb-12">
          We will be in touch with you shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Return to Homepage
          <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </main>
  );
}
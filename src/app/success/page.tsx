'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

function SuccessContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  
  let message = 'Thank you for your submission!';
  if (type === 'payment') {
    message = 'Thank you for your purchase!';
  } else if (type === 'contact') {
    message = 'Thank you for contacting us!';
  }

  return (
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
  );
}

export default function SuccessPage() {
  return (
    <main className="bg-white min-h-screen">
      <Suspense fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl font-bold mb-4">Processing...</h1>
          <p className="text-xl text-gray-600 mb-12">
            Please wait while we complete your request.
          </p>
        </div>
      }>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
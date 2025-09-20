'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface StripeCheckoutProps {
  priceId: string;
  buttonText?: string;
  className?: string;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const StripeCheckout: React.FC<StripeCheckoutProps> = ({ 
  priceId, 
  buttonText = 'Buy Now',
  className = ''
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
        }),
      });

      const { sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (!stripe) throw new Error('Stripe failed to load');

      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) throw error;
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to initiate checkout. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors disabled:opacity-50 ${className}`}
    >
      {isLoading ? 'Processing...' : buttonText}
    </button>
  );
};

export default StripeCheckout;
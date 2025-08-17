import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe only if secret key is available
const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-02-24.acacia'
    })
  : null;

export async function POST(request: Request) {
  try {
    if (!stripe) {
      console.log('Stripe not configured - Would create checkout session');
      // For development, redirect directly to Calendly
      return NextResponse.json({
        redirect: 'https://calendly.com/apexnovaconsulting-info/30min'
      });
    }

    const { successUrl } = await request.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'AI ROI Audit',
              description: '14-day workflow audit and ROI blueprint',
            },
            unit_amount: 250000, // $2,500 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl || 'https://calendly.com/apexnovaconsulting-info/30min',
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'https://apexnovaconsulting.com'}/roi-audit`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { message: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24.acacia'
});

export async function POST(request: Request) {
  try {
    const { priceType } = await request.json();

    // Set price based on type (pilot or standard)
    const amount = priceType === 'pilot' ? 250000 : 500000; // $2,500 or $5,000 in cents
    const description = priceType === 'pilot' ? 'AI ROI Audit (Pilot Offer)' : 'AI ROI Audit';

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
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://calendly.com/apexnovaconsulting-info/30min',
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'https://apexnovaconsulting.com'}/roi-audit`,
      metadata: {
        type: priceType,
        description
      }
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
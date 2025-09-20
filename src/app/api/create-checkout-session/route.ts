import { NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';

export async function POST(request: Request) {
  try {
    const { priceId } = await request.json();
    const result = await createCheckoutSession(priceId);

    if (!result.success) {
      throw new Error('Failed to create checkout session');
    }

    return NextResponse.json({ sessionId: result.sessionId });
  } catch (error) {
    console.error('Checkout session error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function verifyStripeSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return { success: true, session };
  } catch (error) {
    console.error('Stripe session verification error:', error);
    return { success: false, error };
  }
}

export async function createCheckoutSession(priceId: string) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL || 'https://www.apexnovaconsulting.com'}/success?type=payment`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL || 'https://www.apexnovaconsulting.com'}/roi-audit`,
    });

    return { success: true, sessionId: session.id };
  } catch (error) {
    console.error('Stripe checkout session error:', error);
    return { success: false, error };
  }
}

export default stripe;
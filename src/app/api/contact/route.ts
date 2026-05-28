import { NextResponse } from 'next/server';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, business, industry, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const result = await sendContactNotification({
      name: String(name).trim(),
      email: String(email).trim(),
      business: business ? String(business).trim() : undefined,
      industry: industry ? String(industry).trim() : undefined,
      message: String(message).trim(),
    });

    if (!result.success) {
      console.error('Contact form email failed:', result.error);
      return NextResponse.json(
        { error: 'Message could not be sent. Please email info@apexnovaconsulting.com directly.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please email info@apexnovaconsulting.com directly.' },
      { status: 500 }
    );
  }
}

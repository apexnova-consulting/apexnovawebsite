import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { email, name, company } = await request.json();

    if (!email || !name || !company) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email to admin
    const adminEmailResult = await sendEmail({
      to: 'info@apexnovaconsulting.com',
      subject: 'New AI-Ready Teams™ Toolkit Request',
      html: `
        <h2>New Toolkit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
      `,
      isAdminEmail: true
    });

    if (!adminEmailResult.success) {
      throw new Error('Failed to send admin notification');
    }

    // Confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: 'Your AI-Ready Teams™ Toolkit Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a56db;">Thank You for Your Interest!</h1>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for requesting the AI-Ready Teams™ Toolkit. Our team will review your request and send you an invoice shortly.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">What's Next:</h3>
            <ol style="padding-left: 20px;">
              <li>You'll receive an invoice for $97</li>
              <li>Once payment is processed, we'll send your toolkit access</li>
              <li>You'll get immediate access to all templates and frameworks</li>
            </ol>
          </div>
          
          <p>If you have any questions in the meantime, please don't hesitate to reach out.</p>
          
          <p>Best regards,<br>The ApexNova Team</p>
        </div>
      `,
      isAdminEmail: false
    });

    if (!userEmailResult.success) {
      console.warn('Failed to send user confirmation email, but request was processed');
    }

    return NextResponse.json(
      { message: 'Request received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Toolkit signup error:', error);
    return NextResponse.json(
      { message: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
}
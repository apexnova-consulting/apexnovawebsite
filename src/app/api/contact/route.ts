import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Send notification email to admin
    const adminEmailResult = await sendEmail({
      to: 'info@apexnovaconsulting.com',
      subject: 'New Contact Form Submission',
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      isAdminEmail: true
    });

    if (!adminEmailResult.success) {
      throw new Error('Failed to send admin notification');
    }

    // Send confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: 'Thank you for contacting ApexNova',
      html: `
        <h1>Thank You for Reaching Out</h1>
        <p>Dear ${name},</p>
        <p>Thank you for contacting ApexNova Consulting. We have received your message and will get back to you shortly.</p>
        <p>Best regards,<br>The ApexNova Team</p>
      `,
      name,
      company,
      message
    });

    if (!userEmailResult.success) {
      throw new Error('Failed to send user confirmation');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}
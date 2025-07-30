import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, phone, company, role, inquiryType, timeframe, message, source } = data;

    // Email to admin
    const adminEmailResult = await sendEmail({
      to: 'info@apexnovaconsulting.com',
      subject: `New Contact Form Submission - ${inquiryType}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Role:</strong> ${role || 'Not provided'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Timeframe:</strong> ${timeframe || 'Not specified'}</p>
        <p><strong>Source:</strong> ${source || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (!adminEmailResult.success) {
      throw new Error('Failed to send admin notification');
    }

    // Confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: 'Thank you for contacting ApexNova',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a56db;">Thank You for Reaching Out!</h1>
          
          <p>Hi ${fullName},</p>
          
          <p>Thank you for contacting ApexNova. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">While You Wait:</h3>
            <ul style="padding-left: 20px;">
              <li>Download our <a href="https://apexnovaconsulting.com/toolkit-download" style="color: #1a56db;">AI-Ready Teams™ Toolkit</a></li>
              <li>Follow us on <a href="https://linkedin.com/company/apexnova" style="color: #1a56db;">LinkedIn</a> for daily insights</li>
            </ul>
          </div>
          
          <p>Best regards,<br>The ApexNova Team</p>
        </div>
      `,
    });

    if (!userEmailResult.success) {
      throw new Error('Failed to send confirmation email');
    }

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
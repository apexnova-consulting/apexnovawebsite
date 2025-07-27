import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@apexnovaconsulting.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Prepare email content
    let emailContent = `
      New Contact Form Submission\n
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Company: ${data.company}
      Role: ${data.role}
      Inquiry Type: ${data.inquiryType}
      Program Interest: ${data.programInterest}
      Digital Product Interest: ${data.digitalProductInterest || 'None'}
      Timeframe: ${data.timeframe}
      Message: ${data.message}
      How they heard about us: ${data.hearAbout}
    `;

    // Send email
    await transporter.sendMail({
      from: 'info@apexnovaconsulting.com',
      to: 'info@apexnovaconsulting.com',
      subject: `New Contact Form Submission - ${data.inquiryType}`,
      text: emailContent
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 
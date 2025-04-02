import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, formType } = body;

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare email content based on form type
    let subject = '';
    let emailContent = '';

    if (formType === 'miniChallenge') {
      subject = 'New Mini Challenge Signup';
      emailContent = `
        New Mini Challenge Signup:
        
        Name: ${name}
        Email: ${email}
        
        This user has signed up for the free mini challenge.
      `;
    } else {
      subject = 'New Contact Form Submission';
      emailContent = `
        New Contact Form Submission:
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `;
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'mike.nielson@apexnovaconsulting.com',
      subject: subject,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
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
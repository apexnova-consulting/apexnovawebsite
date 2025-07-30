import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, name, company } = await request.json();

    if (!email || !name || !company) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@apexnovaconsulting.com',
      to: 'info@apexnovaconsulting.com',
      subject: 'New AI-Ready Teams™ Toolkit Request',
      html: `
        <h2>New Toolkit Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
      `,
    });

    // Confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@apexnovaconsulting.com',
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
    });

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
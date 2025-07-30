import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, company, message, service } = await request.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send notification email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Contact Form Submission</h2>
          
          <h3>Contact Details:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Company:</strong> ${company || 'Not provided'}</li>
            <li><strong>Service Interest:</strong> ${service || 'Not specified'}</li>
          </ul>
          
          <h3>Message:</h3>
          <p>${message}</p>
        </div>
      `,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting ApexNova',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a56db;">Thank You for Reaching Out!</h1>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting ApexNova. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">While You Wait:</h3>
            <ul style="padding-left: 20px;">
              <li>Download our <a href="${process.env.NEXT_PUBLIC_URL}/toolkit-download" style="color: #1a56db;">AI-Ready Teams™ Toolkit</a></li>
              <li>Check out our <a href="${process.env.NEXT_PUBLIC_URL}/case-studies" style="color: #1a56db;">client success stories</a></li>
              <li>Follow us on <a href="https://linkedin.com/company/apexnova" style="color: #1a56db;">LinkedIn</a> for daily insights</li>
            </ul>
          </div>
          
          <p>Best regards,<br>The ApexNova Team</p>
        </div>
      `,
    });

    // Optional: Save contact to CRM/database here

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
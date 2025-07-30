import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
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

    // Send information email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'AI Enablement Leader Cohort Course Information',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a56db;">Welcome to ApexNova's AI Enablement Leader Course</h1>
          
          <p>Thank you for your interest in our cohort-based training program.</p>
          
          <h2 style="color: #374151;">Next Steps:</h2>
          
          <ol style="margin: 20px 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;">Review the course overview and schedule attached</li>
            <li style="margin-bottom: 10px;">Book a quick call to discuss your goals and confirm fit</li>
            <li style="margin-bottom: 10px;">Complete enrollment and secure your spot</li>
          </ol>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.BOOKING_URL}" 
               style="background-color: #1a56db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Schedule Discussion
            </a>
          </div>
          
          <h3 style="color: #374151;">Course Details:</h3>
          <ul style="margin: 20px 0; padding-left: 20px;">
            <li style="margin-bottom: 10px;">4-week intensive program</li>
            <li style="margin-bottom: 10px;">Live weekly sessions</li>
            <li style="margin-bottom: 10px;">Hands-on projects and templates</li>
            <li style="margin-bottom: 10px;">AI Enablement Leader certification</li>
          </ul>
          
          <p style="margin-top: 30px;">
            Investment: $997 per seat<br>
            Next cohort starts: ${new Date().getMonth() + 2}/1
          </p>
          
          <p style="color: #4b5563; font-style: italic;">
            Note: Spots are limited to 20 participants per cohort to ensure quality interaction and support.
          </p>
          
          <p>Best regards,<br>The ApexNova Team</p>
        </div>
      `,
    });

    // Optional: Save lead to CRM/database here

    return NextResponse.json(
      { message: 'Information sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cohort signup error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
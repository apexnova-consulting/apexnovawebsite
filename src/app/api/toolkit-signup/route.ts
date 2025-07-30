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

    // Send welcome email with toolkit download link
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Your AI-Ready Teams™ Toolkit Download',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a56db;">Welcome to ApexNova!</h1>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for downloading our AI-Ready Teams™ Toolkit. You're taking an important step toward successful AI adoption in your organization.</p>
          
          <p>Click the button below to download your toolkit:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.TOOLKIT_DOWNLOAD_URL}" 
               style="background-color: #1a56db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Download Toolkit
            </a>
          </div>
          
          <p>Inside your toolkit, you'll find:</p>
          <ul>
            <li>AI Tool Selection Framework</li>
            <li>Team Readiness Assessment</li>
            <li>90-Day Adoption Roadmap</li>
            <li>ROI Calculator</li>
            <li>And more!</li>
          </ul>
          
          <p>Need help implementing these resources? Book a free strategy call to discuss your team's AI adoption goals:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.BOOKING_URL}" 
               style="background-color: #374151; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Book Strategy Call
            </a>
          </div>
          
          <p>Best regards,<br>The ApexNova Team</p>
        </div>
      `,
    });

    // Optional: Save lead to CRM/database here

    return NextResponse.json(
      { message: 'Toolkit sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Toolkit signup error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
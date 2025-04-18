import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    // Configure nodemailer (use environment variables in production)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) || false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'info@apexnovaconsulting.com',
      to: 'mike.nielson@apexnovaconsulting.com',
      subject: 'New Mini-Challenge Signup',
      html: `
        <h1>New Communication Challenge Signup</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    // Auto-responder to user
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'info@apexnovaconsulting.com',
      to: email,
      subject: 'Welcome to the 5-Day Communication Confidence Challenge!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #00144F;">Welcome to Day 1 of Your Communication Confidence Challenge!</h1>
          
          <p>Hi ${name},</p>
          
          <p>Congratulations on taking the first step toward overcoming communication anxiety and developing your confident voice!</p>
          
          <h2 style="color: #DEB251;">Your Day 1 Challenge: The Power of Perspective</h2>
          
          <p>Today's 10-minute exercise focuses on reframing how you think about communication situations:</p>
          
          <ol>
            <li><strong>Identify:</strong> Write down a specific communication scenario that causes you anxiety (e.g., speaking up in meetings, giving presentations)</li>
            <li><strong>Reframe:</strong> List three ways this scenario is actually an opportunity rather than a threat</li>
            <li><strong>Visualize:</strong> Spend 3 minutes imagining yourself succeeding in this scenario, focusing on how it feels to communicate confidently</li>
          </ol>
          
          <p>Remember, communication confidence is a skill that can be developed with practice. Watch your inbox tomorrow for Day 2 of your challenge!</p>
          
          <p>If you have any questions, simply reply to this email.</p>
          
          <p>To your success,<br>ApexNova Consulting Team</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
            <p>You're receiving this email because you signed up for the 5-Day Communication Confidence Challenge. If you believe this is an error, please reply to this email to let us know.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error handling mini-challenge signup:', error);
    return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 });
  }
} 
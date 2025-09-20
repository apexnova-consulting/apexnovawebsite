import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Send notification email to admin
    const adminEmailContent = `
      New Assessment Request:
      Name: ${name}
      Email: ${email}
      Company: ${company}
      Message: ${message}
    `;

    await resend.emails.send({
      from: 'info@apexnovaconsulting.com',
      to: 'info@apexnovaconsulting.com',
      subject: 'New Assessment Request',
      text: adminEmailContent,
    });

    // Send confirmation email to user
    const userEmailContent = `
      Dear ${name},

      Thank you for requesting an assessment. We have received your request and will be in touch shortly.

      Best regards,
      The ApexNova Team
    `;

    await resend.emails.send({
      from: 'info@apexnovaconsulting.com',
      to: email,
      subject: 'Assessment Request Received',
      text: userEmailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Assessment request error:', error);
    return NextResponse.json(
      { error: 'Failed to process assessment request' },
      { status: 500 }
    );
  }
}
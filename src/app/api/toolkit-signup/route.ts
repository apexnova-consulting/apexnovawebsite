import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { name, email, company } = await request.json();

    // Send confirmation email to user
    const userEmailResult = await sendEmail({
      to: email,
      subject: 'Your AI Enablement Toolkit',
      html: `
        <h1>Thank You for Downloading Our AI Enablement Toolkit!</h1>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in optimizing your team's AI adoption. Here's your toolkit:</p>
        <ul>
          <li><a href="${process.env.NEXT_PUBLIC_URL}/downloads/ai-readiness-assessment.pdf">AI Readiness Assessment Template</a></li>
          <li><a href="${process.env.NEXT_PUBLIC_URL}/downloads/roi-calculator.xlsx">ROI Calculator Spreadsheet</a></li>
          <li><a href="${process.env.NEXT_PUBLIC_URL}/downloads/implementation-checklist.pdf">Implementation Checklist</a></li>
          <li><a href="${process.env.NEXT_PUBLIC_URL}/downloads/quick-start-guide.pdf">Quick-Start Guide</a></li>
        </ul>
        <p>Want personalized insights? <a href="https://calendly.com/apexnovaconsulting-info/30min">Book your free mini audit</a>.</p>
        <p>Best regards,<br>The ApexNova Team</p>
      `,
      name,
      company
    });

    // Send notification to admin
    const adminEmailResult = await sendEmail({
      to: 'info@apexnovaconsulting.com',
      subject: 'New Toolkit Download',
      html: `
        <h1>New Toolkit Download</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
      `,
      isAdminEmail: true
    });

    if (!userEmailResult.success || !adminEmailResult.success) {
      throw new Error('Failed to send emails');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Toolkit signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process toolkit request' },
      { status: 500 }
    );
  }
}
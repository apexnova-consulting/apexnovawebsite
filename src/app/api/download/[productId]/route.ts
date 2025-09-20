import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  request: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const { email, name } = await request.json();

    // Send email with download link
    await resend.emails.send({
      from: 'info@apexnovaconsulting.com',
      to: email,
      subject: 'Your Download Link',
      html: `
        <h1>Thank you for downloading our resource!</h1>
        <p>Hi ${name},</p>
        <p>Here's your download link for the requested resource.</p>
        <p><a href="${process.env.NEXT_PUBLIC_URL}/downloads/${params.productId}">Click here to download</a></p>
        <p>Best regards,<br>The ApexNova Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Download request error:', error);
    return NextResponse.json(
      { error: 'Failed to process download request' },
      { status: 500 }
    );
  }
}
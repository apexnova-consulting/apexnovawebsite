import nodemailer from 'nodemailer';

// ---------------------------------------------------------------------------
// Generic sendEmail (used by legacy routes like toolkit-signup)
// ---------------------------------------------------------------------------
interface LegacyEmailData {
  to: string;
  subject: string;
  html: string;
  name?: string;
  company?: string;
  message?: string;
  isAdminEmail?: boolean;
}

export async function sendEmail(emailData: LegacyEmailData) {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn('sendEmail: SMTP not configured');
    return { success: false, error: 'SMTP not configured' };
  }
  try {
    await transporter.sendMail({
      from: `"ApexNova Consulting" <${process.env.SMTP_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
    });
    return { success: true };
  } catch (error) {
    console.error('sendEmail error:', error);
    return { success: false, error };
  }
}

// ---------------------------------------------------------------------------

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: { user, pass },
  });
}

interface ContactEmailData {
  name: string;
  email: string;
  business?: string;
  industry?: string;
  message: string;
}

export async function sendContactNotification(data: ContactEmailData) {
  const transporter = createTransporter();

  if (!transporter) {
    console.error('Email: SMTP credentials not configured (SMTP_HOST, SMTP_USER, SMTP_PASS required)');
    return { success: false, error: 'SMTP not configured' };
  }

  const fromAddress = process.env.SMTP_USER!;
  const toAddress = 'info@apexnovaconsulting.com';

  const industryLabel: Record<string, string> = {
    'real-estate': 'Real Estate & Title',
    'medical': 'Medical Practice / Healthcare',
    'legal': 'Law Firm',
    'smb': 'Local Business / Other',
  };

  const industryDisplay = data.industry ? (industryLabel[data.industry] || data.industry) : 'Not specified';

  try {
    // --- Admin notification ---
    await transporter.sendMail({
      from: `"ApexNova Website" <${fromAddress}>`,
      to: toAddress,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `New AI Audit Request — ${data.name}${data.business ? ` (${data.business})` : ''}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0A0F; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #F0F0FF; font-size: 20px; margin: 0;">
              New Contact Form Submission
            </h1>
            <p style="color: #9898B0; font-size: 13px; margin: 6px 0 0;">
              From apexnovaconsulting.com
            </p>
          </div>
          <div style="background: #111118; padding: 32px; border: 1px solid rgba(255,255,255,0.08); border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #9898B0; font-size: 13px; width: 120px; vertical-align: top;">Name</td>
                <td style="padding: 10px 0; color: #F0F0FF; font-size: 14px; font-weight: 600;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #9898B0; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 10px 0;">
                  <a href="mailto:${data.email}" style="color: #4F6EF7; font-size: 14px; text-decoration: none;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #9898B0; font-size: 13px; vertical-align: top;">Business</td>
                <td style="padding: 10px 0; color: #F0F0FF; font-size: 14px;">${data.business || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #9898B0; font-size: 13px; vertical-align: top;">Industry</td>
                <td style="padding: 10px 0; color: #F0F0FF; font-size: 14px;">${industryDisplay}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #9898B0; font-size: 13px; vertical-align: top; border-top: 1px solid rgba(255,255,255,0.06);">Message</td>
                <td style="padding: 10px 0; color: #F0F0FF; font-size: 14px; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.06);">${data.message}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.06);">
              <a href="mailto:${data.email}" 
                style="display: inline-block; background: linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%); 
                       color: white; padding: 12px 24px; border-radius: 8px; 
                       text-decoration: none; font-size: 14px; font-weight: 600;">
                Reply to ${data.name} →
              </a>
            </div>
          </div>
          <div style="background: #0A0A0F; padding: 16px 32px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: #5A5A72; font-size: 11px; margin: 0;">
              ApexNova Consulting · Lambertville, NJ · apexnovaconsulting.com
            </p>
          </div>
        </div>
      `,
    });

    // --- Confirmation to the person who submitted ---
    await transporter.sendMail({
      from: `"Mike @ ApexNova" <${fromAddress}>`,
      to: data.email,
      subject: `Got your message — I'll be in touch soon`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 580px; margin: 0 auto;">
          <div style="background: #0A0A0F; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #F0F0FF; font-size: 20px; margin: 0;">
              Thanks for reaching out, ${data.name.split(' ')[0]}.
            </h1>
          </div>
          <div style="background: #111118; padding: 32px; border: 1px solid rgba(255,255,255,0.08); border-top: none;">
            <p style="color: #9898B0; font-size: 15px; line-height: 1.7; margin: 0 0 16px;">
              I received your message and I'll get back to you within 4 hours during business hours (usually much faster).
            </p>
            <p style="color: #9898B0; font-size: 15px; line-height: 1.7; margin: 0 0 24px;">
              In the meantime, if you want to skip the back-and-forth and just pick a time to talk, you can book directly below.
            </p>
            <a href="https://www.apexnovaconsulting.com/contact" 
              style="display: inline-block; background: linear-gradient(135deg, #4F6EF7 0%, #7C3AED 100%); 
                     color: white; padding: 12px 24px; border-radius: 8px; 
                     text-decoration: none; font-size: 14px; font-weight: 600;">
              Book a Time to Talk →
            </a>
            <p style="color: #5A5A72; font-size: 13px; line-height: 1.6; margin: 24px 0 0;">
              — Mike<br>
              ApexNova Consulting<br>
              (973) 348-5008 · info@apexnovaconsulting.com
            </p>
          </div>
          <div style="background: #0A0A0F; padding: 16px 32px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: #5A5A72; font-size: 11px; margin: 0;">
              ApexNova Consulting · Lambertville, NJ · apexnovaconsulting.com
            </p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}

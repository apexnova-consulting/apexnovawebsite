import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  to: string;
  subject: string;
  html: string;
  name?: string;
  company?: string;
  message?: string;
  isAdminEmail?: boolean;
}

export async function sendEmail(emailData: EmailData) {
  try {
    const { to, subject, html, name, company, message, isAdminEmail } = emailData;

    // Add custom fields to the email subject if they exist
    let finalSubject = subject;
    if (name && company && !isAdminEmail) {
      finalSubject = `${subject} - ${name} from ${company}`;
    }

    // Add custom fields to the email body if they exist
    let finalHtml = html;
    if ((name || company || message) && !isAdminEmail) {
      finalHtml = `
        ${html}
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      `;
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'info@apexnovaconsulting.com',
      to,
      subject: finalSubject,
      html: finalHtml,
      reply_to: 'info@apexnovaconsulting.com'
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
}
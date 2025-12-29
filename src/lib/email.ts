import { Resend } from 'resend';

// Initialize Resend only if API key exists, otherwise use null
const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

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
    // Check if Resend is configured
    if (!resend) {
      console.warn('Resend API key not configured, email not sent');
      return { 
        success: false, 
        error: 'Email service not configured. Please set RESEND_API_KEY environment variable.' 
      };
    }

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
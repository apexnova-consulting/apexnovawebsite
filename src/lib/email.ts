import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  to,
  subject,
  html,
  isAdminEmail = false,
}: {
  to: string;
  subject: string;
  html: string;
  isAdminEmail?: boolean;
}) => {
  try {
    // During testing/development, redirect all non-admin emails to the admin email
    const finalRecipient = isAdminEmail ? 'info@apexnovaconsulting.com' : 'info@apexnovaconsulting.com';

    // Add a prefix to the subject if it's a redirected user email
    const finalSubject = !isAdminEmail ? `[User Copy] ${subject}` : subject;

    // Add a note at the top of redirected emails
    const finalHtml = !isAdminEmail
      ? `<div style="background: #f0f0f0; padding: 10px; margin-bottom: 20px;">
           <strong>Note:</strong> This email was intended for ${to}. 
           It's being sent to the admin email during development.
         </div>${html}`
      : html;

    if (!process.env.RESEND_API_KEY) {
      // Log email for development if Resend is not configured
      console.log('Resend not configured - Would send:', {
        to: finalRecipient,
        subject: finalSubject,
        html: finalHtml
      });
      return { success: true, data: { id: 'development' } };
    }

    const data = await resend.emails.send({
      from: 'ApexNova <noreply@apexnovaconsulting.com>',
      to: finalRecipient,
      subject: finalSubject,
      html: finalHtml,
      replyTo: 'info@apexnovaconsulting.com'
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};
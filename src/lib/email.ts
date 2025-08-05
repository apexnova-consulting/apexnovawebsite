import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// During development/testing, all emails will be sent to the admin email
const ADMIN_EMAIL = 'info@apexnovaconsulting.com';

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
    const finalRecipient = isAdminEmail ? ADMIN_EMAIL : ADMIN_EMAIL;
    
    // Add a prefix to the subject if it's a redirected user email
    const finalSubject = !isAdminEmail ? `[User Copy] ${subject}` : subject;

    // Add a note at the top of redirected emails
    const finalHtml = !isAdminEmail 
      ? `<div style="background: #f0f0f0; padding: 10px; margin-bottom: 20px;">
           <strong>Note:</strong> This email was intended for ${to}. 
           It's being sent to the admin email during development.
         </div>${html}`
      : html;

    const data = await resend.emails.send({
      from: 'ApexNova <onboarding@resend.dev>', // Use Resend's default domain until yours is verified
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
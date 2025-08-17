import { Resend } from 'resend';
import nodemailer from 'nodemailer';

// Fallback to nodemailer if Resend API key is not available
const useResend = !!process.env.RESEND_API_KEY;
const resend = useResend ? new Resend(process.env.RESEND_API_KEY) : null;

// Nodemailer fallback configuration
const transporter = !useResend ? nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
}) : null;

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

    if (useResend && resend) {
      // Use Resend if API key is available
      const data = await resend.emails.send({
        from: 'ApexNova <onboarding@resend.dev>',
        to: finalRecipient,
        subject: finalSubject,
        html: finalHtml,
        replyTo: 'info@apexnovaconsulting.com'
      });
      return { success: true, data };
    } else if (transporter) {
      // Fallback to nodemailer
      const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'noreply@apexnovaconsulting.com',
        to: finalRecipient,
        subject: finalSubject,
        html: finalHtml,
      });
      return { success: true, data: info };
    } else {
      // Log email for development if no email service is configured
      console.log('Email Service Not Configured - Would send:', {
        to: finalRecipient,
        subject: finalSubject,
        html: finalHtml
      });
      return { success: true, data: { id: 'development' } };
    }
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};
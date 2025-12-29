import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, name, company, industry, riskScore, riskLevel, answers } = data;

    // Send notification to admin
    if (resend) {
      await resend.emails.send({
        from: 'info@apexnovaconsulting.com',
        to: 'info@apexnovaconsulting.com',
        subject: `🚨 New ${riskLevel} Risk Lead: ${name} from ${company}`,
        html: `
          <h2>New AI Risk Calculator Lead</h2>
          <p><strong>Risk Score:</strong> ${riskScore}/100 (${riskLevel})</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Industry:</strong> ${industry}</p>
          
          <h3>Assessment Answers:</h3>
          <pre>${JSON.stringify(answers, null, 2)}</pre>
          
          <p><em>Follow up immediately - they're viewing their roadmap now!</em></p>
        `
      });

      // Send roadmap to lead
      await resend.emails.send({
        from: 'info@apexnovaconsulting.com',
        to: email,
        subject: `Your AI Governance Roadmap - ${riskLevel} Risk Detected`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00f5ff;">Your AI Risk Assessment Results</h1>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: ${riskLevel === 'Critical' ? '#ef4444' : riskLevel === 'High' ? '#f97316' : '#eab308'};">
                Risk Score: ${riskScore}/100 - ${riskLevel} Risk
              </h2>
            </div>
            
            <p>Hi ${name},</p>
            
            <p>Thank you for completing the ApexNova Consulting AI Risk Assessment. Based on your responses, we've identified specific areas where your ${industry} organization may be exposed to regulatory, security, or compliance risks.</p>
            
            <p><strong>Your personalized remediation roadmap is being prepared and will be available on our results page.</strong></p>
            
            <p>In the meantime, here are your immediate next steps:</p>
            
            <ol>
              <li><strong>Review your results:</strong> <a href="${process.env.NEXT_PUBLIC_URL}/results?score=${riskScore}&email=${encodeURIComponent(email)}">View Full Roadmap</a></li>
              <li><strong>Schedule a free consultation:</strong> Let's discuss your specific situation</li>
              <li><strong>Download our compliance guide:</strong> Industry-specific best practices</li>
            </ol>
            
            <div style="background: #0f172a; color: white; padding: 20px; border-radius: 8px; margin: 30px 0;">
              <h3 style="color: #00f5ff;">Ready to Become Apex-Certified?</h3>
              <p>Our team can help you achieve full compliance and earn the Apex-Certified Safe AI badge.</p>
              <a href="${process.env.NEXT_PUBLIC_URL}/contact" style="display: inline-block; background: #00f5ff; color: #0f172a; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 10px;">
                Book Your Free Strategy Call
              </a>
            </div>
            
            <p>Best regards,<br>
            The ApexNova Consulting Team</p>
            
            <p style="font-size: 12px; color: #666; margin-top: 30px;">
              973-348-5008 | info@apexnovaconsulting.com<br>
              Serving New Jersey and the NYC Tri-State Area
            </p>
          </div>
        `
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Risk calculator lead error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}


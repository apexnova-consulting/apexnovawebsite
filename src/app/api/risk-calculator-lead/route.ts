import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { generateRoadmapPDF } from '@/lib/pdfGenerator';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, name, company, industry, riskScore, riskLevel, answers } = data;

    // Generate PDF
    const pdf = generateRoadmapPDF({
      name: name || 'Valued Client',
      email,
      company: company || 'Your Organization',
      industry,
      riskScore,
      riskLevel,
      answers
    });

    // Convert PDF to base64 for email attachment
    const pdfBuffer = Buffer.from(pdf.output('arraybuffer'));
    const pdfBase64 = pdfBuffer.toString('base64');

    // Send emails via Resend
    if (resend) {
      // Send notification to admin
      await resend.emails.send({
        from: 'info@apexnovaconsulting.com',
        to: 'info@apexnovaconsulting.com',
        subject: `🚨 New ${riskLevel} Risk Lead: ${name || email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc;">
            <div style="background: #0f172a; padding: 20px; border-radius: 8px; text-align: center;">
              <h1 style="color: #00f5ff; margin: 0;">New AI Risk Calculator Lead</h1>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <h2 style="color: ${riskLevel === 'Critical' ? '#ef4444' : riskLevel === 'High' ? '#f97316' : '#eab308'};">
                Risk Score: ${riskScore}/100 (${riskLevel})
              </h2>
              
              <table style="width: 100%; margin-top: 20px;">
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Name:</td>
                  <td style="padding: 8px;">${name || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Email:</td>
                  <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Company:</td>
                  <td style="padding: 8px;">${company || 'Not provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Industry:</td>
                  <td style="padding: 8px;">${industry}</td>
                </tr>
                <tr>
                  <td style="padding: 8px; font-weight: bold;">Date:</td>
                  <td style="padding: 8px;">${new Date().toLocaleString()}</td>
                </tr>
              </table>
              
              <div style="margin-top: 20px; padding: 15px; background: #f1f5f9; border-left: 4px solid #00f5ff;">
                <h3 style="margin: 0 0 10px 0;">Assessment Answers:</h3>
                <pre style="font-size: 12px; overflow-x: auto;">${JSON.stringify(answers, null, 2)}</pre>
              </div>
              
              <p style="margin-top: 20px; padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b;">
                <strong>⚡ Action Required:</strong> This is a ${riskLevel.toLowerCase()} priority lead. 
                They've received their roadmap PDF. Follow up immediately!
              </p>
            </div>
          </div>
        `
      });

      // Send roadmap PDF to prospect
      await resend.emails.send({
        from: 'info@apexnovaconsulting.com',
        to: email,
        subject: `Your 2026 AI Remediation Roadmap - ${riskLevel} Risk Detected`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #00f5ff; margin: 0 0 10px 0; font-size: 28px;">ApexNova Consulting</h1>
              <p style="color: #94a3b8; margin: 0;">AI Governance & Security</p>
            </div>
            
            <div style="background: #ffffff; padding: 30px;">
              <h2 style="color: #0f172a; margin-top: 0;">Your AI Risk Assessment Results</h2>
              
              <div style="background: ${riskLevel === 'Critical' ? '#fee2e2' : riskLevel === 'High' ? '#ffedd5' : '#fef3c7'}; 
                          padding: 20px; border-radius: 8px; margin: 20px 0; 
                          border-left: 4px solid ${riskLevel === 'Critical' ? '#ef4444' : riskLevel === 'High' ? '#f97316' : '#eab308'};">
                <h3 style="color: ${riskLevel === 'Critical' ? '#991b1b' : riskLevel === 'High' ? '#9a3412' : '#854d0e'}; margin: 0 0 10px 0;">
                  Risk Score: ${riskScore}/100 - ${riskLevel} Risk
                </h3>
                <p style="color: #374151; margin: 0;">
                  ${riskLevel === 'Critical' ? 'URGENT ACTION REQUIRED: Your organization faces immediate regulatory threats.' :
                    riskLevel === 'High' ? 'Significant vulnerabilities detected. Prioritize AI governance immediately.' :
                    'Moderate gaps identified. Proactive measures recommended.'}
                </p>
              </div>
              
              <p style="color: #374151; line-height: 1.6;">
                Hi ${name || 'there'},
              </p>
              
              <p style="color: #374151; line-height: 1.6;">
                Thank you for completing the ApexNova Consulting AI Risk Assessment. Based on your responses, 
                we've identified specific areas where your ${industry} organization may be exposed to:
              </p>
              
              <ul style="color: #374151; line-height: 1.8;">
                <li><strong>NJDPA (NJ Data Privacy Act)</strong> compliance gaps</li>
                <li>Regulatory penalties and legal exposure</li>
                <li>Data security and privacy vulnerabilities</li>
                <li>${industry === 'healthcare' ? 'HIPAA-AI violations' : 
                     industry === 'title-insurance' ? 'Wire fraud and identity theft risks' : 
                     'IP leakage and trade secret exposure'}</li>
              </ul>
              
              <div style="background: #f0fdfa; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #14b8a6;">
                <h3 style="color: #0f766e; margin: 0 0 10px 0;">📄 Your Personalized Roadmap (PDF Attached)</h3>
                <p style="color: #134e4a; margin: 0; line-height: 1.6;">
                  We've attached a comprehensive 5-page PDF that includes:
                </p>
                <ul style="color: #134e4a; line-height: 1.6; margin-top: 10px;">
                  <li>Detailed NJDPA compliance requirements</li>
                  <li>5-phase remediation plan with timelines and costs</li>
                  <li>${industry}-specific action items</li>
                  <li>Regulatory deadline warnings</li>
                  <li>Path to Apex-Certified Safe AI status</li>
                </ul>
              </div>
              
              <h3 style="color: #0f172a;">Your Immediate Next Steps:</h3>
              
              <ol style="color: #374151; line-height: 1.8;">
                <li><strong>Review the attached PDF</strong> - Your complete remediation roadmap</li>
                <li><strong>Identify Phase 1 priorities</strong> - Start with immediate actions (Week 1-2)</li>
                <li><strong>Schedule a free strategy call</strong> - Let's discuss your specific situation</li>
              </ol>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${process.env.NEXT_PUBLIC_URL || 'https://www.apexnovaconsulting.com'}/contact" 
                   style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #00f5ff 100%); 
                          color: #0f172a; padding: 16px 32px; text-decoration: none; border-radius: 8px; 
                          font-weight: bold; font-size: 16px;">
                  📅 Book Your Free Strategy Call
                </a>
              </div>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-top: 30px;">
                <h4 style="color: #0f172a; margin: 0 0 10px 0;">Why Act Now?</h4>
                <p style="color: #475569; margin: 0; line-height: 1.6; font-size: 14px;">
                  The NJ Data Privacy Act is <strong>ACTIVE and enforceable now</strong>. Penalties start at $20,000 per violation. 
                  Organizations in your industry are being audited. Don't wait until you receive a notice.
                </p>
              </div>
            </div>
            
            <div style="background: #0f172a; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="color: #94a3b8; margin: 0; font-size: 12px;">
                ApexNova Consulting | 973-348-5008 | info@apexnovaconsulting.com<br>
                Serving New Jersey and the NYC Tri-State Area
              </p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: `ApexNova-AI-Roadmap-2026-${name?.replace(/\s+/g, '-') || 'Report'}.pdf`,
            content: pdfBase64,
          },
        ],
      });
    } else {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
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

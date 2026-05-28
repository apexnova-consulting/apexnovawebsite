import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

const SITE_URL = process.env.NEXT_PUBLIC_URL || 'https://www.apexnovaconsulting.com';

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // Notify admin
    await sendEmail({
      to: 'info@apexnovaconsulting.com',
      subject: `New Resource Guide Request — ${email}`,
      html: `
        <div style="font-family: -apple-system, sans-serif;">
          <h2 style="color: #1A2E6E;">New Guide Download Request</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Source:</strong> ${source || 'homepage lead magnet'}</p>
        </div>
      `,
      isAdminEmail: true,
    });

    // Send guide to user
    await sendEmail({
      to: email,
      subject: "Your AI Automation Guide — Plus 3 More Free Resources",
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0A0A0F; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #F0F0FF; font-size: 20px; margin: 0;">
              Your Free AI Resources Are Ready
            </h1>
          </div>
          <div style="background: #111118; padding: 32px; border: 1px solid rgba(255,255,255,0.08); border-top: none;">
            <p style="color: #9898B0; font-size: 15px; line-height: 1.7; margin: 0 0 20px;">
              Thanks for downloading. Here are all four free resources — fully interactive, no login required.
            </p>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">

              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <p style="margin: 0 0 4px; color: #E8A020; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em;">01 — Guide</p>
                  <p style="margin: 0 0 6px; color: #F0F0FF; font-size: 14px; font-weight: 600;">
                    The NJ/NYC Business Owner&apos;s Guide to AI Automation in 2026
                  </p>
                  <p style="margin: 0 0 8px; color: #9898B0; font-size: 13px;">
                    Plain English guide covering what AI can do, how to pick your first project, and what to measure.
                  </p>
                  <a href="${SITE_URL}/resources/quick-start-guide"
                    style="display: inline-block; background: rgba(43,107,229,0.15); color: #2B6BE5;
                           padding: 7px 14px; border-radius: 6px; text-decoration: none;
                           font-size: 13px; font-weight: 600; border: 1px solid rgba(43,107,229,0.3);">
                    Read the Guide →
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <p style="margin: 0 0 4px; color: #E8A020; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em;">02 — Interactive</p>
                  <p style="margin: 0 0 6px; color: #F0F0FF; font-size: 14px; font-weight: 600;">
                    AI Readiness Assessment
                  </p>
                  <p style="margin: 0 0 8px; color: #9898B0; font-size: 13px;">
                    15-question assessment across 5 business areas. Takes 5 minutes. Get a score and breakdown.
                  </p>
                  <a href="${SITE_URL}/resources/ai-readiness-assessment"
                    style="display: inline-block; background: rgba(43,107,229,0.15); color: #2B6BE5;
                           padding: 7px 14px; border-radius: 6px; text-decoration: none;
                           font-size: 13px; font-weight: 600; border: 1px solid rgba(43,107,229,0.3);">
                    Take the Assessment →
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
                  <p style="margin: 0 0 4px; color: #E8A020; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em;">03 — Calculator</p>
                  <p style="margin: 0 0 6px; color: #F0F0FF; font-size: 14px; font-weight: 600;">
                    ROI Calculator
                  </p>
                  <p style="margin: 0 0 8px; color: #9898B0; font-size: 13px;">
                    Enter your hours and rates. See exactly how much AI could save your business annually.
                  </p>
                  <a href="${SITE_URL}/resources/roi-calculator"
                    style="display: inline-block; background: rgba(43,107,229,0.15); color: #2B6BE5;
                           padding: 7px 14px; border-radius: 6px; text-decoration: none;
                           font-size: 13px; font-weight: 600; border: 1px solid rgba(43,107,229,0.3);">
                    Calculate My ROI →
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding: 12px 0;">
                  <p style="margin: 0 0 4px; color: #E8A020; font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 0.05em;">04 — Checklist</p>
                  <p style="margin: 0 0 6px; color: #F0F0FF; font-size: 14px; font-weight: 600;">
                    AI Implementation Checklist
                  </p>
                  <p style="margin: 0 0 8px; color: #9898B0; font-size: 13px;">
                    40-step checklist across 5 phases — from planning to post-launch optimization. Print or use interactively.
                  </p>
                  <a href="${SITE_URL}/resources/implementation-checklist"
                    style="display: inline-block; background: rgba(43,107,229,0.15); color: #2B6BE5;
                           padding: 7px 14px; border-radius: 6px; text-decoration: none;
                           font-size: 13px; font-weight: 600; border: 1px solid rgba(43,107,229,0.3);">
                    Open the Checklist →
                  </a>
                </td>
              </tr>

            </table>

            <div style="background: rgba(43,107,229,0.08); border: 1px solid rgba(43,107,229,0.2); border-radius: 10px; padding: 16px; text-align: center;">
              <p style="color: #9898B0; font-size: 14px; margin: 0 0 12px;">
                Want a personalized plan for <em>your</em> specific business?
              </p>
              <a href="${SITE_URL}/contact"
                style="display: inline-block; background: linear-gradient(135deg, #2B6BE5 0%, #1A2E6E 100%);
                       color: white; padding: 12px 24px; border-radius: 8px;
                       text-decoration: none; font-size: 14px; font-weight: 600;">
                Book a Free AI Audit →
              </a>
              <p style="color: #5A5A72; font-size: 12px; margin: 10px 0 0;">
                30 minutes. No pitch. Just useful information.
              </p>
            </div>

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Toolkit signup error:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}

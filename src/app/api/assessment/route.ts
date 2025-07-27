import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'info@apexnovaconsulting.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Calculate detailed scores
    const confidenceScore = calculateConfidenceScore(data.answers);
    const technicalScore = calculateTechnicalScore(data.answers);
    const leadershipScore = calculateLeadershipScore(data.answers);
    const overallScore = Math.round((confidenceScore + technicalScore + leadershipScore) / 3);

    // Prepare email content
    let emailContent = `
      New Assessment Submission\n
      Name: ${data.name}
      Email: ${data.email}
      
      Assessment Scores:
      Overall Score: ${overallScore}%
      Confidence Score: ${confidenceScore}%
      Technical Communication Score: ${technicalScore}%
      Leadership Presence Score: ${leadershipScore}%
      
      Detailed Answers:
      ${Object.entries(data.answers).map(([q, a]) => `Question ${q}: ${a}`).join('\n')}
    `;

    // Send email to admin
    await transporter.sendMail({
      from: 'info@apexnovaconsulting.com',
      to: 'info@apexnovaconsulting.com',
      subject: `New Assessment Submission - ${data.name}`,
      text: emailContent
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: 'info@apexnovaconsulting.com',
      to: data.email,
      subject: 'Your ApexNova Communication Assessment Results',
      text: `
        Dear ${data.name},

        Thank you for completing the ApexNova Communication Assessment. Here's a summary of your results:

        Overall Communication Confidence Score: ${overallScore}%
        
        Key Areas:
        - Speaking Confidence: ${confidenceScore}%
        - Technical Communication: ${technicalScore}%
        - Leadership Presence: ${leadershipScore}%

        Based on your results, we recommend scheduling a strategy call to discuss:
        ${getRecommendations(overallScore, confidenceScore, technicalScore, leadershipScore)}

        Click here to schedule your strategy call: https://apexnovaconsulting.com/contact

        We look forward to helping you transform your communication impact.

        Best regards,
        The ApexNova Team
      `
    });

    return NextResponse.json({
      success: true,
      scores: {
        overall: overallScore,
        confidence: confidenceScore,
        technical: technicalScore,
        leadership: leadershipScore
      }
    });
  } catch (error) {
    console.error('Error processing assessment:', error);
    return NextResponse.json(
      { error: 'Failed to process assessment' },
      { status: 500 }
    );
  }
}

function calculateConfidenceScore(answers: Record<string, number>): number {
  // Questions 1 and 5 are most relevant for confidence
  const confidenceQuestions = [1, 5];
  const score = confidenceQuestions.reduce((sum, q) => sum + (answers[q] || 0), 0);
  return Math.round((score / (confidenceQuestions.length * 3)) * 100);
}

function calculateTechnicalScore(answers: Record<string, number>): number {
  // Questions 2 and 3 are most relevant for technical communication
  const technicalQuestions = [2, 3];
  const score = technicalQuestions.reduce((sum, q) => sum + (answers[q] || 0), 0);
  return Math.round((score / (technicalQuestions.length * 3)) * 100);
}

function calculateLeadershipScore(answers: Record<string, number>): number {
  // Question 4 is most relevant for leadership presence
  const leadershipQuestions = [4];
  const score = leadershipQuestions.reduce((sum, q) => sum + (answers[q] || 0), 0);
  return Math.round((score / (leadershipQuestions.length * 3)) * 100);
}

function getRecommendations(overall: number, confidence: number, technical: number, leadership: number): string {
  const recommendations = [];

  if (confidence < 70) {
    recommendations.push('- Anxiety management and confidence building techniques');
  }
  if (technical < 70) {
    recommendations.push('- Technical communication frameworks for complex ideas');
  }
  if (leadership < 70) {
    recommendations.push('- Executive presence development strategies');
  }
  if (overall < 40) {
    recommendations.push('- Our Executive Communication Intensive program');
  } else if (overall < 70) {
    recommendations.push('- Our Technical Leadership Presence Program');
  } else {
    recommendations.push('- Our High-Stakes Presentation Mastery program');
  }

  return recommendations.join('\n');
} 
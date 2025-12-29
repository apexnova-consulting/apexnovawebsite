import jsPDF from 'jspdf';
// Note: jspdf-autotable extends jsPDF, imported for side effects
import 'jspdf-autotable';

interface RoadmapData {
  name: string;
  email: string;
  company: string;
  industry: string;
  riskScore: number;
  riskLevel: string;
  answers: any;
}

export function generateRoadmapPDF(data: RoadmapData): jsPDF {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  let yPosition = 20;

  // Helper to add new page if needed
  const checkPageBreak = (neededSpace: number) => {
    if (yPosition + neededSpace > pageHeight - 20) {
      doc.addPage();
      yPosition = 20;
      return true;
    }
    return false;
  };

  // **PAGE 1: COVER PAGE**
  // Header with logo placeholder
  doc.setFillColor(15, 23, 42); // slate-950
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  doc.setTextColor(0, 245, 255); // cyber blue
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('ApexNova Consulting', pageWidth / 2, 30, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text('AI Governance & Security', pageWidth / 2, 45, { align: 'center' });

  yPosition = 80;

  // Title
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Your 2026 AI Remediation Roadmap', pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 15;

  doc.setFontSize(16);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(`Addressing the NJ Data Privacy Act (NJDPA)`, pageWidth / 2, yPosition, { align: 'center' });
  yPosition += 30;

  // Risk Score Box
  const riskColor = data.riskScore >= 75 ? [239, 68, 68] : 
                    data.riskScore >= 50 ? [249, 115, 22] : 
                    data.riskScore >= 25 ? [234, 179, 8] : [16, 185, 129];
  
  doc.setFillColor(...riskColor);
  doc.roundedRect(60, yPosition, pageWidth - 120, 40, 5, 5, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(32);
  doc.setFont('helvetica', 'bold');
  doc.text(`${data.riskScore}/100`, pageWidth / 2, yPosition + 18, { align: 'center' });
  
  doc.setFontSize(14);
  doc.text(`${data.riskLevel} Risk Level`, pageWidth / 2, yPosition + 32, { align: 'center' });
  yPosition += 60;

  // Client Info
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  
  const clientInfo = [
    `Prepared for: ${data.name || 'N/A'}`,
    `Company: ${data.company || 'N/A'}`,
    `Industry: ${data.industry.charAt(0).toUpperCase() + data.industry.slice(1)}`,
    `Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
  ];

  clientInfo.forEach((line) => {
    doc.text(line, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 7;
  });

  yPosition += 20;

  // Warning Box
  doc.setFillColor(254, 226, 226); // bg-red-50
  doc.setDrawColor(248, 113, 113); // border-red-400
  doc.setLineWidth(0.5);
  doc.roundedRect(20, yPosition, pageWidth - 40, 30, 3, 3, 'FD');
  
  doc.setTextColor(185, 28, 28); // text-red-700
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('⚠ REGULATORY NOTICE', 25, yPosition + 10);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const warningText = 'The NJ Data Privacy Act (NJDPA) is ACTIVE and enforceable. Non-compliance carries penalties up to $20,000 per violation. This roadmap provides immediate action items.';
  const splitText = doc.splitTextToSize(warningText, pageWidth - 50);
  doc.text(splitText, 25, yPosition + 18);

  // **PAGE 2: EXECUTIVE SUMMARY**
  doc.addPage();
  yPosition = 20;

  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Executive Summary', 20, yPosition);
  yPosition += 15;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);

  const execSummary = [
    `Based on your assessment, your organization faces a ${data.riskLevel.toUpperCase()} level of AI governance risk, with a composite score of ${data.riskScore}/100.`,
    '',
    `Key Findings:`,
    `• Your current AI usage patterns expose you to potential NJDPA violations`,
    `• ${data.industry === 'healthcare' ? 'HIPAA-AI' : data.industry === 'title-insurance' ? 'Wire fraud' : 'IP leakage'} concerns require immediate attention`,
    `• AI policy documentation is ${data.answers['ai-policy'] > 15 ? 'absent or insufficient' : 'partially implemented'}`,
    `• Compliance with NJ Data Privacy Act: ${data.answers['compliance'] > 10 ? 'NOT COMPLIANT' : 'PARTIALLY COMPLIANT'}`,
    '',
    `This roadmap provides a phased approach to achieving full compliance and earning Apex-Certified Safe AI status.`
  ];

  execSummary.forEach((line) => {
    if (line === '') {
      yPosition += 5;
    } else {
      const wrappedText = doc.splitTextToSize(line, pageWidth - 40);
      doc.text(wrappedText, 20, yPosition);
      yPosition += wrappedText.length * 6;
    }
  });

  // **PAGE 3: NJ DATA PRIVACY ACT (NJDPA) BREAKDOWN**
  checkPageBreak(60);
  yPosition += 10;

  doc.setFillColor(0, 245, 255, 0.1); // cyber blue background
  doc.rect(0, yPosition - 5, pageWidth, 15, 'F');
  
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Understanding the NJ Data Privacy Act (NJDPA)', 20, yPosition + 5);
  yPosition += 20;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);

  const njdpaInfo = [
    {
      title: 'What is NJDPA?',
      content: 'The New Jersey Data Privacy Act is a comprehensive consumer privacy law that regulates how businesses collect, use, and share personal data of NJ residents. It applies to any business processing NJ consumer data, regardless of location.'
    },
    {
      title: 'AI-Specific Requirements',
      content: '• Consumer consent required before AI processes personal data\n• Purpose limitation: AI can only use data for disclosed purposes\n• Data minimization: Collect only what\'s necessary\n• Prohibition on discriminatory AI decision-making\n• Right to opt-out of automated decision-making'
    },
    {
      title: 'Penalties',
      content: 'Up to $20,000 per violation. The NJ Attorney General can pursue enforcement. Private right of action after AG notice period.'
    },
    {
      title: 'Compliance Deadline',
      content: 'ACTIVE NOW - January 15, 2025 was the enforcement date. Organizations must be compliant immediately.'
    }
  ];

  njdpaInfo.forEach((section) => {
    checkPageBreak(35);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(section.title, 20, yPosition);
    yPosition += 7;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(60, 60, 60);
    const wrapped = doc.splitTextToSize(section.content, pageWidth - 40);
    doc.text(wrapped, 20, yPosition);
    yPosition += wrapped.length * 5 + 5;
  });

  // **PAGE 4: 5-PHASE REMEDIATION ROADMAP**
  doc.addPage();
  yPosition = 20;

  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Your 5-Phase Remediation Roadmap', 20, yPosition);
  yPosition += 15;

  const phases = [
    {
      phase: 'Phase 1: Immediate Actions (Week 1-2)',
      priority: 'CRITICAL',
      timeline: '1-2 weeks',
      cost: 'In-house (Free with templates)',
      steps: [
        'Emergency AI tool inventory across all departments',
        'Implement temporary restrictions on personal AI accounts',
        'Draft interim NJDPA-compliant AI Usage Policy',
        'Identify highest-risk data exposure points',
        'Schedule leadership briefing on NJDPA requirements'
      ]
    },
    {
      phase: 'Phase 2: Policy & Training (Week 3-6)',
      priority: 'HIGH',
      timeline: '3-4 weeks',
      cost: '$2,997 - $7,997',
      steps: [
        'Finalize and distribute AI Usage Policy company-wide',
        'Conduct NJDPA compliance training for all staff',
        'Set up approved AI tool roster with proper DPAs',
        'Implement data consent management system',
        'Establish incident reporting procedures'
      ]
    },
    {
      phase: 'Phase 3: Compliance Framework (Week 7-12)',
      priority: 'MEDIUM',
      timeline: '5-6 weeks',
      cost: '$7,997 - $15,997',
      steps: [
        'Complete NJDPA gap analysis and documentation',
        'Implement data classification and minimization',
        'Deploy zero-knowledge AI architecture',
        'Set up continuous compliance monitoring',
        'Prepare for regulatory audits'
      ]
    }
  ];

  phases.forEach((phase) => {
    checkPageBreak(55);
    
    // Phase Header
    doc.setFillColor(241, 245, 249); // bg-slate-100
    doc.rect(20, yPosition, pageWidth - 40, 10, 'F');
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(phase.phase, 22, yPosition + 7);
    yPosition += 15;
    
    // Priority Badge
    doc.setFontSize(8);
    const priorityColor = phase.priority === 'CRITICAL' ? [239, 68, 68] : 
                         phase.priority === 'HIGH' ? [249, 115, 22] : [234, 179, 8];
    doc.setFillColor(...priorityColor);
    doc.roundedRect(22, yPosition, 30, 6, 2, 2, 'F');
    doc.setTextColor(255, 255, 255);
    doc.text(phase.priority, 23, yPosition + 4.5);
    
    doc.setTextColor(100, 100, 100);
    doc.text(`Timeline: ${phase.timeline}`, 60, yPosition + 4.5);
    doc.text(`Investment: ${phase.cost}`, 120, yPosition + 4.5);
    yPosition += 10;
    
    // Steps
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60, 60, 60);
    
    phase.steps.forEach((step) => {
      checkPageBreak(7);
      doc.text(`✓ ${step}`, 25, yPosition);
      yPosition += 5;
    });
    
    yPosition += 5;
  });

  // **PAGE 5: INDUSTRY-SPECIFIC REQUIREMENTS**
  doc.addPage();
  yPosition = 20;

  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text(`${data.industry.charAt(0).toUpperCase() + data.industry.slice(1)} Industry Requirements`, 20, yPosition);
  yPosition += 15;

  const industryRequirements: { [key: string]: string[] } = {
    healthcare: [
      '• HIPAA-AI Compliance: All AI tools must have Business Associate Agreements',
      '• PHI Protection: Zero-knowledge architecture for patient data processing',
      '• NJ Civil Rights AI: Bias testing required for diagnostic/triage AI',
      '• Safe Scribe Certification: Mandatory for AI medical transcription',
      '• OCR Audit Preparation: Documentation of all AI data flows'
    ],
    'title-insurance': [
      '• Settlement Shield Protocol: Voice authentication for wire transfers',
      '• AI Fraud Prevention: Detection systems for voice-cloning attacks',
      '• Identity Verification: Multi-factor authentication for closings',
      '• NJDPA Consumer Data: Consent management for property/financial data',
      '• E&O Insurance: Documentation of AI fraud prevention measures'
    ],
    saas: [
      '• IP Leakage Prevention: Audit of Sales/CS AI training data',
      '• Trade Secret Protection: Content filtering on AI agents',
      '• Customer Data Isolation: Zero cross-contamination in AI systems',
      '• NY RAISE Act: Disclosure requirements for AI in employment',
      '• DPA Enforcement: Data Processing Agreements with all AI vendors'
    ]
  };

  const requirements = industryRequirements[data.industry] || [
    '• NJDPA Compliance: Consumer consent and data minimization',
    '• AI Policy Documentation: Written governance framework',
    '• Vendor Management: DPAs with all AI tool providers',
    '• Employee Training: AI usage and data protection',
    '• Incident Response: Breach notification procedures'
  ];

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);

  requirements.forEach((req) => {
    checkPageBreak(8);
    const wrapped = doc.splitTextToSize(req, pageWidth - 40);
    doc.text(wrapped, 20, yPosition);
    yPosition += wrapped.length * 6;
  });

  // **CALL TO ACTION**
  checkPageBreak(50);
  yPosition += 10;

  doc.setFillColor(0, 245, 255, 0.1);
  doc.roundedRect(20, yPosition, pageWidth - 40, 45, 5, 5, 'F');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('Next Steps: Schedule Your Free Strategy Call', pageWidth / 2, yPosition + 12, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 60);
  doc.text('Our AI governance experts will review your roadmap and create', pageWidth / 2, yPosition + 20, { align: 'center' });
  doc.text('a custom implementation plan for your organization.', pageWidth / 2, yPosition + 26, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 122, 204);
  doc.text('📞 973-348-5008  |  ✉ info@apexnovaconsulting.com', pageWidth / 2, yPosition + 36, { align: 'center' });

  // **FOOTER ON ALL PAGES**
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`ApexNova Consulting | Confidential | Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  }

  return doc;
}


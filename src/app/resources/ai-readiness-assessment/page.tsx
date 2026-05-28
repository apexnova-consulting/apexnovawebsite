'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle, Printer } from 'lucide-react';

const categories = [
  {
    id: 'lead-response',
    title: 'Lead Response & Customer Communication',
    color: '#2B6BE5',
    questions: [
      {
        id: 'lr1',
        text: 'How quickly does your business respond to new inquiries (website form, social media, phone)?',
        options: [
          { value: 0, label: 'Within 24 hours or longer' },
          { value: 1, label: 'Within a few hours' },
          { value: 2, label: 'Within 30 minutes' },
          { value: 3, label: 'Under 5 minutes, automatically' },
        ],
      },
      {
        id: 'lr2',
        text: 'What happens when someone contacts you outside of business hours?',
        options: [
          { value: 0, label: 'They wait until the next business day' },
          { value: 1, label: 'They get a generic voicemail/auto-reply' },
          { value: 2, label: 'They get a useful automated response' },
          { value: 3, label: 'They get an AI that can fully assist them' },
        ],
      },
      {
        id: 'lr3',
        text: 'How do you handle the same customer questions repeatedly (hours, pricing, availability)?',
        options: [
          { value: 0, label: 'Staff answers them manually every time' },
          { value: 1, label: 'We have an FAQ page but still get the calls' },
          { value: 2, label: 'Partially automated — some channels only' },
          { value: 3, label: 'Fully automated FAQ across all channels' },
        ],
      },
    ],
  },
  {
    id: 'admin-workflow',
    title: 'Administrative Workflow',
    color: '#E8A020',
    questions: [
      {
        id: 'aw1',
        text: 'How much time does your team spend on scheduling, confirmations, and reminders each week?',
        options: [
          { value: 0, label: '5+ hours — entirely manual' },
          { value: 1, label: '3–5 hours — mostly manual' },
          { value: 2, label: '1–3 hours — partially automated' },
          { value: 3, label: 'Under 1 hour — mostly automated' },
        ],
      },
      {
        id: 'aw2',
        text: 'How are intake forms, new client onboarding, or data entry handled?',
        options: [
          { value: 0, label: 'Paper forms or manual data entry' },
          { value: 1, label: 'Digital forms but manual follow-up' },
          { value: 2, label: 'Some automation in place' },
          { value: 3, label: 'Fully automated intake-to-CRM workflow' },
        ],
      },
      {
        id: 'aw3',
        text: 'How do appointment reminders and no-show prevention work at your business?',
        options: [
          { value: 0, label: 'We call/text manually' },
          { value: 1, label: 'We send one reminder manually' },
          { value: 2, label: 'Automated single reminder via a tool' },
          { value: 3, label: 'Multi-step automated reminder sequence' },
        ],
      },
    ],
  },
  {
    id: 'follow-up',
    title: 'Lead Follow-Up & Client Retention',
    color: '#4C6FC7',
    questions: [
      {
        id: 'fu1',
        text: 'What happens to leads that don\'t convert immediately?',
        options: [
          { value: 0, label: 'They usually fall through the cracks' },
          { value: 1, label: 'We try to follow up manually when we remember' },
          { value: 2, label: 'We have a basic follow-up sequence' },
          { value: 3, label: 'Automated multi-touch nurture sequence' },
        ],
      },
      {
        id: 'fu2',
        text: 'How do you stay in touch with past clients?',
        options: [
          { value: 0, label: 'We don\'t have a systematic process' },
          { value: 1, label: 'Occasional manual outreach' },
          { value: 2, label: 'Periodic email newsletters' },
          { value: 3, label: 'Automated check-ins, reviews, and referral asks' },
        ],
      },
      {
        id: 'fu3',
        text: 'How do you request reviews from satisfied customers?',
        options: [
          { value: 0, label: 'We don\'t have a consistent process' },
          { value: 1, label: 'We ask verbally at the end of a job' },
          { value: 2, label: 'We send a manual email sometimes' },
          { value: 3, label: 'Automated review request after every job/visit' },
        ],
      },
    ],
  },
  {
    id: 'operations',
    title: 'Internal Operations',
    color: '#F0A514',
    questions: [
      {
        id: 'op1',
        text: 'How do you handle repetitive internal communications (status updates, deadline reminders, task assignments)?',
        options: [
          { value: 0, label: 'All manual — calls, texts, emails' },
          { value: 1, label: 'Partially organized with a task tool' },
          { value: 2, label: 'Some automation via email rules or tools' },
          { value: 3, label: 'Automated workflows for most routine comms' },
        ],
      },
      {
        id: 'op2',
        text: 'How do your tools (CRM, calendar, email, forms) share data?',
        options: [
          { value: 0, label: 'They don\'t — we copy data manually' },
          { value: 1, label: 'Some manual exports/imports' },
          { value: 2, label: 'Basic integrations (Zapier, etc.)' },
          { value: 3, label: 'Fully connected stack with automated data flow' },
        ],
      },
      {
        id: 'op3',
        text: 'Does your team have access to a knowledge base or documented process library?',
        options: [
          { value: 0, label: 'No — knowledge is in people\'s heads' },
          { value: 1, label: 'Some docs in Google Drive/Notion' },
          { value: 2, label: 'Documented but not easy to search' },
          { value: 3, label: 'Searchable knowledge base, always current' },
        ],
      },
    ],
  },
  {
    id: 'tech-stack',
    title: 'Technology & Tools',
    color: '#2B6BE5',
    questions: [
      {
        id: 'ts1',
        text: 'How would you describe your current technology stack?',
        options: [
          { value: 0, label: 'Minimal — email and phone mainly' },
          { value: 1, label: 'A few tools but they don\'t connect well' },
          { value: 2, label: 'Good tools, partial integration' },
          { value: 3, label: 'Well-integrated, mostly automated stack' },
        ],
      },
      {
        id: 'ts2',
        text: 'How comfortable is your team with adopting new software?',
        options: [
          { value: 0, label: 'Very resistant — change is difficult' },
          { value: 1, label: 'Some resistance, needs significant training' },
          { value: 2, label: 'Generally open if it\'s simple' },
          { value: 3, label: 'Actively looking for better tools' },
        ],
      },
      {
        id: 'ts3',
        text: 'Do you have a CRM or system for tracking leads and customers?',
        options: [
          { value: 0, label: 'No — spreadsheets or nothing' },
          { value: 1, label: 'Basic CRM, not used consistently' },
          { value: 2, label: 'CRM in active use' },
          { value: 3, label: 'CRM with automations and full adoption' },
        ],
      },
    ],
  },
];

const MAX_SCORE = categories.reduce((acc, cat) => acc + cat.questions.length * 3, 0);

function getResult(score: number, max: number) {
  const pct = Math.round((score / max) * 100);
  if (pct <= 35) return {
    label: 'Early Stage',
    color: '#E8A020',
    summary: "You have significant untapped opportunity. Most of your workflow is manual, which means AI could dramatically reduce your workload and missed revenue. The right first project — even a simple lead-response bot or reminder automation — will have immediate ROI.",
    next: "Start with one high-impact quick win. Book an AI Audit and we'll identify it together.",
  };
  if (pct <= 65) return {
    label: 'Growth Ready',
    color: '#2B6BE5',
    summary: "You have the foundation in place but there are clear gaps where time is being lost. You're ready to layer AI onto what already exists — likely in follow-up automation, intake workflows, or customer communication. The wins from here can compound quickly.",
    next: "You're in the right place to see meaningful ROI from a focused AI implementation.",
  };
  return {
    label: 'AI Ready',
    color: '#4C6FC7',
    summary: "Your business is already more automated than most. The opportunity now is going deeper — building AI tools that are trained specifically on your business data, integrating across all channels, or handling more complex workflows that generic tools can't.",
    next: "An AI Infrastructure engagement would be the right fit. Let's talk about what's next.",
  };
}

export default function AIReadinessAssessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const totalQuestions = categories.reduce((a, c) => a + c.questions.length, 0);
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions;

  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getResult(score, MAX_SCORE);
  const pct = Math.round((score / MAX_SCORE) * 100);

  const categoryScore = (cat: typeof categories[0]) => {
    const catMax = cat.questions.length * 3;
    const catScore = cat.questions.reduce((a, q) => a + (answers[q.id] ?? 0), 0);
    return Math.round((catScore / catMax) * 100);
  };

  if (submitted) {
    return (
      <main style={{ backgroundColor: 'var(--bg-base)' }}>
        <section className="pt-28 pb-24">
          <div className="container-site max-w-3xl">
            <div className="text-center mb-10">
              <p className="section-label mb-3">{'// Your results'}</p>
              <h1 className="text-[#F0F0FF] text-4xl font-extrabold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                AI Readiness Score
              </h1>
            </div>

            {/* Score display */}
            <div className="card p-8 text-center mb-6" style={{ borderColor: `${result.color}30`, background: `${result.color}06` }}>
              <div className="text-7xl font-black mb-1" style={{ fontFamily: 'Syne, sans-serif', color: result.color }}>
                {pct}
              </div>
              <div className="text-[#9898B0] text-sm mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                out of 100
              </div>
              <div
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-5"
                style={{ background: `${result.color}15`, color: result.color, border: `1px solid ${result.color}40` }}
              >
                {result.label}
              </div>
              <p className="text-[#9898B0] leading-relaxed max-w-xl mx-auto mb-2">{result.summary}</p>
            </div>

            {/* Category breakdown */}
            <div className="card p-7 mb-6">
              <h2 className="text-[#F0F0FF] font-bold mb-5" style={{ fontFamily: 'Syne, sans-serif' }}>
                Score by Category
              </h2>
              <div className="space-y-4">
                {categories.map((cat) => {
                  const cs = categoryScore(cat);
                  return (
                    <div key={cat.id}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-[#9898B0]">{cat.title}</span>
                        <span className="text-sm font-semibold" style={{ color: cat.color, fontFamily: 'JetBrains Mono, monospace' }}>
                          {cs}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${cs}%`, background: cat.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What to do next */}
            <div
              className="card p-7 text-center mb-6"
              style={{ background: 'rgba(43,107,229,0.05)', borderColor: 'rgba(43,107,229,0.2)' }}
            >
              <CheckCircle size={32} className="text-[#2B6BE5] mx-auto mb-3" />
              <h3 className="text-[#F0F0FF] text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
                What to do with this score
              </h3>
              <p className="text-[#9898B0] text-sm mb-5 max-w-md mx-auto">{result.next}</p>
              <Link href="/contact" className="btn-primary">
                Book a Free AI Audit →
              </Link>
              <p className="text-xs text-[#5A5A72] mt-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                We&apos;ll walk through your results together. No pitch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => { setSubmitted(false); setActiveCategory(0); }} className="btn-secondary text-sm">
                <ArrowLeft size={14} /> Retake Assessment
              </button>
              <button onClick={() => window.print()} className="btn-secondary text-sm">
                <Printer size={14} /> Print Results
              </button>
              <Link href="/resources" className="btn-secondary text-sm">
                ← All Resources
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  const cat = categories[activeCategory];
  const catAnswered = cat.questions.filter(q => answers[q.id] !== undefined).length;
  const catComplete = catAnswered === cat.questions.length;
  const isLast = activeCategory === categories.length - 1;

  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-24">
        <div className="container-site max-w-2xl">
          {/* Header */}
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors mb-8">
            <ArrowLeft size={13} /> Back to Resources
          </Link>
          <p className="section-label mb-3">{'// AI Readiness Assessment'}</p>
          <h1 className="text-[#F0F0FF] mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: 'Syne, sans-serif', fontWeight: 800, lineHeight: 1.1 }}>
            How AI-ready is your business?
          </h1>
          <p className="text-[#9898B0] mb-8" style={{ lineHeight: 1.7 }}>
            Answer {totalQuestions} questions across 5 areas. Takes about 5 minutes. You&apos;ll get a score and a breakdown of where to focus first.
          </p>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-[#5A5A72] mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              <span>Category {activeCategory + 1} of {categories.length}</span>
              <span>{answeredCount}/{totalQuestions} answered</span>
            </div>
            <div className="flex gap-1.5">
              {categories.map((c, i) => (
                <div
                  key={c.id}
                  className="flex-1 h-1.5 rounded-full cursor-pointer transition-all"
                  style={{
                    background: i < activeCategory
                      ? c.color
                      : i === activeCategory
                        ? `${c.color}80`
                        : 'rgba(255,255,255,0.08)',
                  }}
                  onClick={() => setActiveCategory(i)}
                />
              ))}
            </div>
          </div>

          {/* Category */}
          <div className="card p-7 mb-5">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30`, color: cat.color, fontFamily: 'JetBrains Mono, monospace' }}
              >
                {String(activeCategory + 1).padStart(2, '0')}
              </span>
              <h2 className="text-[#F0F0FF] font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                {cat.title}
              </h2>
            </div>

            <div className="space-y-7">
              {cat.questions.map((q, qi) => (
                <div key={q.id}>
                  <p className="text-[#F0F0FF] text-sm font-medium mb-3 leading-relaxed">
                    <span className="text-[#5A5A72] mr-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      Q{activeCategory * 3 + qi + 1}.
                    </span>
                    {q.text}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: opt.value }))}
                        className="w-full text-left p-3 rounded-xl text-sm transition-all duration-150"
                        style={{
                          background: answers[q.id] === opt.value
                            ? `${cat.color}15`
                            : 'var(--glass-bg)',
                          border: answers[q.id] === opt.value
                            ? `1px solid ${cat.color}50`
                            : '1px solid var(--glass-border)',
                          color: answers[q.id] === opt.value ? '#F0F0FF' : '#9898B0',
                        }}
                      >
                        <span className="mr-2 text-xs" style={{ color: answers[q.id] === opt.value ? cat.color : '#5A5A72', fontFamily: 'JetBrains Mono, monospace' }}>
                          {['A', 'B', 'C', 'D'][opt.value]}
                        </span>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex gap-3">
            {activeCategory > 0 && (
              <button onClick={() => setActiveCategory(activeCategory - 1)} className="btn-secondary text-sm">
                <ArrowLeft size={14} /> Previous
              </button>
            )}
            {!isLast ? (
              <button
                onClick={() => setActiveCategory(activeCategory + 1)}
                disabled={!catComplete}
                className="btn-primary text-sm ml-auto"
                style={{ opacity: catComplete ? 1 : 0.45 }}
              >
                Next Category <ArrowRight size={14} />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                disabled={!allAnswered}
                className="btn-primary text-sm ml-auto px-8"
                style={{ opacity: allAnswered ? 1 : 0.45 }}
              >
                See My Score <ArrowRight size={14} />
              </button>
            )}
          </div>
          {!catComplete && (
            <p className="text-xs text-[#5A5A72] text-right mt-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Answer all questions above to continue
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Printer, CheckSquare, Square } from 'lucide-react';

const phases = [
  {
    id: 'phase1',
    number: '01',
    title: 'Pre-Planning',
    subtitle: 'Before your first call with any AI vendor',
    color: '#2B6BE5',
    items: [
      { id: 'p1_1', text: 'List every task your team repeats more than 3 times per week' },
      { id: 'p1_2', text: 'Identify where leads are being lost (after hours? slow follow-up? no automation?)' },
      { id: 'p1_3', text: 'Document which tools you currently use (CRM, calendar, email platform, etc.)' },
      { id: 'p1_4', text: 'Note what integrations you already have vs. gaps' },
      { id: 'p1_5', text: 'Estimate hours per week lost to repetitive tasks (per person on your team)' },
      { id: 'p1_6', text: 'Identify your single biggest bottleneck — what costs you the most time or money?' },
      { id: 'p1_7', text: 'Complete the AI Readiness Assessment to benchmark where you are' },
      { id: 'p1_8', text: 'Run the ROI Calculator to set realistic expectations' },
    ],
  },
  {
    id: 'phase2',
    number: '02',
    title: 'Audit & Discovery',
    subtitle: 'During and immediately after your AI Audit call',
    color: '#E8A020',
    items: [
      { id: 'p2_1', text: 'Walk your consultant through your current customer journey end-to-end' },
      { id: 'p2_2', text: 'Show them your current tools and how data flows between them' },
      { id: 'p2_3', text: 'Share your busiest day workflow — the one that feels most chaotic' },
      { id: 'p2_4', text: 'Ask for a prioritized list: what should be automated first, second, third?' },
      { id: 'p2_5', text: 'Get clarity on expected timeline to go live for each project' },
      { id: 'p2_6', text: 'Ask about integration with your existing CRM/tools before committing' },
      { id: 'p2_7', text: 'Review the proposal — verify every item has a clear deliverable and timeline' },
      { id: 'p2_8', text: 'Confirm what training is included and what ongoing support looks like' },
    ],
  },
  {
    id: 'phase3',
    number: '03',
    title: 'Build Phase',
    subtitle: 'While your AI tools are being built',
    color: '#4C6FC7',
    items: [
      { id: 'p3_1', text: 'Provide your brand voice guidelines or sample communications for training' },
      { id: 'p3_2', text: 'Share your FAQ document or list of common customer questions' },
      { id: 'p3_3', text: 'Give access to your CRM / scheduling tool / forms as needed' },
      { id: 'p3_4', text: 'Designate one point-of-contact on your team for build decisions' },
      { id: 'p3_5', text: 'Review any draft scripts or conversation flows before they go live' },
      { id: 'p3_6', text: 'Set up a test channel (test form, test chat, etc.) before flipping to live' },
      { id: 'p3_7', text: 'Prepare your team — let them know what\'s changing and what to expect' },
      { id: 'p3_8', text: 'Test personally: submit your own form, trigger the bot, check the workflow' },
    ],
  },
  {
    id: 'phase4',
    number: '04',
    title: 'Launch',
    subtitle: 'Going live and the first 2 weeks',
    color: '#F0A514',
    items: [
      { id: 'p4_1', text: 'Confirm all automations are live and triggering correctly' },
      { id: 'p4_2', text: 'Monitor the first 10 interactions closely — read every transcript' },
      { id: 'p4_3', text: 'Check that notifications are reaching the right people on your team' },
      { id: 'p4_4', text: 'Verify CRM entries are being created/updated correctly' },
      { id: 'p4_5', text: 'Test the escalation path — does the bot hand off to a human cleanly?' },
      { id: 'p4_6', text: 'Train any staff who will be working alongside the AI tool' },
      { id: 'p4_7', text: 'Document any edge cases or unusual situations the AI didn\'t handle well' },
      { id: 'p4_8', text: 'Announce the new tool to your team and relevant customers if appropriate' },
    ],
  },
  {
    id: 'phase5',
    number: '05',
    title: 'Optimize & Scale',
    subtitle: 'Days 30–90 and beyond',
    color: '#2B6BE5',
    items: [
      { id: 'p5_1', text: 'Review performance metrics: response rate, lead conversion, time saved' },
      { id: 'p5_2', text: 'Identify the top 3 questions your bot couldn\'t answer — add them' },
      { id: 'p5_3', text: 'Update the bot with any new services, pricing, or offers' },
      { id: 'p5_4', text: 'Survey your team: what\'s working? What still feels manual?' },
      { id: 'p5_5', text: 'Review which leads came through AI vs. other channels' },
      { id: 'p5_6', text: 'Identify the next workflow to automate (build on the foundation)' },
      { id: 'p5_7', text: 'Ask your vendor about new integrations or features that might help' },
      { id: 'p5_8', text: 'Compare actual results to the ROI Calculator projections — adjust as needed' },
    ],
  },
];

export default function ImplementationChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [activePhase, setActivePhase] = useState(0);

  const toggle = (id: string) =>
    setChecked(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const totalItems = phases.reduce((a, p) => a + p.items.length, 0);
  const completedItems = checked.size;
  const pct = Math.round((completedItems / totalItems) * 100);

  const phaseProgress = (phase: typeof phases[0]) => {
    const done = phase.items.filter(i => checked.has(i.id)).length;
    return { done, total: phase.items.length, pct: Math.round((done / phase.items.length) * 100) };
  };

  return (
    <main style={{ backgroundColor: 'var(--bg-base)' }}>
      <section className="pt-28 pb-24">
        <div className="container-site max-w-3xl">
          <Link href="/resources" className="inline-flex items-center gap-1.5 text-sm text-[#9898B0] hover:text-[#F0F0FF] transition-colors mb-8">
            <ArrowLeft size={13} /> Back to Resources
          </Link>

          <p className="section-label mb-3">{'// Implementation Checklist'}</p>
          <h1 className="text-[#F0F0FF] mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontFamily: 'Syne, sans-serif', fontWeight: 800, lineHeight: 1.1 }}>
            AI Implementation Checklist
          </h1>
          <p className="text-[#9898B0] mb-6" style={{ lineHeight: 1.7 }}>
            40 steps across 5 phases — from first planning to long-term optimization. Check items off as you go, or print it and work through it with your team.
          </p>

          {/* Overall progress */}
          <div className="card p-5 mb-8">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-[#F0F0FF] font-semibold">Overall Progress</p>
              <p className="text-sm font-bold" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#2B6BE5' }}>
                {completedItems}/{totalItems} complete ({pct}%)
              </p>
            </div>
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #2B6BE5, #E8A020)' }}
              />
            </div>
            <div className="flex gap-3 mt-4 flex-wrap">
              {phases.map((p, i) => {
                const pp = phaseProgress(p);
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePhase(i)}
                    className="flex items-center gap-1.5 text-xs rounded-lg px-2.5 py-1.5 transition-all"
                    style={{
                      background: i === activePhase ? `${p.color}15` : 'transparent',
                      border: `1px solid ${i === activePhase ? p.color + '40' : 'var(--glass-border)'}`,
                      color: i === activePhase ? p.color : '#5A5A72',
                    }}
                  >
                    <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>{p.number}</span>
                    <span>{pp.done}/{pp.total}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active phase */}
          {phases.map((phase, pi) => pi !== activePhase ? null : (
            <div key={phase.id} className="card p-7 mb-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span
                    className="text-xs font-bold"
                    style={{ fontFamily: 'JetBrains Mono, monospace', color: phase.color }}
                  >
                    Phase {phase.number}
                  </span>
                  <h2 className="text-[#F0F0FF] text-xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
                    {phase.title}
                  </h2>
                  <p className="text-[#9898B0] text-sm mt-0.5">{phase.subtitle}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-lg font-black" style={{ fontFamily: 'Syne, sans-serif', color: phase.color }}>
                    {phaseProgress(phase).pct}%
                  </p>
                  <p className="text-xs text-[#5A5A72]">done</p>
                </div>
              </div>

              <div
                className="h-1 rounded-full mb-6 mt-3"
                style={{ background: 'var(--bg-elevated)' }}
              >
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${phaseProgress(phase).pct}%`, background: phase.color }}
                />
              </div>

              <ul className="space-y-2.5">
                {phase.items.map((item) => {
                  const done = checked.has(item.id);
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => toggle(item.id)}
                        className="w-full flex items-start gap-3 text-left p-3 rounded-xl transition-all duration-150 group"
                        style={{
                          background: done ? `${phase.color}08` : 'transparent',
                          border: `1px solid ${done ? phase.color + '25' : 'transparent'}`,
                        }}
                      >
                        {done
                          ? <CheckSquare size={17} className="flex-shrink-0 mt-0.5" style={{ color: phase.color }} />
                          : <Square size={17} className="flex-shrink-0 mt-0.5 text-[#5A5A72] group-hover:text-[#9898B0] transition-colors" />
                        }
                        <span
                          className="text-sm leading-relaxed transition-colors"
                          style={{ color: done ? '#9898B0' : '#F0F0FF', textDecoration: done ? 'line-through' : 'none', textDecorationColor: '#5A5A72' }}
                        >
                          {item.text}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Phase navigation */}
          <div className="flex gap-3 mb-8">
            {activePhase > 0 && (
              <button onClick={() => setActivePhase(activePhase - 1)} className="btn-secondary text-sm">
                <ArrowLeft size={14} /> Previous Phase
              </button>
            )}
            {activePhase < phases.length - 1 && (
              <button onClick={() => setActivePhase(activePhase + 1)} className="btn-primary text-sm ml-auto">
                Next Phase <ArrowRight size={14} />
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button onClick={() => window.print()} className="btn-secondary text-sm">
              <Printer size={14} /> Print Checklist
            </button>
            <button
              onClick={() => setChecked(new Set())}
              className="btn-secondary text-sm text-red-400"
              style={{ borderColor: 'rgba(248,113,113,0.3)' }}
            >
              Reset All
            </button>
          </div>

          <div
            className="card p-7 text-center"
            style={{ background: 'rgba(43,107,229,0.05)', borderColor: 'rgba(43,107,229,0.2)' }}
          >
            <h3 className="text-[#F0F0FF] text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>
              Want help working through this?
            </h3>
            <p className="text-[#9898B0] text-sm mb-5 max-w-md mx-auto">
              Book a free AI Audit and we&apos;ll start at Phase 1 together — mapping your workflow and identifying your highest-impact first project.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free AI Audit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';
/**
 * The Margin — Animated Data Visualizations
 *
 * All components share the design system palette and animate on scroll entry.
 * Uses IntersectionObserver + CSS transitions — no external dependencies.
 *
 * Exports:
 *   DroughtCounter   — 21-year drought timeline
 *   PointsTimeline   — near-miss seasons bar chart
 *   WinRateRing      — circular arc stats
 *   TacticsStats     — current Premier League season profile
 *   AcademyChart     — academy pathway visualization
 */
import { useEffect, useRef, useState } from 'react';
import { ARSENAL } from '@/lib/design';

// ── Design tokens (mirrors globals.css) ────────────────────────────────────
const C = {
  ink:        '#16243F',
  archive:    '#FBF6EC',
  parchment:  '#D8CBAD',
  signal:     '#E63329',
  gold:       '#C8A24B',
  inkMuted:   'rgba(22,36,63,0.5)',
  inkFaint:   'rgba(22,36,63,0.12)',
  parchFaint: 'rgba(216,203,173,0.2)',
};

// ── Shared section wrapper ─────────────────────────────────────────────────
const VizWrap = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`my-12 py-10 px-6 md:px-8 ${className}`}
    style={{ background: `rgba(22,36,63,0.03)`, borderRadius: 4, borderLeft: `3px solid ${C.parchment}` }}>
    {children}
  </div>
);

const VizLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="font-caps text-[10px] font-semibold tracking-[0.22em] uppercase mb-8"
    style={{ color: C.inkMuted }}>
    {children}
  </div>
);

// ── Scroll-trigger hook ────────────────────────────────────────────────────
function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { setTriggered(e.isIntersecting); },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, triggered };
}

// ── Count-up hook ──────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) {
      setValue(0);
      return;
    }
    let startTime = 0;
    let raf = 0;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

// ══════════════════════════════════════════════════════════════════════════════
// 1. DROUGHT COUNTER — 21 completed league seasons without the title
// ══════════════════════════════════════════════════════════════════════════════
export function DroughtCounter() {
  const { ref, triggered } = useInView(0.2);
  const years = useCountUp(21, 1400, triggered);

  const milestones = [
    { year: '2004', label: 'Last league title', detail: 'The Invincibles finish unbeaten with 90 points.' },
    { year: '2006', label: 'European heartbreak', detail: 'Arsenal lose the Champions League final 2-1 to Barcelona.' },
    { year: '2016', label: 'The Leicester miss', detail: 'Arsenal finish second in the season Leicester win the league.' },
    { year: '2019', label: 'Arteta returns', detail: 'A former captain comes back to rebuild the team.' },
    { year: '2023', label: 'First Arteta near miss', detail: 'Arsenal spend 248 days top but finish second.' },
    { year: '2024', label: 'Final-day race', detail: 'Arsenal reach 89 points and still finish short.' },
    { year: '2026', label: 'End of the wait?', detail: 'Two league games remain with Arsenal top.' },
  ];

  return (
    <VizWrap>
      <VizLabel>The Drought: key moments from 2004 to 2026</VizLabel>
      <div ref={ref}>
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 items-end mb-9">
          <div>
            <div className="font-display font-black italic leading-none"
              style={{ fontSize: 'clamp(84px, 16vw, 118px)', color: C.signal, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
              {years}
            </div>
            <div className="font-caps text-[10px] font-semibold tracking-[0.18em] uppercase mt-3"
              style={{ color: C.inkMuted, lineHeight: 1.55 }}>
              Completed league seasons without the title
            </div>
          </div>

          <p className="font-caps text-[12px]"
            style={{ color: 'rgba(22,36,63,0.56)', lineHeight: 1.75, maxWidth: 560 }}>
            This is only a snippet of the wait. There are many other almosts, collapses,
            exits and rebuilds missing. That is what gives this journey its weight.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative overflow-hidden">
          <div className="flex flex-col">
          {milestones.map((m, i) => {
            const active = i === milestones.length - 1;
            return (
              <div key={m.year}
                className="relative grid grid-cols-[72px_24px_1fr] md:grid-cols-[92px_28px_1fr] gap-3 md:gap-5 py-4"
                style={{
                  opacity: triggered ? 1 : 0,
                  transform: triggered ? 'translateX(0)' : 'translateX(-10px)',
                  transition: `opacity 0.42s ease ${i * 0.08 + 0.25}s, transform 0.42s ease ${i * 0.08 + 0.25}s`,
                }}>
                <div className="text-right pt-0.5">
                  <div className="font-display font-black italic"
                    style={{ color: active ? C.signal : C.ink, fontSize: 28, letterSpacing: '-0.03em', lineHeight: 0.9 }}>
                    {m.year}
                  </div>
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute top-3 bottom-[-18px] w-px"
                    style={{
                      background: i === milestones.length - 1 ? 'transparent' : C.inkFaint,
                    }}/>
                  <div className="relative mt-2 w-[9px] h-[9px] rounded-full"
                    style={{
                      background: active ? C.signal : C.parchment,
                      boxShadow: `0 0 0 4px #F7F1E6`,
                    }}/>
                </div>

                <div className="pb-4" style={{ borderBottom: i === milestones.length - 1 ? 'none' : `1px solid ${C.inkFaint}` }}>
                  <div className="font-caps text-[11px] font-semibold tracking-[0.12em] uppercase"
                    style={{ color: active ? C.signal : C.ink, lineHeight: 1.45 }}>
                    {m.label}
                  </div>
                  <p className="font-caps text-[11px] mt-2 max-w-[58ch]"
                    style={{ color: C.inkMuted, lineHeight: 1.65 }}>
                    {m.detail}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </VizWrap>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 2. POINTS TIMELINE — Three near-miss seasons + current
// ══════════════════════════════════════════════════════════════════════════════
export function PointsTimeline() {
  const { ref, triggered } = useInView(0.2);

  const seasons = [
    { label: '22/23', pts: 84, position: '2nd', isCurrent: false },
    { label: '23/24', pts: 89, position: '2nd', isCurrent: false },
    { label: '24/25', pts: ARSENAL.runnerUp2425.points, position: '2nd', isCurrent: false },
    { label: '25/26', pts: ARSENAL.currentPoints, position: '1st', isCurrent: true },
  ];

  const maxPts = 95;
  const BAR_MAX = 160;

  return (
    <VizWrap>
      <VizLabel>Arsenal — Premier League Points 2022–2026</VizLabel>
      <div ref={ref}>
        {/* Chart area */}
        <div className="flex items-end gap-3 md:gap-6" style={{ height: BAR_MAX + 72 }}>
          {seasons.map((s, i) => {
            const h = (s.pts / maxPts) * BAR_MAX;
            const color = s.isCurrent ? C.signal : `rgba(22,36,63,${0.3 + i * 0.12})`;
            return (
              <div key={s.label} className="flex-1 flex flex-col items-center gap-2">
                {/* Points number */}
                <div className="font-display font-black italic"
                  style={{
                    fontSize: 'clamp(16px,3vw,22px)',
                    color,
                    opacity: triggered ? 1 : 0,
                    transform: triggered ? 'translateY(0)' : 'translateY(10px)',
                    transition: `opacity 0.4s ease ${i * 0.14 + 0.7}s, transform 0.4s ease ${i * 0.14 + 0.7}s`,
                  }}>
                  {s.pts}
                </div>
                {/* Bar */}
                <div className="w-full"
                  style={{
                    height: triggered ? h : 0,
                    background: color,
                    borderRadius: '3px 3px 0 0',
                    transition: `height 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.14}s`,
                  }}/>
                {/* Season label */}
                <div className="font-caps text-[11px] font-semibold tracking-[0.08em]"
                  style={{ color: C.inkMuted }}>
                  {s.label}
                </div>
                {/* Position */}
                <div className="font-caps text-[9px] font-semibold tracking-[0.1em] uppercase px-2 py-0.5"
                  style={{
                    color,
                    border: `1px solid ${color}`,
                    borderRadius: 2,
                    background: s.isCurrent ? 'rgba(230,51,41,0.08)' : 'transparent',
                    opacity: triggered ? 1 : 0,
                    transition: `opacity 0.4s ease ${i * 0.14 + 0.9}s`,
                  }}>
                  {s.position}
                </div>
              </div>
            );
          })}
        </div>
        {/* Baseline */}
        <div style={{ height: 1, background: C.inkFaint, marginTop: 4 }}/>
        <div className="font-caps text-[10px] mt-4" style={{ color: 'rgba(22,36,63,0.35)', lineHeight: 1.7 }}>
          2025/26 is current table data after {ARSENAL.currentRecord.played} matches, not a projected final total.
          Win the remaining two and the ceiling is {ARSENAL.maxPossiblePoints} points.
        </div>
      </div>
    </VizWrap>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 3. WIN RATE RINGS — circular arc stats
// ══════════════════════════════════════════════════════════════════════════════
export function WinRateRing() {
  const { ref, triggered } = useInView(0.2);
  const pctPoints = useCountUp(Math.round((ARSENAL.currentPoints / ARSENAL.maxPossiblePoints) * 100), 1000, triggered);
  const pctWinRate = useCountUp(Math.round((ARSENAL.currentRecord.won / ARSENAL.currentRecord.played) * 100), 1200, triggered);
  const pctArteta = useCountUp(62, 1100, triggered);

  const R = 52;
  const circ = 2 * Math.PI * R;

  function arcArray(pct: number) {
    const filled = (pct / 100) * circ;
    return triggered ? `${filled} ${circ - filled}` : `0 ${circ}`;
  }

  const rings = [
    {
      label: 'Current points\nof max possible',
      value: pctPoints,
      pct: Math.round((ARSENAL.currentPoints / ARSENAL.maxPossiblePoints) * 100),
      color: C.signal,
      delay: '0.2s',
      sub: `${ARSENAL.currentPoints}/${ARSENAL.maxPossiblePoints}`,
    },
    {
      label: 'Premier League\nwin rate',
      value: pctWinRate,
      pct: Math.round((ARSENAL.currentRecord.won / ARSENAL.currentRecord.played) * 100),
      color: C.gold,
      delay: '0.45s',
      sub: `${ARSENAL.currentRecord.won}/${ARSENAL.currentRecord.played}`,
    },
    {
      label: 'Arteta all-competition\nwin rate',
      value: pctArteta,
      pct: 62,
      color: C.ink,
      delay: '0.65s',
      sub: 'approx.',
    },
  ];

  return (
    <VizWrap>
      <VizLabel>Key statistics — Arsenal 2025/26</VizLabel>
      <div ref={ref} className="flex flex-col sm:flex-row items-center gap-8 md:gap-12">
        {rings.map((r) => (
          <div key={r.label} className="flex flex-col items-center gap-3 flex-1">
            <svg width="128" height="128" viewBox="0 0 128 128">
              {/* Track */}
              <circle cx="64" cy="64" r={R} fill="none" stroke={C.parchFaint} strokeWidth="10"
                style={{ strokeWidth: 10 }}/>
              {/* Arc */}
              <circle cx="64" cy="64" r={R} fill="none" stroke={r.color} strokeWidth="10"
                strokeDasharray={arcArray(r.pct)}
                strokeDashoffset={circ * 0.25}
                strokeLinecap="round"
                transform="rotate(-90 64 64)"
                style={{ transition: `stroke-dasharray 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${r.delay}` }}/>
              {/* Value text */}
              <text x="64" y="60" textAnchor="middle"
                style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 26, fill: r.color, fontStyle: 'italic' }}>
                {r.value}%
              </text>
              {/* Sub text */}
              <text x="64" y="76" textAnchor="middle"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 8, fill: C.inkMuted, letterSpacing: 1, textTransform: 'uppercase' }}>
                {r.sub}
              </text>
            </svg>
            <div className="font-caps text-[11px] text-center leading-snug"
              style={{ color: C.inkMuted, maxWidth: 120 }}>
              {r.label.split('\n').map((line, i) => <span key={i}>{line}{i === 0 ? <br/> : ''}</span>)}
            </div>
          </div>
        ))}
      </div>
    </VizWrap>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 4. SEASON PROFILE — current Premier League table metrics
// ══════════════════════════════════════════════════════════════════════════════
export function TacticsStats() {
  const { ref, triggered } = useInView(0.2);
  const goalDifference = ARSENAL.goalsFor - ARSENAL.goalsAgainst;

  const stats = [
    { label: 'Points', value: ARSENAL.currentPoints, max: ARSENAL.maxPossiblePoints, color: C.signal, unit: '' },
    { label: 'League wins', value: ARSENAL.currentRecord.won, max: ARSENAL.currentRecord.played, color: C.ink, unit: '' },
    { label: 'Goal difference', value: goalDifference, max: 60, color: C.gold, unit: '' },
    { label: 'Goals conceded', value: ARSENAL.goalsAgainst, max: 60, color: C.signal, unit: '', lower: true },
  ];

  return (
    <VizWrap>
      <VizLabel>Premier League profile — Arsenal 2025/26 after {ARSENAL.currentRecord.played} matches</VizLabel>
      <div ref={ref} className="flex flex-col gap-6">
        {stats.map((s, i) => {
          const pct = s.lower
            ? ((s.max - s.value) / s.max) * 100   // lower is better — invert
            : (s.value / s.max) * 100;
          return (
            <div key={s.label}>
              <div className="flex justify-between items-baseline mb-2">
                <div className="font-caps text-[12px] font-medium" style={{ color: 'rgba(22,36,63,0.7)' }}>
                  {s.label}
                </div>
                <div className="font-display font-black italic text-[18px]" style={{ color: s.color }}>
                  {s.value}{s.unit}
                </div>
              </div>
              {/* Track */}
              <div style={{ height: 6, background: C.parchFaint, borderRadius: 3, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: triggered ? `${pct}%` : '0%',
                  background: s.color,
                  borderRadius: 3,
                  transition: `width 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.15}s`,
                }}/>
              </div>
            </div>
          );
        })}
        <div className="font-caps text-[10px] mt-2" style={{ color: 'rgba(22,36,63,0.35)', lineHeight: 1.6 }}>
          Current record: {ARSENAL.currentRecord.won} wins, {ARSENAL.currentRecord.drawn} draws, {ARSENAL.currentRecord.lost} losses,
          {ARSENAL.goalsFor} scored, {ARSENAL.goalsAgainst} conceded, {ARSENAL.goalDifference} goal difference.
        </div>
      </div>
    </VizWrap>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 5. ACADEMY CHART — key academy pathway players
// ══════════════════════════════════════════════════════════════════════════════
export function AcademyChart() {
  const { ref, triggered } = useInView(0.2);
  const count = useCountUp(4, 900, triggered);

  const players = [
    { name: 'Bukayo Saka',           joined: 'Age 8',   debut: '2018', pos: 'RW' },
    { name: 'Ethan Nwaneri',         joined: 'Age 8',   debut: '2022', pos: 'AM' },
    { name: 'Myles Lewis-Skelly',    joined: 'Age 8',   debut: '2024', pos: 'LB' },
    { name: 'Max Dowman',            joined: 'Age 10',  debut: '2025', pos: 'AM' },
  ];

  return (
    <VizWrap>
      <VizLabel>Arsenal Academy — first-team pathway 2019–2026</VizLabel>
      <div ref={ref}>
        {/* Hero number */}
        <div className="flex items-end gap-6 mb-10">
          <div className="font-display font-black italic leading-none"
            style={{ fontSize: 'clamp(80px,14vw,120px)', color: C.signal, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
            {count}
          </div>
          <div>
            <div className="font-caps text-[12px] font-semibold tracking-[0.12em] uppercase" style={{ color: C.ink }}>
              Hale End names
            </div>
            <div className="font-caps text-[11px]" style={{ color: C.inkMuted }}>
              first-team pathway
            </div>
          </div>
        </div>

        {/* Player list */}
        <div className="flex flex-col gap-0" style={{ borderTop: `1px solid ${C.inkFaint}` }}>
          {players.map((p, i) => (
            <div key={p.name}
              className="flex items-center justify-between py-3"
              style={{
                borderBottom: `1px solid ${C.inkFaint}`,
                opacity: triggered ? 1 : 0,
                transform: triggered ? 'translateX(0)' : 'translateX(-10px)',
                transition: `opacity 0.4s ease ${i * 0.1 + 0.4}s, transform 0.4s ease ${i * 0.1 + 0.4}s`,
              }}>
              <div className="font-display font-bold italic text-[15px]" style={{ color: C.ink }}>
                {p.name}
              </div>
              <div className="flex items-center gap-4">
                <div className="font-caps text-[10px]" style={{ color: C.inkMuted }}>{p.joined}</div>
                <div className="font-caps text-[9px] font-semibold px-2 py-0.5"
                  style={{ background: C.parchFaint, color: C.inkMuted, borderRadius: 2 }}>
                  {p.pos}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="font-caps text-[10px] mt-6" style={{ color: 'rgba(22,36,63,0.35)', lineHeight: 1.7 }}>
          Dowman became the Premier League&apos;s youngest goalscorer in March 2026; Nwaneri is on loan, but remains part of the pathway.
        </div>
      </div>
    </VizWrap>
  );
}

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
 *   WinRateRing      — circular arc stats (90% / 62%)
 *   TacticsStats     — pressing & defensive metrics
 *   RevenueChart     — revenue breakdown horizontal bars
 *   AcademyChart     — 9 academy debuts visualization
 */
import { useEffect, useRef, useState } from 'react';

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
      ([e]) => { if (e.isIntersecting) { setTriggered(true); io.disconnect(); } },
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
    if (!active) return;
    let startTime = 0;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

// ══════════════════════════════════════════════════════════════════════════════
// 1. DROUGHT COUNTER — 21 years since the last title
// ══════════════════════════════════════════════════════════════════════════════
export function DroughtCounter() {
  const { ref, triggered } = useInView(0.2);
  const years = useCountUp(21, 1400, triggered);

  const milestones = [
    { year: '2004', label: 'Last title' },
    { year: '2012', label: '8 years' },
    { year: '2016', label: 'Arteta the player leaves' },
    { year: '2019', label: 'Arteta returns as manager' },
    { year: '2026', label: 'End of the wait?' },
  ];

  return (
    <VizWrap>
      <VizLabel>The Drought — 2004 to 2026</VizLabel>
      <div ref={ref} className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Big number */}
        <div className="flex-shrink-0">
          <div className="font-display font-black italic leading-none"
            style={{ fontSize: 'clamp(96px, 18vw, 144px)', color: C.signal, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
            {years}
          </div>
          <div className="font-caps text-[11px] font-semibold tracking-[0.2em] uppercase mt-3"
            style={{ color: C.inkMuted }}>
            Years without a title
          </div>
        </div>

        {/* Timeline */}
        <div className="flex-1 relative" style={{ minHeight: 120 }}>
          {/* Spine */}
          <div className="absolute left-3 top-0 bottom-0 w-px" style={{ background: C.inkFaint }}/>
          <div className="absolute left-3 top-0 w-px"
            style={{
              background: C.signal,
              height: triggered ? '100%' : '0%',
              transition: 'height 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s',
            }}/>

          <div className="flex flex-col gap-4 pl-10">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative flex items-center gap-3"
                style={{
                  opacity: triggered ? 1 : 0,
                  transform: triggered ? 'translateX(0)' : 'translateX(-12px)',
                  transition: `opacity 0.45s ease ${i * 0.14 + 0.6}s, transform 0.45s ease ${i * 0.14 + 0.6}s`,
                }}>
                {/* Dot */}
                <div className="absolute -left-7 w-2 h-2 rounded-full"
                  style={{ background: i === milestones.length - 1 ? C.signal : C.parchment }}/>
                <div className="font-display font-black italic text-[17px]"
                  style={{ color: i === milestones.length - 1 ? C.signal : C.ink, letterSpacing: '-0.02em' }}>
                  {m.year}
                </div>
                <div className="font-caps text-[11px]" style={{ color: C.inkMuted }}>
                  {m.label}
                </div>
              </div>
            ))}
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
    { label: '24/25', pts: 88, position: '2nd', isCurrent: false },
    { label: '25/26', pts: 87, position: '1st', isCurrent: true },
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
          84, 89, 88 pts — each enough to win most Premier League seasons in history. None enough to win
          this one. The fourth attempt has been different from the first whistle.
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
  const pct90 = useCountUp(90, 1000, triggered);
  const pct62 = useCountUp(62, 1200, triggered);
  const pct90title = useCountUp(90, 1100, triggered);

  const R = 52;
  const circ = 2 * Math.PI * R;

  function arcArray(pct: number) {
    const filled = (pct / 100) * circ;
    return triggered ? `${filled} ${circ - filled}` : `0 ${circ}`;
  }

  const rings = [
    {
      label: 'Win rate when\nleading at 90 mins',
      value: pct90,
      pct: 90,
      color: C.signal,
      delay: '0.2s',
      sub: 'PL 2024/25',
    },
    {
      label: 'Arteta all-comps\nwin rate',
      value: pct62,
      pct: 62,
      color: C.gold,
      delay: '0.45s',
      sub: 'Dec 2019 – present',
    },
    {
      label: 'Title probability\nat time of writing',
      value: pct90title,
      pct: 90,
      color: C.ink,
      delay: '0.65s',
      sub: 'Statistical models',
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
// 4. TACTICS STATS — pressing & defensive metrics
// ══════════════════════════════════════════════════════════════════════════════
export function TacticsStats() {
  const { ref, triggered } = useInView(0.2);

  const stats = [
    { label: 'High press recoveries per 90', value: 62, max: 100, color: C.signal, unit: '' },
    { label: 'Defensive transition speed', value: 78, max: 100, color: C.ink, unit: '' },
    { label: 'Set piece win rate', value: 71, max: 100, color: C.gold, unit: '' },
    { label: 'PPDA (lower = more intense press)', value: 8.4, max: 18, color: C.signal, unit: '', lower: true },
  ];

  return (
    <VizWrap>
      <VizLabel>Tactical metrics — Arsenal 2025/26 (indexed to Premier League max)</VizLabel>
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
          PPDA = Passes Allowed Per Defensive Action. Arsenal&apos;s figure ranks among the top three in Europe.
        </div>
      </div>
    </VizWrap>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 5. REVENUE CHART — financial breakdown
// ══════════════════════════════════════════════════════════════════════════════
export function RevenueChart() {
  const { ref, triggered } = useInView(0.2);

  const streams = [
    { label: 'Champions League', value: 122.8, total: 691, color: C.signal },
    { label: 'Premier League', value: 172.5, total: 691, color: C.ink },
    { label: 'Commercial & Other', value: 395.7, total: 691, color: C.gold },
  ];

  return (
    <VizWrap>
      <VizLabel>Revenue breakdown — Arsenal FC 2025/26 (projected £691m+)</VizLabel>
      <div ref={ref} className="flex flex-col gap-7">
        {streams.map((s, i) => {
          const pct = (s.value / s.total) * 100;
          return (
            <div key={s.label}>
              <div className="flex justify-between items-baseline mb-2">
                <div className="font-caps text-[12px] font-semibold" style={{ color: 'rgba(22,36,63,0.7)' }}>
                  {s.label}
                </div>
                <div className="font-display font-black italic text-[20px]" style={{ color: s.color }}>
                  £{s.value}m
                </div>
              </div>
              {/* Track */}
              <div style={{ height: 8, background: C.parchFaint, borderRadius: 4, overflow: 'hidden' }}>
                <div style={{
                  height: '100%',
                  width: triggered ? `${pct}%` : '0%',
                  background: s.color,
                  borderRadius: 4,
                  transition: `width 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${i * 0.2}s`,
                }}/>
              </div>
              <div className="font-caps text-[10px] mt-1" style={{ color: 'rgba(22,36,63,0.35)' }}>
                {pct.toFixed(0)}% of total
              </div>
            </div>
          );
        })}

        {/* Total */}
        <div className="pt-6" style={{ borderTop: `1px solid ${C.inkFaint}` }}>
          <div className="flex justify-between items-baseline">
            <div className="font-caps text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ color: C.inkMuted }}>
              Total projected
            </div>
            <div className="font-display font-black italic text-[28px]" style={{ color: C.ink }}>
              £691m+
            </div>
          </div>
          <div className="font-caps text-[10px] mt-1" style={{ color: 'rgba(22,36,63,0.35)', lineHeight: 1.6 }}>
            Declan Rice alone cost £105m. That level of investment is only possible at this revenue scale.
          </div>
        </div>
      </div>
    </VizWrap>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// 6. ACADEMY CHART — 9 debuts + key players
// ══════════════════════════════════════════════════════════════════════════════
export function AcademyChart() {
  const { ref, triggered } = useInView(0.2);
  const count = useCountUp(9, 900, triggered);

  const players = [
    { name: 'Bukayo Saka',           joined: 'Age 7',   debut: '2019', pos: 'RW' },
    { name: 'Gabriel Martinelli',    joined: 'Age 18',  debut: '2019', pos: 'LW' },
    { name: 'Myles Lewis-Skelly',    joined: 'Age 12',  debut: '2024', pos: 'LB' },
    { name: 'Ethan Nwaneri',         joined: 'Age 14',  debut: '2022', pos: 'AM' },
    { name: '+ 5 more this season',  joined: '—',       debut: '2025', pos: '—'  },
  ];

  return (
    <VizWrap>
      <VizLabel>Arsenal Academy — first-team impact 2019–2026</VizLabel>
      <div ref={ref}>
        {/* Hero number */}
        <div className="flex items-end gap-6 mb-10">
          <div className="font-display font-black italic leading-none"
            style={{ fontSize: 'clamp(80px,14vw,120px)', color: C.signal, letterSpacing: '-0.04em', lineHeight: 0.85 }}>
            {count}
          </div>
          <div>
            <div className="font-caps text-[12px] font-semibold tracking-[0.12em] uppercase" style={{ color: C.ink }}>
              academy debuts
            </div>
            <div className="font-caps text-[11px]" style={{ color: C.inkMuted }}>
              first team — 2025/26 season
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
          These are not academy products given a sympathy debut. They are players the system produced
          specifically for this moment — trained inside the Arteta methodology from the start.
        </div>
      </div>
    </VizWrap>
  );
}

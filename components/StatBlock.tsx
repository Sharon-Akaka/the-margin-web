interface StatBlockProps {
  stat:    string;
  label:   string;
  sub?:    string;
  accent?: 'signal' | 'gold' | 'ink';
}

const ACCENT_COLORS = {
  signal: '#E63329',
  gold:   '#C8A24B',
  ink:    '#16243F',
};

/**
 * Large pull-out stat used inline in article text.
 * Mirrors the HeroStat Remotion component in web form.
 */
export function StatBlock({ stat, label, sub, accent = 'signal' }: StatBlockProps) {
  const color = ACCENT_COLORS[accent];
  return (
    <div className="my-10 px-8 py-8 relative bg-ink/5 rounded-r"
      style={{
        borderLeft:   `3px solid ${color}`,
      }}>
      {/* Big stat number */}
      <div className="tm-display mb-2"
        style={{ fontSize: 'clamp(64px, 14vw, 96px)', color, letterSpacing: '-0.03em', lineHeight: 0.88 }}>
        {stat}
      </div>
      {/* Label */}
      <div className="font-display italic font-bold leading-tight mb-1 text-ink"
        style={{ fontSize: 'clamp(20px, 4vw, 28px)', lineHeight: 1.1 }}>
        {label}
      </div>
      {/* Sub */}
      {sub && (
        <div className="font-caps text-[12px] font-medium tracking-[0.12em] uppercase mt-2 text-inkMuted">
          {sub}
        </div>
      )}
    </div>
  );
}

/**
 * Compact inline stat — sits within a paragraph.
 */
export function InlineStat({ value, label }: { value: string; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-1.5 mx-1">
      <span className="font-mono font-semibold text-signal" style={{ fontSize: '1.05em' }}>{value}</span>
      <span className="font-caps text-[11px] tracking-[0.08em] uppercase text-ink/60">{label}</span>
    </span>
  );
}

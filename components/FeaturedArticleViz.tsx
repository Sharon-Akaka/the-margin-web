'use client';

import { useEffect, useRef, useState } from 'react';
import { ARSENAL } from '@/lib/design';

const seasons = [
  { label: '22/23', points: 84, result: '2nd' },
  { label: '23/24', points: 89, result: '2nd' },
  { label: '24/25', points: ARSENAL.runnerUp2425.points, result: '2nd' },
  { label: '25/26', points: ARSENAL.currentPoints, result: '1st' },
];

export function FeaturedArticleViz() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{
        minHeight: 420,
        background: '#16243F',
        borderRadius: 6,
        boxShadow: '0 24px 80px rgba(22,36,63,0.18)',
      }}>
      <div className="absolute inset-x-0 top-0 p-6">
        <div className="font-caps font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'rgba(200,162,75,0.72)', fontSize: 10 }}>
          Arsenal title race
        </div>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <div className="font-display font-black italic leading-none"
              style={{ color: '#FBF6EC', fontSize: 48, letterSpacing: '-0.04em' }}>
              {ARSENAL.currentPoints}
            </div>
            <div className="font-caps font-semibold uppercase tracking-[0.14em] mt-2"
              style={{ color: 'rgba(251,246,236,0.42)', fontSize: 9 }}>
              points now
            </div>
          </div>
          <div className="text-right">
            <div className="font-display font-black italic leading-none"
              style={{ color: '#E63329', fontSize: 28, letterSpacing: '-0.03em' }}>
              {ARSENAL.maxPossiblePoints}
            </div>
            <div className="font-caps font-semibold uppercase tracking-[0.14em] mt-2"
              style={{ color: 'rgba(251,246,236,0.36)', fontSize: 8 }}>
              max possible
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-8">
        <div className="flex items-end gap-3" style={{ height: 175 }}>
          {seasons.map((season, index) => {
            const height = (season.points / 95) * 145;
            const isCurrent = season.result === '1st';

            return (
              <div key={season.label} className="flex-1 flex flex-col items-center gap-2">
                <div className="font-display font-black italic"
                  style={{
                    color: isCurrent ? '#E63329' : 'rgba(251,246,236,0.7)',
                    fontSize: 21,
                    opacity: active ? 1 : 0,
                    transform: active ? 'translateY(0)' : 'translateY(8px)',
                    transition: `opacity 0.35s ease ${index * 0.12 + 0.45}s, transform 0.35s ease ${index * 0.12 + 0.45}s`,
                  }}>
                  {season.points}
                </div>
                <div className="w-full"
                  style={{
                    height: active ? height : 0,
                    background: isCurrent ? '#E63329' : 'rgba(216,203,173,0.36)',
                    borderRadius: '4px 4px 0 0',
                    transition: `height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.12}s`,
                  }}
                />
                <div className="font-caps font-semibold tracking-[0.08em]"
                  style={{ color: 'rgba(251,246,236,0.42)', fontSize: 10 }}>
                  {season.label}
                </div>
                <div className="font-caps font-semibold uppercase tracking-[0.08em]"
                  style={{ color: isCurrent ? '#E63329' : 'rgba(251,246,236,0.34)', fontSize: 9 }}>
                  {season.result}
                </div>
              </div>
            );
          })}
        </div>

        <p className="font-caps mt-6"
          style={{ color: 'rgba(251,246,236,0.48)', fontSize: 11, lineHeight: 1.7 }}>
          Live table after {ARSENAL.currentRecord.played} matches. Two league games left.
        </p>
      </div>
    </div>
  );
}

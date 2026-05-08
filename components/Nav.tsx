'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="tm-nav">

      {/* Logo — bar chart + pin symbol | divider | wordmark */}
      <Link href="/" className="flex items-center no-underline" style={{ gap: 11 }}>

        {/* Brand symbol: bar chart with pin on tallest bar */}
        <svg viewBox="0 0 96 96" width="34" height="34" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
          <rect x="8"  y="68" width="13" height="14" rx="2" fill="#D8CBAD" opacity="0.35"/>
          <rect x="26" y="56" width="13" height="26" rx="2" fill="#D8CBAD" opacity="0.50"/>
          <rect x="44" y="42" width="13" height="40" rx="2" fill="#D8CBAD" opacity="0.65"/>
          <rect x="62" y="52" width="13" height="30" rx="2" fill="#D8CBAD" opacity="0.50"/>
          <rect x="74" y="24" width="6"  height="58" rx="2" fill="#E63329"/>
          <circle cx="77" cy="18" r="8"  fill="none" stroke="#E63329" strokeWidth="2.5"/>
          <circle cx="77" cy="18" r="3"  fill="#FBF6EC"/>
          <line x1="6" y1="82" x2="90" y2="82" stroke="rgba(200,162,75,0.3)" strokeWidth="1"/>
        </svg>

        {/* Vertical signal divider */}
        <div style={{ width: 1.5, height: 38, background: '#E63329', opacity: 0.6, flexShrink: 0 }} aria-hidden="true"/>

        {/* Wordmark: "The" small / "Margin." large — only the "a" in signal red */}
        <div>
          <div className="tm-wordmark-the">The</div>
          <div className="tm-wordmark">
            M<span className="tm-wordmark-mark">a</span>rgin.
          </div>
          {/* Gold rule + byline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
            <div style={{ width: 18, height: 1, background: '#C8A24B', opacity: 0.65 }}/>
            <div className="font-caps font-semibold uppercase"
              style={{ fontSize: 7, color: 'rgba(200,162,75,0.65)', letterSpacing: '0.18em' }}>
              by Sharon Akaka
            </div>
          </div>
        </div>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="tm-nav-link">Home</Link>
        <Link href="/articles/arsenal-2025" className="tm-nav-link">Articles</Link>
        <Link href="/about" className="tm-nav-link">About</Link>
        <a href="#subscribe" className="tm-nav-subscribe">Subscribe</a>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className="block w-6 h-0.5 transition-all" style={{ background: '#FBF6EC' }}/>
        <span className="block w-6 h-0.5 transition-all" style={{ background: '#FBF6EC' }}/>
        <span className="block w-4 h-0.5 transition-all" style={{ background: '#FBF6EC' }}/>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 flex flex-col gap-0"
          style={{ background: 'rgba(22,36,63,0.98)', borderBottom: '1px solid rgba(200,162,75,0.15)' }}>
          <Link href="/" onClick={() => setOpen(false)}
            className="px-8 py-4 font-caps text-[13px] font-medium tracking-[0.1em] uppercase"
            style={{ color: 'rgba(251,246,236,0.7)', borderBottom: '1px solid rgba(216,203,173,0.08)' }}>
            Home
          </Link>
          <Link href="/articles/arsenal-2025" onClick={() => setOpen(false)}
            className="px-8 py-4 font-caps text-[13px] font-medium tracking-[0.1em] uppercase"
            style={{ color: 'rgba(251,246,236,0.7)', borderBottom: '1px solid rgba(216,203,173,0.08)' }}>
            Articles
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}
            className="px-8 py-4 font-caps text-[13px] font-medium tracking-[0.1em] uppercase"
            style={{ color: 'rgba(251,246,236,0.7)', borderBottom: '1px solid rgba(216,203,173,0.08)' }}>
            About
          </Link>
          <a href="#subscribe" onClick={() => setOpen(false)}
            className="px-8 py-4 font-caps text-[13px] font-medium tracking-[0.1em] uppercase"
            style={{ color: '#C8A24B' }}>
            Subscribe
          </a>
        </div>
      )}
    </nav>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="tm-nav">

      {/* Logo — Pin + wordmark from design playbook */}
      <Link href="/" className="flex items-center gap-3 no-underline" style={{ gap: 14 }}>
        {/* Pin mark: circle (dot) + stem */}
        <svg width="16" height="52" viewBox="0 0 16 52" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
          <circle cx="8" cy="8" r="6" stroke="#E63329" strokeWidth="2.5" fill="none"/>
          <rect x="6.25" y="14" width="3.5" height="38" rx="1.5" fill="#E63329"/>
        </svg>

        {/* Wordmark: "The Margin." with "ar" in signal red */}
        <div>
          <div className="tm-wordmark">
            The M<span className="tm-wordmark-mark">a</span>rgin.
          </div>
          {/* Rule + byline */}
          <div style={{ height: 1, background: 'rgba(251,246,236,0.22)', margin: '5px 0 4px' }}/>
          <div className="font-caps font-medium tracking-[0.1em] uppercase"
            style={{ fontSize: 9, color: 'rgba(251,246,236,0.45)', letterSpacing: '0.12em' }}>
            by Sharon Akaka
          </div>
        </div>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/" className="tm-nav-link">
          Home
        </Link>
        <Link href="/articles/arsenal-2025" className="tm-nav-link">
          Articles
        </Link>
        <Link href="/about" className="tm-nav-link">
          About
        </Link>
        <a href="#subscribe" className="tm-nav-subscribe">
          Subscribe
        </a>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className="block w-6 h-0.5 bg-archive transition-all" style={{ background: '#FBF6EC' }}/>
        <span className="block w-6 h-0.5 bg-archive transition-all" style={{ background: '#FBF6EC' }}/>
        <span className="block w-4 h-0.5 bg-archive transition-all" style={{ background: '#FBF6EC' }}/>
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

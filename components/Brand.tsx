import Link from 'next/link';

type Tone = 'signal' | 'gold' | 'archive' | 'ink';

export function Kicker({ children, tone = 'signal', className = '' }: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return <p className={`tm-kicker tm-kicker-${tone} ${className}`}>{children}</p>;
}

export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="13,6 19,12 13,18"/>
    </svg>
  );
}

export function ExternalArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7"/>
      <polyline points="7,7 17,7 17,17"/>
    </svg>
  );
}

export function PrimaryLink({ href, children, className = '' }: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`tm-button tm-button-primary ${className}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="tm-footer">
      <div className="tm-footer-logo">The Margin</div>
      <div className="tm-footer-meta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <a href="mailto:hello@findthemargin.com"
          className="font-caps text-[11px] tracking-[0.08em] transition-opacity hover:opacity-70"
          style={{ color: 'rgba(251,246,236,0.45)' }}>
          hello@findthemargin.com
        </a>
        <span>© 2026 Sharon Akaka</span>
      </div>
    </footer>
  );
}

export function SectionHeader({ children, tone = 'signal' }: {
  children: React.ReactNode;
  tone?: 'signal' | 'gold';
}) {
  return (
    <div className="tm-section-header">
      <Kicker tone={tone}>{children}</Kicker>
      <div className={tone === 'gold' ? 'tm-section-rule tm-section-rule-gold' : 'tm-section-rule'} />
    </div>
  );
}

export function EditorialSection({ children, tone = 'linen' }: {
  children: React.ReactNode;
  tone?: 'linen' | 'ink';
}) {
  return (
    <section className={tone === 'ink' ? 'tm-editorial-section tm-section-ink' : 'tm-editorial-section tm-section-linen'}>
      <div className="tm-container">
        {children}
      </div>
    </section>
  );
}

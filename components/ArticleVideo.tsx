'use client';
import { useEffect, useRef } from 'react';

interface ArticleVideoProps {
  src:      string;
  poster?:  string;
  caption?: string;
}

/**
 * Autoplay-on-scroll portrait video (9:16).
 * Plays when 40% visible, pauses when scrolled past.
 * Muted loop — voiceover is in the article text.
 */
export function ArticleVideo({ src, poster, caption }: ArticleVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {/* autoplay blocked — user will tap */});
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="my-12 mx-auto" style={{ maxWidth: 320 }}>
      {/* Portrait frame — matches 1080×1920 Remotion output */}
      <div className="video-portrait shadow-2xl" style={{ borderRadius: 8, background: '#2C1A0E' }}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop
          muted
          playsInline
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-caps text-[11px] font-medium tracking-[0.1em] uppercase"
          style={{ color: 'rgba(22,36,63,0.45)' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Placeholder shown when the video file hasn't been exported yet.
 * Replace with <ArticleVideo> once Remotion clips are rendered.
 */
export function VideoPlaceholder({ label, caption }: { label: string; caption?: string }) {
  return (
    <figure className="my-12 mx-auto" style={{ maxWidth: 320 }}>
      <div className="video-portrait flex items-center justify-center"
        style={{ background: '#2C1A0E', borderRadius: 8, border: '1px solid rgba(200,162,75,0.2)' }}>
        <div className="text-center px-6">
          {/* Mini logo symbol */}
          <svg viewBox="0 0 96 96" width="48" height="48" className="mx-auto mb-4 opacity-40">
            <rect x="8"  y="62" width="11" height="18" rx="2" fill="#D8CBAD" opacity="0.4"/>
            <rect x="24" y="50" width="11" height="30" rx="2" fill="#D8CBAD" opacity="0.5"/>
            <rect x="40" y="38" width="11" height="42" rx="2" fill="#D8CBAD" opacity="0.65"/>
            <rect x="56" y="54" width="11" height="26" rx="2" fill="#D8CBAD" opacity="0.5"/>
            <rect x="72" y="26" width="11" height="54" rx="2" fill="#E63329"/>
            <circle cx="77.5" cy="22" r="7" fill="#F5EEDE" stroke="#E63329" strokeWidth="2.5"/>
            <circle cx="77.5" cy="22" r="2.5" fill="#E63329"/>
          </svg>
          <div className="font-caps text-[10px] font-medium tracking-[0.14em] uppercase"
            style={{ color: 'rgba(251,246,236,0.35)' }}>
            Video coming soon
          </div>
          <div className="font-display italic text-[13px] mt-2 leading-snug"
            style={{ color: 'rgba(251,246,236,0.5)' }}>
            {label}
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-caps text-[11px] font-medium tracking-[0.1em] uppercase"
          style={{ color: 'rgba(22,36,63,0.45)' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

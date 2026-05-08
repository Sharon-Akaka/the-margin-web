/**
 * The Margin — Web Design Tokens
 *
 * Mirrors the Remotion design system (sketch-fc-reel/src/design/)
 * so the website and video share one visual language.
 */

export const PALETTE = {
  leather:     '#2C1A0E',
  ink:         '#16243F',
  navy:        '#16243F',
  archive:     '#FBF6EC',
  linen:       '#F5EEDE',
  parchment:   '#D8CBAD',
  signal:      '#E63329',
  signalBlush: '#F5A09A',
  gold:        '#C8A24B',
  inkMuted:    'rgba(22,36,63,0.5)',
} as const;

// ── Arsenal 2025/26 article data ──────────────────────────────────────────────
export const ARSENAL = {
  lastTitle:         2004,
  yearsDrought:      21,
  runnerUp2223:      { days: 248,  points: 84  },
  runnerUp2324:      { days: null, points: 89  },
  runnerUp2425:      { days: null, points: 88  },  // update with actuals
  currentPoints:     87,     // live season — update
  leaguePosition:    1,
  goalDifference:    '+52',
  arteta:            { year: 2019, winRate: 0.62 },
  revenue:           730,    // £730m — approx
  academyPlayers:    ['Bukayo Saka', 'Gabriel Martinelli', 'Ethan Nwaneri', 'Myles Lewis-Skelly'],
} as const;

// ── Video clip paths (export from Remotion, place in public/videos/) ──────────
export const CLIPS = {
  hook:       '/videos/s1-hook.mp4',
  wound:      '/videos/s2-wound.mp4',
  evidence:   '/videos/s3-evidence.mp4',
  system:     '/videos/s4-system.mp4',
  scale:      '/videos/s5-scale.mp4',
  generation: '/videos/s6-generation.mp4',
  closer:     '/videos/s7-closer.mp4',
} as const;

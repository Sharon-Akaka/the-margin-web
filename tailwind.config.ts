import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── The Margin palette ────────────────────────────────────────────────
        leather:   '#2C1A0E',
        ink:       '#16243F',
        navy:      '#16243F',
        archive:   '#FBF6EC',
        linen:     '#F5EEDE',
        parchment: '#D8CBAD',
        signal:    '#E63329',
        signalBlush: '#F5A09A',
        gold:      '#C8A24B',
        inkMuted:  'rgba(22,36,63,0.5)',
      },
      fontFamily: {
        display:     ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans:        ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono:        ['JetBrains Mono', 'DM Mono', 'ui-monospace', 'monospace'],
        handwriting: ['Patrick Hand', 'cursive'],
      },
      // Fibonacci spacing scale (px → rem at 16px base)
      spacing: {
        '5':  '0.3125rem',  // 5px
        '8':  '0.5rem',     // 8px
        '13': '0.8125rem',  // 13px
        '21': '1.3125rem',  // 21px
        '34': '2.125rem',   // 34px
        '55': '3.4375rem',  // 55px
        '89': '5.5625rem',  // 89px
        '144':'9rem',       // 144px
      },
    },
  },
  plugins: [],
};

export default config;

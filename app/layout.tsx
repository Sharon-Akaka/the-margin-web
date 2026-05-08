import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | The Margin',
    default:  'The Margin — Data-driven sports analysis by Sharon Akaka',
  },
  description: 'The Margin is a data-driven sports analysis brand. Numbers, context, stories that matter.',
  openGraph: {
    siteName: 'The Margin',
    type:     'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

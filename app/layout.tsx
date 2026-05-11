import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://findthemargin.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | The Margin',
    default:  'The Margin: Data-driven sports analysis by Sharon Akaka',
  },
  description: 'The Margin is Sharon Akaka’s data-driven sports analysis site: numbers, context, and stories that explain what the table alone cannot.',
  applicationName: 'The Margin',
  authors: [{ name: 'Sharon Akaka', url: `${siteUrl}/about` }],
  creator: 'Sharon Akaka',
  publisher: 'The Margin',
  keywords: [
    'The Margin',
    'find the margin',
    'findthemargin',
    'Sharon Akaka',
    'Sharon Akaka The Margin',
    'sports analysis',
    'football data analysis',
    'Premier League analysis',
    'Arsenal analysis',
    'data-driven sports journalism',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'The Margin: Data-driven sports analysis by Sharon Akaka',
    description: 'Numbers, context, and stories that explain what the table alone cannot.',
    url: siteUrl,
    siteName: 'The Margin',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'The Margin: Data-driven sports analysis by Sharon Akaka',
    description: 'Numbers, context, and stories that explain what the table alone cannot.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'The Margin',
        alternateName: ['Find The Margin', 'findthemargin.com'],
        description: metadata.description,
        publisher: { '@id': `${siteUrl}/#person` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Sharon Akaka',
        url: `${siteUrl}/about`,
        email: 'hello@findthemargin.com',
        jobTitle: 'Founder of The Margin',
        worksFor: {
          '@type': 'Organization',
          name: 'The Margin',
          url: siteUrl,
        },
        sameAs: [
          'https://linkedin.com/in/sharon-akaka',
          'https://themargin.substack.com',
          'https://instagram.com/themargin_',
          'https://tiktok.com/@themargin_',
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'The Margin',
        url: siteUrl,
        email: 'hello@findthemargin.com',
        founder: { '@id': `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

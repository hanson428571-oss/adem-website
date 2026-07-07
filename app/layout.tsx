import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ademtrust.ai'),
  title: 'ADEM | Trusted Infrastructure for the Physical AI Era',
  description: 'ADEM builds trusted real-world data infrastructure through drone inspection, AI analysis, and verification systems.',
  icons: {
    icon: [
      { url: '/favicon.png?v=20260707', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.png?v=20260707',
    apple: '/favicon.png?v=20260707',
  },
  openGraph: {
    title: 'ADEM | Trusted Infrastructure for the Physical AI Era',
    description: 'ADEM builds trusted real-world data infrastructure through drone inspection, AI analysis, and verification systems.',
    url: 'https://ademtrust.ai',
    siteName: 'ADEM',
    images: [
      {
        url: '/adem-logo-dark.png',
        width: 484,
        height: 193,
        alt: 'ADEM logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADEM | Trusted Infrastructure for the Physical AI Era',
    description: 'ADEM builds trusted real-world data infrastructure through drone inspection, AI analysis, and verification systems.',
    images: ['/adem-logo-dark.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADEM | Trusted Infrastructure for the Physical AI Era',
  description: 'ADEM builds trusted real-world data infrastructure through drone inspection, AI analysis, and verification systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

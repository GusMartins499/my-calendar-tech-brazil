import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const interFont = Inter({
  variable: '--font-inter',
  preload: true,
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Agenda Tech Brasil',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="pt">
      <body className={`${interFont.variable} antialiased`}>{children}</body>
    </html>
  );
}

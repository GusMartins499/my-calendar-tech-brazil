import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './error';

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
      <body className={`${interFont.variable} antialiased`}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}

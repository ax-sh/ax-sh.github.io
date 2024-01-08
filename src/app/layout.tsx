import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';
import Analytics from '@/app/AnalyticsProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '',
  description: ''
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <Analytics measurementId={'test'} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

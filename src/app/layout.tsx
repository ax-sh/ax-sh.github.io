import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PropsWithChildren } from 'react';
import Analytics, { FontProvider, Providers } from '@/app/Providers';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Axmin Shrestha | Portfolio',
  description:
    'I Develop Creative Websites. Specialize In Aesthetics, Responsive Design, Simplicity, And Utility.'
};

const GOOGLE_ANALYTICS_ID = 'G-N6207193QM';

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <FontProvider />
      <Analytics measurementId={GOOGLE_ANALYTICS_ID} />
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}

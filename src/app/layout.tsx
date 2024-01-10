import type { Metadata } from 'next';

import './globals.css';
import { PropsWithChildren } from 'react';
import Analytics, { FontProvider, Providers } from '@/app/providers';
import { Lato } from 'next/font/google';

// 👇 Configure our font object
const LatoFont = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin']
});

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
      <body className={LatoFont.className}>
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}

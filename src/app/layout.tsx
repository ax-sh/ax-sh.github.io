import type { Metadata } from 'next';

import './globals.css';
import { PropsWithChildren } from 'react';
import Analytics, { Providers } from '@/app/providers';
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <Analytics />
      <body className={LatoFont.className}>
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}

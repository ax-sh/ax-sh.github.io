'use client';

import { GoogleAnalytics } from 'nextjs-google-analytics';
import { GoogleFonts } from 'next-google-fonts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { PropsWithChildren, useLayoutEffect, useState } from 'react';

import { hotjar } from 'react-hotjar';

export default function Analytics({ measurementId }: { measurementId: string }) {
  useLayoutEffect(() => {
    const HJID = 3099426;
    const HJSV = 6;
    hotjar.initialize(HJID, HJSV);
  }, []);
  return <GoogleAnalytics gaMeasurementId={measurementId} trackPageViews />;
}

export function FontProvider() {
  return (
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap' />
  );
}

export function Providers({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

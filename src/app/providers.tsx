'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { PropsWithChildren, useLayoutEffect, useState } from 'react';
import { hotjar } from 'react-hotjar';

const GOOGLE_ANALYTICS_ID = 'G-N6207193QM';
const HOTJAR_ID = 3099426;
const HOTJAR_VERSION = 6;

export default function Analytics() {
  useLayoutEffect(() => {
    hotjar.initialize(HOTJAR_ID, HOTJAR_VERSION);
  }, []);
  return <GoogleAnalytics gaMeasurementId={GOOGLE_ANALYTICS_ID} trackPageViews />;
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

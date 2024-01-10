'use client';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { GoogleFonts } from 'next-google-fonts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { PropsWithChildren } from 'react';

// import { hotjar } from 'react-hotjar';

export default function Analytics({ measurementId }: { measurementId: string }) {
  // useEffect(() => {
  //   hotjar.initialize(HJID, HJSV);
  // }, []);
  return <GoogleAnalytics gaMeasurementId={measurementId} trackPageViews />;
}

export function FontProvider() {
  return (
    <GoogleFonts href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap' />
  );
}

const queryClient = new QueryClient();

export function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

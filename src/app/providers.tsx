"use client";

import type { PropsWithChildren } from "react";
import { useLayoutEffect, useState } from "react";

import { hotjar } from "react-hotjar";

import { GoogleAnalytics } from "nextjs-google-analytics";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const GOOGLE_ANALYTICS_ID = "G-N6207193QM";
const HOTJAR_ID = 3099426;
const HOTJAR_VERSION = 6;

export function Analytics() {
  useLayoutEffect(() => {
    hotjar.initialize({ sv: HOTJAR_VERSION, id: HOTJAR_ID });
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

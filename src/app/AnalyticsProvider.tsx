'use client';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function Analytics({ measurementId }: { measurementId: string }) {
  return <GoogleAnalytics gaMeasurementId={measurementId} trackPageViews />;
}

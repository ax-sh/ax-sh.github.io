'use client';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { GoogleFonts } from 'next-google-fonts';
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

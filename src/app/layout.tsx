import { PropsWithChildren } from "react";

import type { Metadata } from "next";

// eslint-disable-next-line camelcase
import { Josefin_Sans } from "next/font/google";

import Analytics, { Providers } from "@/app/providers";

import "./globals.css";

// eslint-disable-next-line camelcase

const JosefinFont = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Axmin Shrestha | Portfolio",
  description:
    "I Develop Creative Websites. Specialize In Aesthetics, Responsive Design, Simplicity, And Utility."
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <Analytics />
      <body className={JosefinFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

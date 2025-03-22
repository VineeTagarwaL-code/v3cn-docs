import "./globals.css";

import type { Metadata } from "next";
import NextTopLoader from 'nextjs-toploader';
import { Providers } from "@/components/provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "V3CN - Components like never before",
    template: "%s - V3CN",
  },
  description:
    "Animated UI components and effects with love. Built with shadcn/ui and Motion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-zinc-100 dark:bg-[#0C0E10] transition-theme">
        <NextTopLoader 
          color="#892aca"
          showSpinner={false}
          height={3}
          shadow="0 0 10px #892aca,0 0 5px #892aca"
        />
        <Providers>
          <main>{children}</main>
          <Script
            defer
            src="https://stats.vineet.pro/script.js"
            data-website-id="5aa79a6c-9caf-4649-a641-512c273fbe98"
          ></Script>
        </Providers>
      </body>
    </html>
  );
}

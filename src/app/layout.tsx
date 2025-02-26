import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "@/components/provider";

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
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

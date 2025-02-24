import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "@/components/provider";

export const metadata: Metadata = {
  title: {
    default: "KL UI - Modern React Component Library",
    template: "%s - KL UI",
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
        <Providers> {/* Wrap with Client Component */}
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

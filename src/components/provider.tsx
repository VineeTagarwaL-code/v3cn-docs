"use client";

import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider
  attribute="class"
defaultTheme="dark"
enableSystem={false}
>{children}</ThemeProvider>;
}

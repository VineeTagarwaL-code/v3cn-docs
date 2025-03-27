"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme={pathname === '/' ? 'dark' : 'system'}
      enableSystem={pathname !== '/'}
      forcedTheme={pathname === '/' ? 'dark' : undefined}
    >
      {children}
    </ThemeProvider>
  );
}

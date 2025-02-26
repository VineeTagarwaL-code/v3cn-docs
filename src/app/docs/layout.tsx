import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import { SidebarWrapper } from "@/components/custom-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "V3CN - Components like never before",
    template: "%s - V3CN",
  },
  description:
    "Animated UI components and effects with love. Build with shadcn/ui and Motion.",
  keywords: [
    "React",
    "Next.js",
    "Shadcn UI",
    "NextUI",
    "UI Library",
    "Components",
    "TypeScript",
    "Component Library",
    "Motion",
    "Framer Motion",
    "Changelog",
  ],
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarWrapper>{children}</SidebarWrapper>;
}

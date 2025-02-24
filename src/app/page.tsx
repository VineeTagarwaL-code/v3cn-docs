import { ArrowRight, Coffee, Github } from "lucide-react";

import Link from "next/link";
import { Metadata } from "next";
import { ModeToggle } from "@/components/toggle-theme";

export const metadata: Metadata = {
  title: "V3CN- Components like never before",
  description:
    "V3CN is a modern React component library that helps you build the best UI for your web applications.",
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
  ],
  authors: [{ name: "Karrix Lee", url: "https://github.com/vineetagarwal-code" }],
};

export default function Home() {
  return (
    <section>
       <div className="text-red-500">Hi</div> 
    </section>
  );
}
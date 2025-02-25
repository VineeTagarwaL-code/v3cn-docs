import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Introduction",
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
  authors: [
    { name: "Vineet Agarwal", url: "https://github.com/vineetagarwal-code" },
  ],
};

export default function Home() {
  return (
    <section className="space-y-4">
      <div className="flex gap-6 justify-start items-start flex-col mb-10 ">
        <h1 className="text-4xl tracking-wide">V3CN</h1>
        <span className="text-lg dark:text-gray-400">
          Animated UI components like never before. Built using Framer Motion and Love.
        </span>
      </div>
    </section>
  );
}

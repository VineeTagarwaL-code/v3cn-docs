import { ScrollArea } from "@/components/ui/scroll-area";

// Create a client component for rendering the code
export function CodeDisplay({ html }: { html: string }) {
  return (
    <ScrollArea className="h-[500px]">
      <div
        className="p-5 text-sm leading-[1.6rem] bg-zinc-900 dark:bg-transparent rounded-lg [&>pre]:!bg-transparent [&>pre]:!p-0 [&_.line-number]:pr-4 [&_.line-number]:text-zinc-500 [&_.line-number]:border-r [&_.line-number]:border-zinc-700 [&_.line-number]:mr-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </ScrollArea>
  );
}
export const basicUsageRawCode = `"use client";

import { Cursor } from "@/components/cursor";

// Add this in App.tsx
export default function Home() {
  return (
    <>
      <Cursor />
      <div className="flex justify-center items-center h-screen">
        <h1>Hello</h1>
        <p>This is a demo</p>
      </div>
    </>
  );
}
`

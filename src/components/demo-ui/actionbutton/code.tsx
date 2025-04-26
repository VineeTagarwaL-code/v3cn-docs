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

export const basicUsageRawCode = `"use client"
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to the Demo</h1>
        <p className="text-lg text-gray-600">
          Click the button below to start your free trial.
        </p>

        <ActionButton
          text="Start 14-Day Trial"
          size="default"
          bgColor="default"
          textColor="default"
          onClick={() => alert("Trial started!")}
        />
      </div>
    </div>
  );
}`;

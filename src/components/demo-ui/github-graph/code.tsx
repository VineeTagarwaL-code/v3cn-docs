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

export const basicUsageRawCode = `// Import the Component 
   import { GithubGraph } from "@/components/GithubGraph";
 
// Use the Component with custom props
<GithubGraph
  username="vineetagarwal-code" // your github username
  blockMargin={2}
  colorPallete={["#1e1e2f", "#5a3e7a", "#7e5aa2", "#a87cc3", "#d9a9e6"]}
/>;`


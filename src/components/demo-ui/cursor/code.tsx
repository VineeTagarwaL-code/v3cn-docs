import { ScrollArea } from "@/components/ui/scroll-area";
import { codeToHtml } from "shiki";

// export async function GithubGraphDemoCode() {
//   const html = await codeToHtml(githubGraphDemoCode, {
//     lang: "tsx",
//     theme: "min-dark",
//   });

//   return html;
// }

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

// export const githubGraphDemoCode = `import {
//   InfoCard,
//   InfoCardContent,
//   InfoCardTitle,
//   InfoCardDescription,
//   InfoCardMedia,
//   InfoCardFooter,
//   InfoCardDismiss,
//   InfoCardAction,
// } from "@/components/kl-ui/info-card";
// import {
//   Sidebar,
//   SidebarProvider,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarGroupContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarFooter,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import {
//   ExternalLink,
//   User,
//   ChevronsUpDown,
//   Calendar,
//   Home,
//   Inbox,
//   Search,
//   Settings,
// } from "lucide-react";
// import Link from "next/link";
// // Menu items.
// const items = [
//   {
//     title: "Home",
//     url: "#",
//     icon: Home,
//   },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
// ];

// `;
export const basicUsageRawCode = `<Cursor cursorClass="border-purple-500 hidden md:inline-block" />`


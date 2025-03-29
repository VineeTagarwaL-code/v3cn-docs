import { ScrollArea } from "@/components/ui/scroll-area";

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

export const basicUsageRawCode = `
<DockContainer dockClass="custom-dock">
  <DockItem label="Home">
      <Home />
  </DockItem>
  <DockItem label="Profile">
      <User />
  </DockItem>
  <DockItem label="Messages">
      <MessageSquare />
  </DockItem>
  <DockItem label="Notifications">
      <Bell />
  </DockItem>
  <DockItem label="Settings">
      <Settings />
  </DockItem>
</DockContainer>`;

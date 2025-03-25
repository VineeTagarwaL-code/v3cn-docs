"use client";

import * as React from "react";

import {
  Book,
  Clock,
  CreditCard,
  Download,
  DownloadCloudIcon,
  GalleryVerticalEnd,
  GitGraph,
  Moon,
  MousePointer2,
  SaveOff,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useRouter } from "next/navigation";

export function CommandMenu({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      onOpenChange(false);
      command();
    },
    [onOpenChange]
  );

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [onOpenChange, open]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Components">
          
          <CommandItem
            onSelect={() =>
              runCommand(() => router.push("/docs/components/discord"))
            }
          >
            <svg
            className="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 50 640 512"
                width="40"
                height="20"

              >
                <path
                  fill="white"
                  d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                />
              </svg>
            Discord
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => router.push("/docs/components/github-graph"))
            }
          >
            <GitGraph className="mr-2 h-4 w-4" />
            Github Graph
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => router.push("/docs/components/cursor"))
            }
          >
            <MousePointer2 className="mr-2 h-4 w-4" />
            Cursor
          </CommandItem>
          <CommandItem
            onSelect={() =>
              runCommand(() => router.push("/docs/components/card"))
            }
          >
            <CreditCard className="mr-2 h-4 w-4" />
            3d Card
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Getting Started">
          <CommandItem onSelect={() => runCommand(() => router.push("/docs/introduction"))}>
            <Book className="mr-2 h-4 w-4" />
            Introduction
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => router.push("/docs/installation"))}
          >
            <DownloadCloudIcon className="mr-2 h-4 w-4" />
            Installation
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Book, DownloadCloudIcon, GalleryVerticalEnd, Github, Mail, SaveOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { DownloadIcon, type DownloadIconHandle } from "./pqoqubbw/download";
import { SearchIcon, type SearchIconHandle } from "./pqoqubbw/search";
import { BookTextIcon, type BookTextIconHandle } from "./pqoqubbw/book-text";
import { ClockIcon, type ClockIconHandle } from "./pqoqubbw/clock";
import { MoonIcon, MoonIconHandle } from "./pqoqubbw/moon";
import { ModeToggle } from "./toggle-theme";


interface NavButtonProps {
  path: string;
  icon: React.ReactNode;
  label: string;
  isNew?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface SidebarContextType {
  openSideBar: boolean;
  setOpenSideBar: (open: boolean) => void;
}

export const SidebarContext = React.createContext<SidebarContextType>({
  openSideBar: false,
  setOpenSideBar: () => {},
});

function NavButton({
  path,
  icon,
  label,
  isNew,
  onMouseEnter,
  onMouseLeave,
}: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === path;
  const { setOpenSideBar } = React.useContext(SidebarContext);

  return (
    <Link
      href={path}
      onClick={() => setOpenSideBar(false)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} 
    >
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-between hover:bg-gray-200 dark:hover:bg-gray-800/60",
          isActive
            ? "bg-gradient-to-r from-gray-50 to-gray-100/50 text-gray-900 border border-gray-300/50 dark:from-zinc-800/90 dark:to-zinc-800/50 dark:text-white dark:border-zinc-700/50"
            : "text-gray-500 dark:text-gray-400"
        )}
      >
        <div className="flex items-center gap-1">
          {icon}
          {label}
        </div>
        {isNew && (
          <span className="text-2xs text-muted-foreground bg-purple-100 px-2 rounded-full dark:bg-purple-900/50 dark:text-purple-400">
            New
          </span>
        )}
      </Button>
    </Link>
  );
}

export function MySidebar({
  openSideBar,
  setOpenSideBar,
}: {
  openSideBar: boolean;
  setOpenSideBar: (open: boolean) => void;
}) {
  const [openCommand, setOpenCommand] = React.useState(false);
  const searchIconRef = useRef<SearchIconHandle>(null);
  const downloadIconRef = useRef<DownloadIconHandle>(null);
  const bookTextIconRef = useRef<BookTextIconHandle>(null);
  const clockIconRef = useRef<ClockIconHandle>(null);
  const moonIconRef = useRef<MoonIconHandle>(null);

  return (
    <>
      {/* Gradient overlay */}
      <div
        className={cn(
          "fixed right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-black/50 to-transparent md:hidden z-50",
          "transition-all duration-300",
          openSideBar
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        )}
        onClick={() => setOpenSideBar(false)}
      />

      <div
        className={cn(
          "fixed md:relative p-4 pl-2 md:pl-0 pb-2 flex flex-col gap-6 h-[calc(100%-20px)] md:h-full min-w-[260px] border-r-[1px] border-gray-600/20",
          "transition-all duration-300 ease-in-out",
          "md:translate-x-0 md:flex",
          openSideBar
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 md:opacity-100",
          "md:min-w-[250px]"
        )}
      >
        <Link href="/" className="flex flex-row items-center gap-1 justify-start">
          <Image
            src="/icons/myicon.png"
            alt="@karrixthediv"
            width={50}
            height={50}
            className=""
          />
          <h1 className="text-2xl">V3CN</h1>
        </Link>
        <div
          className="relative hidden md:block"
          onMouseEnter={() => searchIconRef.current?.startAnimation()}
          onMouseLeave={() => searchIconRef.current?.stopAnimation()}
        >
          <SearchIcon
            ref={searchIconRef}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search"
            className="pl-10 pr-10 rounded-md focus-visible:ring-0 focus-visible:ring-offset-0 border-none bg-gray-200 dark:bg-zinc-800 cursor-pointer"
            onClick={() => setOpenCommand(true)}
            readOnly
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
            ⌘ K
          </div>
          {/* <CommandMenu open={openCommand} onOpenChange={setOpenCommand} /> */}
        </div>

        <div className="flex flex-col">
          <h2 className="text-xs text-muted-foreground mb-2 font-medium">
            Getting Started
          </h2>
          <NavButton
            path="/docs/introduction"
            icon={<Book className="w-4 h-4 mr-2" />}
            label="Introduction"
          />
          <NavButton
            path="/docs/installation"
            icon={<DownloadCloudIcon className="w-4 h-4 mr-2" />}
            label="Installation"
          />
            
        </div>
        <div className="flex flex-col">
          <h2 className="text-xs text-muted-foreground mb-2 font-medium">
            Components
          </h2>
          <NavButton
            path="/docs/components/github-graph"
            icon={<Book className="w-4 h-4 mr-2" />}
            label="Github Graph"
          />
          <NavButton
            path="/docs/components/discord"
            icon={<DownloadCloudIcon className="w-4 h-4 mr-2" />}
            label="Discord Presence"
          />
        </div>

        {/* footer */}
        <div className="mt-auto flex justify-start opacity-60">
          <Link href="https://github.com/vineetagarwal-code" target="_blank">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <Github className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="mailto:karrixlee1231@gmail.com" target="_blank">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <Mail className="w-4 h-4" />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

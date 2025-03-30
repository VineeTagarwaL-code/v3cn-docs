import { codeToHtml } from 'shiki';
import { InstallationTabs } from '@/components/installation-tabs';
import { TDetails } from '@/types/types';

const installationCode = `
"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type CursorProps = {
  cursorClass?: string;
};

type Position = {
  x: number;
  y: number;
};

type TrailerType = "default" | "video";

export const Cursor = ({ cursorClass }: CursorProps) => {
  const [trailerType, setTrailerType] = useState<TrailerType>("default");
  const [isInteracting, setIsInteracting] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const position:Position = {
    x: 0,
    y: 0,
  };
  const cursorRef = useRef<HTMLDivElement>(null);

  const animateTrailer = (e: MouseEvent) => {
    if (!cursorRef.current) return;

    const x = e.clientX - cursorRef.current.offsetWidth / 2;
    const y = e.clientY - cursorRef.current.offsetHeight / 2;

    const keyframes = {
      transform: \`translate(\${x}px, \${y}px) scale(\${isInteracting ? 3 : 1})\`,
    };

    cursorRef.current.animate(keyframes, {
      duration: 100,
      fill: "forwards",
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const interactable = (e.target as HTMLElement).closest(".interactable");
      const interacting = interactable !== null;

      animateTrailer(e);

      setTrailerType(interacting ? (interactable as HTMLElement).dataset.type as TrailerType : "default");
      setIsInteracting(interacting);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInteracting]);

  useEffect(() => {
    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 100);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      id="trailer"
      style={{ top: \`\${position.y}px\`, left: \`\${position.x}px\` }}
      className={cn(
        "bg-transparent rounded-full fixed z-50 pointer-events-none border-[3px] border-slate-500 border-solid w-10 h-10 transition-all",
        cursorClass,
        isClicked && "w-8 h-8"
      )}
      data-type={trailerType}
      ref={cursorRef}
    />
  );
};

`;

export async function CursorInstallationCode() {
  const html = await codeToHtml(installationCode, {
    lang: 'bash',
    theme: 'min-dark',
  });

  const cursorDetails: TDetails = {
    component: 'Cursor',
    packageInstallationStep: {
      command: 'framer-motion',
    },
    steps: [
      {
        title: 'Add Component Code',
        description: 'Copy and paste the following code into your project',
        html: html,
        maxHeight: 300,
        expandedHeight: 500,
      },
    ],
  };
  return (
    <InstallationTabs
      details={cursorDetails}
      layoutIdPrefix="Cursor Follower"
      cliCommand="v3cn add cursor"
      shadcnCommand="shadcn@latest add 'https://v3cn.vineet.pro/r/cursor'"
      importCode="import { Cursor  } from '@/components/cursor';"
    />
  );
}

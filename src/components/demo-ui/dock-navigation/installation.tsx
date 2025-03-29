import { InstallationTabs } from "@/components/demo-ui/dock-navigation/installation-tabs";
import { codeToHtml } from "shiki";

const installationCode = `
// DockNavigation.tsx

'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

type DockProps = {
  dockClass?: string;
  children: React.ReactNode;
};

type DockItemProps = {
  children: React.ReactNode;
  label: string;
  itemClass?: string;
};

export const DockContainer: React.FC<DockProps> = ({ children, dockClass }) => {
  return (
    <div className={cn('p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl shadow-lg flex gap-4 justify-center relative', dockClass)}>
      {children}
    </div>
  );
};

export const DockItem: React.FC<DockItemProps> = ({ children, label, itemClass }) => {
  const [hovered, setHovered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        ref={itemRef}
        className={cn('p-2 flex items-center justify-center text-2xs text-muted-foreground bg-purple-100 px-2 rounded-full dark:bg-purple-900/50 dark:text-purple-400 cursor-pointer transition-all', itemClass)}
        initial={{ scale: 1 }}
        animate={{ scale: hovered ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </motion.div>

      {hovered && (
        <motion.div
          className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {label}
        </motion.div>
      )}
    </div>
  );
};
`;

const cnCode = `
// cn.ts (Utility function for Tailwind class merging)

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
`;

const tailwindConfigCode = `
// tailwind.config.js (Configuration for Tailwind)

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        smooth: {
          "0%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
          "100%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        float: "smooth 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
`;

export async function DockInstallationCode(): Promise<React.ReactNode> {
  const html = await codeToHtml(installationCode, {
    lang: "tsx",
    theme: "min-dark",
  });

  const cnHtml = await codeToHtml(cnCode, {
    lang: "tsx",
    theme: "min-dark",
  });

  const tailwindHtml = await codeToHtml(tailwindConfigCode, {
    lang: "javascript",
    theme: "min-dark",
  });

  return (
    <InstallationTabs
      codeHtml={html}
      cnHtml={cnHtml}
      tailwindHtml={tailwindHtml}
      layoutIdPrefix="dock-navigation"
      cliCommand="v3cn add dock-navigation"
      importCode={`import { DockContainer, DockItem } from '@/components/DockNavigation';`}
    />
  );
}

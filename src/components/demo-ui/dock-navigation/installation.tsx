import { InstallationTabs } from "@/components/demo-ui/dock-navigation/installation-tabs";
import { codeToHtml } from "shiki";

const codeBlocks = [
  {
    id: "installation",
    lang: "tsx",
    code: `
// DockNavigation.tsx

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

type DockProps = {
  dockClass?: string;
  items: { id: number; icon: React.ReactNode; label: string }[];
};

export const DockContainer: React.FC<DockProps> = ({ items, dockClass }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'p-4 bg-purple-100 dark:bg-purple-900/50 rounded-2xl shadow-lg flex gap-4 justify-center relative backdrop-blur-lg border border-gray-300/20 dark:border-gray-600/20',
        dockClass
      )}
    >
      {items.map((item, index) => {
        const scaleValue =
          hoveredIndex === index
            ? 2.2
            : hoveredIndex === index - 1 || hoveredIndex === index + 1
            ? 1.6
            : hoveredIndex === index - 2 || hoveredIndex === index + 2
            ? 1.3
            : 1;

        return (
          <motion.div
            key={item.id}
            className="relative flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="p-3 flex items-center justify-center text-4xl rounded-full"
              style={{ transformOrigin: 'bottom center' }}
              animate={{ scale: scaleValue }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            >
              {item.icon}
            </motion.div>

            {hoveredIndex === index && (
              <motion.div
                className="absolute bottom-full mb-3 px-3 py-1 text-sm text-white bg-black rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default DockContainer;
`,
  },
  {
    id: "cn",
    lang: "tsx",
    code: `
// cn.ts (Utility function for Tailwind class merging)

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
`,
  },
  {
    id: "tailwindConfig",
    lang: "javascript",
    code: `
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
`,
  },
];

export async function DockInstallationCode(): Promise<React.ReactNode> {
  const codeHtmlPromises = codeBlocks.map(async (block) => ({
    id: block.id,
    html: await codeToHtml(block.code, {
      lang: block.lang,
      theme: "min-dark",
    }),
  }));

  const codeHtmlArray = await Promise.all(codeHtmlPromises);
  const codeHtmlMap = Object.fromEntries(codeHtmlArray.map((item) => [item.id, item.html]));

  return (
    <InstallationTabs
      codeHtml={codeHtmlMap.installation}
      cnHtml={codeHtmlMap.cn}
      tailwindHtml={codeHtmlMap.tailwindConfig}
      layoutIdPrefix="dock-navigation"
      cliCommand="v3cn add dock-navigation"
      importCode={`import { DockContainer, DockItem } from '@/components/DockNavigation';`}
    />
  );
}

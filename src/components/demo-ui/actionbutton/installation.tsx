import { codeToHtml } from 'shiki';
import { TDetails } from '@/types/types';
import { InstallationTabs } from '@/components/installation-tabs';


const actionButtonCode = `"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const ActionButtonVariants = cva(
  "relative overflow-hidden rounded-full text-sm font-semibold transition-all duration-300 group inline-flex items-center justify-center",
  {
    variants: {
      size: {
        default: "px-6 py-2 pr-12",
        sm: "px-4 py-1.5 pr-10 text-sm",
        lg: "px-8 py-3 pr-14 text-base",
      },
      bgColor: {
        default: "bg-yellow-500",
        custom: "",
      },
      textColor: {
        default: "text-white",
        yellow: "text-yellow-700",
        red: "text-red-500",
        green: "text-green-500",
        blue: "text-blue-500",
      },
    },
    defaultVariants: {
      size: "default",
      bgColor: "default",
      textColor: "default",
    },
  }
);

export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ActionButtonVariants> {
  asChild?: boolean;
  text?: string;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(
  (
    {
      className,
      size,
      bgColor,
      textColor,
      asChild = false,
      text = "Start 14-day trial",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          ActionButtonVariants({ size, bgColor, textColor }),
          "group-focus:outline-none border-2 border-black",
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 transition-colors duration-300 text-black group-hover:text-white">
          {text}
        </span>

        <span className="absolute inset-[2px] z-0 bg-black scale-x-0 origin-right transition-all duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 rounded-full" />

        <span className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-black p-1.5 w-7 h-7 flex items-center justify-center z-10">
          <ArrowRight
            size={16}
            className="text-white transition-transform duration-500 ease-out group-hover:rotate-[-45deg]"
          />
        </span>
      </Comp>
    );
  }
);

ActionButton.displayName = "TrialButton";

export { ActionButton };
`;

// If needed, you can reuse cnCode from before or import it again
const cnCode = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}`;

export async function ActionButtonInstallationCode() {
  const html = await codeToHtml(actionButtonCode, {
    lang: 'tsx',
    theme: 'min-dark',
  });

  const cnHtml = await codeToHtml(cnCode, {
    lang: 'tsx',
    theme: 'min-dark',
  });

  const buttonDetails: TDetails = {
    component: 'ActionButton',
    steps: [
      {
        title: 'Create a `cn.ts` Utility File',
        description: 'This function helps to merge Tailwind classes easily.',
        html: cnHtml,
        maxHeight: 100,
        expandedHeight: 200,
      },
      {
        title: 'Add the ActionButton Component',
        description: 'Add this full component code to your project.',
        html: html,
        maxHeight: 300,
        expandedHeight: 500,
      },
    ],
  };

  return (
    <InstallationTabs
      details={buttonDetails}
      layoutIdPrefix="action-button"
      cliCommand="v3cn add action-button"
      shadcnCommand="shadcn@latest add 'https://v3cn.vineet.pro/r/action-button'"
      importCode="import { ActionButton } from '@/components/action-button';"
    />
  );
}

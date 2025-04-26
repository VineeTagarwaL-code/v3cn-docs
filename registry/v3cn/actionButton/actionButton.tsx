"use client";
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
          "group-focus:outline-none border-2 border-black", // <-- Border added here
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Text */}
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

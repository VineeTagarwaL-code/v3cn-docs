"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import type React from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  className,
  ...props
}: {
  radius?: number;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn("group/spotlight  h-full relative  ", className)}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="absolute -inset-px opacity-0 group-hover/spotlight:opacity-100 rounded-md transition duration-300 pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(61, 22, 36, 0.3),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="absolute -inset-px opacity-0 group-hover/spotlight:opacity-100 rounded-md transition duration-300 pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(53, 24, 53, 0.3),
              transparent 80%
            )
          `,
          transform: "translateY(-2px)",
        }}
      />
      <motion.div
        className="absolute -inset-px opacity-0 group-hover/spotlight:opacity-100 rounded-md transition duration-300 pointer-events-none"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(46, 23, 50, 0.3),
              transparent 80%
            )
          `,
          transform: "translateY(-4px)",
        }}
      />
      <div className="z-10 relative h-full">{children}</div>
    </div>
  );
};

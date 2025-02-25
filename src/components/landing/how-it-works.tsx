"use client";

import type React from "react";
import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
  borderColor?: string;
}
const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    borderColor = "border-gray-800",
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            Number.parseFloat(element.style.getPropertyValue("--start")) || 0;
          const targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            borderColor,
            variant === "white" && "border-white",
            disabled && "!block"
          )}
          style={{ borderWidth: `${borderWidth}px` }}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
                radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
                radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
                radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #dd7bbb 0%,
                  #d79f1e calc(25% / var(--repeating-conic-gradient-times)),
                  #5a922c calc(50% / var(--repeating-conic-gradient-times)), 
                  #4c7894 calc(75% / var(--repeating-conic-gradient-times)),
                  #dd7bbb calc(100% / var(--repeating-conic-gradient-times))
                )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)] ",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-opacity after:duration-300",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  visual: React.ReactNode;
}

function FeatureCard({ number, title, description, visual }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl p-6 bg-black/40 backdrop-blur-sm transition-all duration-300 transform-gpu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlowingEffect
        disabled={!isHovered}
        spread={20}
        glow={true}
        proximity={64}
        inactiveZone={0.01}
        borderColor="border-gray-800"
        borderWidth={0.5}
      />
      <div className="text-sm font-medium text-gray-400">{number}</div>
      <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-gray-300 leading-relaxed">{description}</p>
      <div className="mt-8">{visual}</div>
    </div>
  );
}

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const features = [
    {
      number: "01",
      title: "Beautiful Components",
      description:
        "Beautiful components built with React, TypeScript, and Tailwind CSS. From buttons to complex data tables, we've got you covered with our battle-tested designs.",
      visual: (
        <div className="grid grid-cols-2 gap-4">
          <div className="h-12 rounded-lg bg-gray-700/50"></div>
          <div className="h-12 rounded-lg bg-gray-700/50"></div>
          <div className="h-12 rounded-lg bg-gray-700/50"></div>
          <div className="h-12 rounded-lg bg-gray-700/50"></div>
        </div>
      ),
    },
    {
      number: "02",
      title: "Ready-to-use Templates",
      description:
        "Landing pages, dashboards, and app templates ready for production. From marketing sites to admin panels, we've got everything you need to ship products faster.",
      visual: (
        <div className="space-y-4">
          <div className="h-4 w-3/4 rounded bg-gray-700/50"></div>
          <div className="h-4 w-full rounded bg-gray-700/50"></div>
          <div className="h-4 w-2/3 rounded bg-gray-700/50"></div>
          <div className="flex gap-4">
            <div className="h-8 w-24 rounded bg-gray-700/50"></div>
            <div className="h-8 w-24 rounded bg-gray-700/50"></div>
          </div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Ship Faster",
      description:
        "Focus on your product, not on building UI components. From startups to enterprises, our battle-tested designs help you convert visitors into happy customers.",
      visual: (
        <div className="flex justify-center gap-6">
          <div className="h-16 w-16 rounded-full bg-gray-700/50"></div>
          <div className="h-16 w-16 rounded-full bg-gray-700/50"></div>
          <div className="h-16 w-16 rounded-full bg-gray-700/50"></div>
        </div>
      ),
    },
  ];

  const [featureScales] = useState(() => {
    return features.map((_, index) => {
      return (progress: number) => {
        const start = 0.1 * index;
        const end = 0.2 + 0.1 * index;
        if (progress < start) return 0.95;
        if (progress > end) return 1;
        return 0.95 + ((progress - start) / (end - start)) * 0.05;
      };
    });
  });

  return (
    <>
      <style jsx global>{`
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <section ref={sectionRef} className="px-4 py-16 md:py-24 bg-black">
        <motion.div className="mx-auto max-w-7xl" style={{ opacity, y }}>
          {/* Header */}
          <div className="text-center">
            <div className="inline-block rounded-full bg-gray-800 px-4 py-1.5 text-sm font-medium text-gray-100">
              How it works
            </div>
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Ship beautiful products in half the time
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              50+ beautiful sections and templates built with React, TypeScript,
              Tailwind CSS, and Framer Motion. Save thousands of hours and
              convert your visitors into customers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid gap-12 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                style={{ scale: featureScales[index](scrollYProgress.get()) }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  mass: 0.9,
                }}
              >
                <FeatureCard
                  number={feature.number}
                  title={feature.title}
                  description={feature.description}
                  visual={feature.visual}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

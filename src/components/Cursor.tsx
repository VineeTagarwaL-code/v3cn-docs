"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "../utils/cn";
import { motion } from "framer-motion";

type cursorProp = {
  cursorClass?: string;
};

export const Cursor = ({ cursorClass }: cursorProp) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);

  // Update cursor position
  const updateCursorPosition = (e: MouseEvent) => {
    if (!cursorRef.current) return;
    
    const x = e.clientX;
    const y = e.clientY;
    
    setPosition({ x, y });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      const interactable = (e.target as HTMLElement).closest(".interactable");
      const interacting = interactable !== null;
      
      updateCursorPosition(e);
      
      setIsInteracting(interacting);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

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
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        id="trailer"
        style={{
          transform: `translate(${position.x - (cursorRef.current?.offsetWidth || 20) / 2}px, ${position.y - (cursorRef.current?.offsetHeight || 20) / 2}px) scale(${isInteracting ? 3 : 1})`,
          opacity: isVisible ? 1 : 0,
        }}
        className={cn(
          "bg-transparent rounded-full fixed z-50 pointer-events-none border-[3px] border-slate-500 border-solid w-10 h-10 transition-transform duration-100",
          isClicked && "w-8 h-8",
          cursorClass
        )}
        ref={cursorRef}
      ></motion.div>
    </>
  );
};

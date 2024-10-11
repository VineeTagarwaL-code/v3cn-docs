"use client";
import { cn } from "../utils/cn";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type cursorProp = {
  cursorClass?: string;
};
export const Cursor = ({ cursorClass }: cursorProp) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const cursorRef = useRef(null);
  const animateTrailer = (e: any) => {
    const x =
      e.clientX - (cursorRef.current as unknown as HTMLElement).offsetWidth / 2;
    const y =
      e.clientY -
      (cursorRef.current as unknown as HTMLElement).offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${isInteracting ? 3 : 1})`,
    };

    (cursorRef.current as unknown as HTMLElement)?.animate(keyframes, {
      duration: 100,
      fill: "forwards",
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const interactable = (e.target as HTMLElement).closest(".interactable");
      const interacting = interactable !== null;

      animateTrailer(e);

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
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        id="trailer"
        style={{ top: `0px`, left: `0px` }}
        className={cn(
          "bg-transparent rounded-full fixed z-50 pointer-events-none border-[3px] border-slate-500 border-solid w-10 h-10 transition-all",
          isClicked && "w-8 h-8",
          cursorClass
        )}
        ref={cursorRef}
      ></motion.div>
    </>
  );
};

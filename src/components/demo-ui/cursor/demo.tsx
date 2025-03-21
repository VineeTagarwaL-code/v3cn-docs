"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

type cursorProp = {
  cursorClass?: string;
};
export const DemoCursor = ({ cursorClass }: cursorProp) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailerType, setTrailertype] = useState("default");
  const [isInteracting, setIsInteracting] = useState(false);
  const [isClicked, SetIsClicked] = useState(false);

  const cursorRef = useRef(null);
  const animateTrailer = (e: any) => {
    const x =
      e.clientX - (cursorRef.current as unknown as HTMLElement).offsetWidth/2 ;
    const y =
      e.clientY -
      (cursorRef.current as unknown as HTMLElement).offsetHeight/2;

    setPosition({ x, y });

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${isInteracting ? 3 : 1})`,
    };

    (cursorRef.current as unknown as HTMLElement)?.animate(keyframes, {
      duration: 100,
      fill: "forwards",
    });
  };
  const getTrailerClass = (type: any) => {
    switch (type) {
      case "video":
        return "fa-solid fa-play";
      default:
        return "ri-arrow-right-up-line";
    }
  };
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;

      animateTrailer(e);

      setTrailertype(interacting ? interactable.dataset.type : "");
      setIsInteracting(interacting);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Set initial position to current mouse position
    const initialPosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - (cursorRef.current as unknown as HTMLElement).offsetWidth / 2,
        y: e.clientY - (cursorRef.current as unknown as HTMLElement).offsetHeight / 2
      });
      window.removeEventListener("mousemove", initialPosition);
    };
    window.addEventListener("mousemove", initialPosition, { once: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInteracting]);

  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      SetIsClicked(true);
      setTimeout(() => {
        SetIsClicked(false);
      }, 100);
    });
  }, []);
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        id="trailer"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
        className={cn(
          "bg-transparent rounded-full fixed z-50 pointer-events-none border-[3px] border-slate-500 border-solid w-10 h-10 transition-all",
          cursorClass,
          isClicked && "w-8 h-8"
        )}
        data-type={trailerType}
        ref={cursorRef}
      ></motion.div>
    </>
  );
};
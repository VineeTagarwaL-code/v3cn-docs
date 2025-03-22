"use client";

import { useEffect, useState } from "react";

import { Background } from "./Background";
import { HeroContent } from "./HeroContent";
import { LandingFooter } from "./landing-footer";
import { LogoBadge } from "./LogoBadge";
import { ScrollableCards } from "./ScrollableCards";

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-full w-full flex items-center justify-center bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Background elements */}
      <Background />

      {/* Logo badge */}
      <LogoBadge />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[90%] md:max-w-5xl mx-auto px-2 md:px-4 py-12 md:py-20 text-center">
        <HeroContent />
        <ScrollableCards />
        <LandingFooter />
      </div>
    </div>
  );
}

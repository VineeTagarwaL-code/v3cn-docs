"use client";

import { ArrowRight, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroContent = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-1 md:pb-2">
          Make your website stand out
        </span>
        <span className="block text-white">Beautiful & Unique UIs</span>
      </h1>

      <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
        A collection of unique components that make your website stand out.
        Crafted for speed, flexibility, and seamless design.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-6 md:mt-8">
        <Button
          size="lg"
          className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-sm md:text-base py-2 md:py-3"
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Link href="/docs/installation"> 
        <Button
          size="lg"
          variant="outline"
          className="border-purple-500/20 hover:bg-purple-500/10 text-sm md:text-base py-2 md:py-3"
        >
          <FileText className="mr-2 h-4 w-4" />
          Visit Docs
        </Button>
        </Link>
      </div>
    </div>
  );
}; 
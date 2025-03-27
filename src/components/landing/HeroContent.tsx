"use client";

import { ArrowRight, FileText, Github, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroContent = () => {
  const [stars, setStars] = useState("0");
  const repoUrl = "https://github.com/VineeTagarwaL-code/v3cn-docs";

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/VineeTagarwaL-code/v3cn-docs"
        );

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }

        const data = await response.json();
        const stars = data.stargazers_count;

        // Format the number of stars
        const formattedStars = formatNumber(stars);
        setStars(formattedStars);
      } catch (error) {
        console.error("Error fetching stars:", error);
      }
    };

    fetchStars();
  }, []);

  // Helper function to format the number
  const formatNumber = (num: number) => {
    if (num >= 1_000_000) {
      return `${(num / 1_000_000).toFixed(1)}M`; // Convert to millions (e.g., 1.2M)
    } else if (num >= 1_000) {
      return `${(num / 1_000).toFixed(1)}k`; // Convert to thousands (e.g., 1.5k)
    } else {
      return num.toString(); // Return as is for numbers less than 1000
    }
  };

  return (
    <div className="space-y-4 md:space-y-6">
      <h1 className=" font-bold tracking-tight mt-3">
        <span className="block text-2xl md:text-6xl  lg:text-7xl  bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-1 md:pb-2">
          Make your website stand out
        </span>
        <span className="block  text-2xl md:text-6xl  lg:text-7xl">Beautiful & Unique UIs</span>
      </h1>

      <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground">
        A collection of unique components that make your website stand out.
        Crafted for speed, flexibility, and seamless design.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-6 md:mt-8">
        <Link href="/docs/installation"> 
        <Button
          size="lg"
          variant="outline"
          className="border-purple-500/20 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-sm md:text-base py-2 md:py-3 h-11 md:h-12 px-5 min-w-[180px]"
        >
          <FileText className="mr-2 h-4 w-4" />
          Browse Components
        </Button>
        </Link>
        <Link href="https://GitHub.com/vineetagarwal-code/v3cn-docs"> 
        <Button
          size="lg"
          variant="outline"
          className="border-purple-500/20  hover:from-purple-600 hover:to-pink-600 text-sm md:text-base py-2 md:py-3 h-11 md:h-12 px-7 min-w-[180px]"
        >
          <Star className="mr-2 h-4 w-4" />
          {stars} Stars on GitHub
        </Button>
        </Link>
      </div>
    </div>
  );
}; 
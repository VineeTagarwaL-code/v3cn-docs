"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
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
    <header className="relative flex justify-between items-center p-3 w-full text-white">
      <div className="flex items-center gap-1">
        <Image
          src="/logo.webp"
          alt="logo"
          width={60}
          height={60}
          className="grayscale-[100%]"
        />
      </div>
      <div className="z-[999] flex items-center gap-2">
        <button
          className="flex items-center gap-1 px-4 py-2 border border-[#5c58673d] rounded-full font-medium text-white hover:text-gray-300 text-sm"
          style={{
            background:
              "linear-gradient(180deg, #222223 0%, rgba(34, 34, 35, 0.6) 68.75%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            color="#fffcfc"
            fill="none"
          >
            <path
              d="M20.4999 10.5V10C20.4999 6.22876 20.4999 4.34315 19.3284 3.17157C18.1568 2 16.2712 2 12.4999 2H11.5C7.72883 2 5.84323 2 4.67166 3.17156C3.50009 4.34312 3.50007 6.22872 3.50004 9.99993L3.5 14.5C3.49997 17.7874 3.49996 19.4312 4.40788 20.5375C4.57412 20.7401 4.75986 20.9258 4.96242 21.0921C6.06877 22 7.71249 22 10.9999 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 7H16.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 12H13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 20L20.5 17C20.5 15.5706 19.1569 14 17.5 14C15.8431 14 14.5 15.5706 14.5 17L14.5 20.5C14.5 21.3284 15.1716 22 16 22C16.8284 22 17.5 21.3284 17.5 20.5V17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Open docs
        </button>
        <Link
          href={repoUrl}
          className="group flex items-center gap-1 hover:bg-gray-800 px-3 py-1 border border-[#5c58673d] rounded-full h-[38px] font-medium text-white text-sm transition-colors duration-200 cursor-pointer"
          style={{
            background:
              "linear-gradient(180deg, #222223 0%, rgba(34, 34, 35, 0.6) 68.75%)",
          }}
          title="Star this repository on GitHub"
        >
          <Github size={16} />
          <span className="group-hover:text-gray-300 font-medium text-white text-sm">
            {stars}
          </span>
          <span className="group-hover:text-gray-300 font-medium text-white text-sm">
            Stars
          </span>
        </Link>
      </div>
    </header>
  );
};

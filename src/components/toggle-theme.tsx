"use client";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="toggle"
      size="icon"
      onClick={toggleTheme}
      className="rounded-none md:pl-2"
    >
      <Sun className=" rotate-0  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
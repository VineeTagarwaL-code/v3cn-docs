"use client";

import { Badge } from "../ui/badge";

export const LogoBadge = () => {
  return (
    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
      <Badge
        variant="outline"
        className="px-3 py-1 border border-purple-300/20 bg-background/80 backdrop-blur-sm"
      >
        <span className="text-purple-300 font-semibold mr-1">V3CN</span>
        <span className="h-2 w-2 rounded-full bg-purple-400 inline-block animate-pulse" />
      </Badge>
    </div>
  );
}; 
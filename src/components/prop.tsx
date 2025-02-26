"use client";
import React from "react";

interface PropItemProps {
  name: string;
  type: string;
  description: string;
}

export default function PropItem({ name, type, description }: PropItemProps) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline space-x-2">
        <span className="font-semibold text-gray-100">{name}</span>
        <span className="text-xs text-gray-400">{type}</span>
      </div>
      <p className="mt-1 text-sm text-gray-300">{description}</p>
    </div>
  );
}

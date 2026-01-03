"use client";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export default function GradientText({
  children,
  className = "",
  animated = true,
}: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent ${
        animated ? "animate-gradient-shift bg-[length:200%_auto]" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}

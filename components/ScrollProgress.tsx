"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-orange-400 to-primary z-[60] origin-left transition-transform duration-150 pointer-events-none"
      style={{
        transform: `scaleX(${progress / 100})`,
        top: "env(safe-area-inset-top)",
      }}
    />
  );
}

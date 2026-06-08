"use client";

import { useEffect, useState, useCallback } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
  color?: string;
}

export default function GlitchText({
  text,
  className = "",
  intensity = "medium",
  color = "#8b1a1a",
}: GlitchTextProps) {
  const [glitchIndex, setGlitchIndex] = useState(-1);

  const intervalBase = intensity === "low" ? 5000 : intensity === "medium" ? 3000 : 1500;

  const triggerGlitch = useCallback(() => {
    const idx = Math.floor(Math.random() * text.length);
    setGlitchIndex(idx);
    setTimeout(() => setGlitchIndex(-1), 150);
  }, [text.length]);

  useEffect(() => {
    const interval = setInterval(
      triggerGlitch,
      intervalBase + Math.random() * 2000
    );
    return () => clearInterval(interval);
  }, [triggerGlitch, intervalBase]);

  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            position: "relative",
            color: i === glitchIndex ? color : undefined,
            textShadow:
              i === glitchIndex
                ? `2px 0 ${color}, -2px 0 cyan`
                : undefined,
            transform:
              i === glitchIndex
                ? `translate(${Math.random() * 4 - 2}px, ${Math.random() * 2 - 1}px)`
                : undefined,
            transition: "none",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

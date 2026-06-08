"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Story } from "@/lib/stories";

interface ExcerptSectionProps {
  story: Story;
  highlightWords?: string[];
  highlightColor?: string;
  children?: React.ReactNode;
}

function highlightText(
  text: string,
  words: string[],
  color: string
) {
  if (words.length === 0) return text;

  const pattern = new RegExp(`(${words.join("|")})`, "g");
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    words.includes(part) ? (
      <span
        key={i}
        className="transition-colors duration-500"
        style={{ color, textShadow: `0 0 20px ${color}40` }}
      >
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function ExcerptSection({
  story,
  highlightWords = [],
  highlightColor,
  children,
}: ExcerptSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hColor = highlightColor || story.theme.secondary;

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {children}
      <div ref={ref} className="relative z-10 max-w-2xl lg:max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)]"
            style={{ color: story.theme.primary }}
          >
            Excerpt
          </span>
        </motion.div>
        {story.excerpt.split("\n\n").map((paragraph, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + i * 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-base md:text-lg lg:text-xl leading-[2] tracking-wide mb-8 last:mb-0"
          >
            {highlightText(paragraph, highlightWords, hColor)}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

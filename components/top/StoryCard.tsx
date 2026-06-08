"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { Story } from "@/lib/stories";

interface StoryCardProps {
  story: Story;
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={`/${story.slug}`} className="group block">
        <div
          className="relative p-8 md:p-10 border border-[var(--muted)]/10 transition-all duration-500 overflow-hidden"
          style={{ backgroundColor: `${story.theme.void}80` }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at center, ${story.theme.primary}08, transparent 70%)`,
            }}
          />

          {/* Accent line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px] origin-left"
            style={{ backgroundColor: story.theme.primary }}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="relative z-10">
            <span
              className="text-[10px] tracking-[0.3em] font-[family-name:var(--font-inter)] block mb-4"
              style={{ color: story.theme.primary, opacity: 0.7 }}
            >
              {story.id.toUpperCase().replace("TANPEN", "TANPEN ")}
            </span>

            <h3
              className="font-[family-name:var(--font-zen)] text-xl md:text-2xl mb-3 transition-colors duration-300"
              style={{ color: "var(--text)" }}
            >
              {story.title}
            </h3>

            <p className="text-sm text-[var(--muted)] mb-6 font-[family-name:var(--font-inter)]">
              {story.subtitle}
            </p>

            <p className="text-sm leading-[1.8] text-[var(--text)]/60 line-clamp-3">
              {story.synopsis}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span
                className="text-xs tracking-[0.2em] font-[family-name:var(--font-inter)] transition-colors duration-300 group-hover:translate-x-1 transform"
                style={{ color: story.theme.primary }}
              >
                READ
              </span>
              <motion.span
                className="text-xs"
                style={{ color: story.theme.primary }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

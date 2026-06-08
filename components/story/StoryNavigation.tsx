"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import type { Story } from "@/lib/stories";
import { getAdjacentStories } from "@/lib/stories";

interface StoryNavigationProps {
  currentSlug: string;
}

function NavLink({
  story,
  direction,
}: {
  story: Story;
  direction: "prev" | "next";
}) {
  return (
    <Link
      href={`/${story.slug}`}
      className="group flex flex-col gap-2"
      style={{ alignItems: direction === "prev" ? "flex-start" : "flex-end" }}
    >
      <span className="text-xs tracking-[0.2em] text-[var(--muted)] font-[family-name:var(--font-inter)]">
        {direction === "prev" ? "Prev" : "Next"}
      </span>
      <span
        className="font-[family-name:var(--font-zen)] text-lg md:text-xl transition-colors duration-300 group-hover:opacity-70"
        style={{ color: story.theme.primary }}
      >
        {story.title}
      </span>
    </Link>
  );
}

export default function StoryNavigation({ currentSlug }: StoryNavigationProps) {
  const { prev, next } = getAdjacentStories(currentSlug);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="border-t border-[var(--muted)]/20 py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8 flex items-start justify-between">
        <div>{prev && <NavLink story={prev} direction="prev" />}</div>
        <div>{next && <NavLink story={next} direction="next" />}</div>
      </div>
    </motion.div>
  );
}

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
  const isPrev = direction === "prev";
  const num = story.id.replace("tanpen", "");

  return (
    <Link
      href={`/${story.slug}`}
      className="group block py-8 md:py-10 lg:py-12 px-6 md:px-10 lg:px-12 transition-colors duration-500 hover:bg-white/[0.02]"
      style={{ textAlign: isPrev ? "left" : "right" }}
    >
      {/* Direction label with arrow */}
      <div
        className="flex items-center gap-2 mb-4 md:mb-5"
        style={{ justifyContent: isPrev ? "flex-start" : "flex-end" }}
      >
        {isPrev && (
          <span
            className="text-sm transition-transform duration-300 group-hover:-translate-x-1"
            style={{ color: story.theme.primary }}
          >
            &larr;
          </span>
        )}
        <span
          className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
          style={{ color: `var(--muted)` }}
        >
          {isPrev ? "Prev" : "Next"}
        </span>
        {!isPrev && (
          <span
            className="text-sm transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: story.theme.primary }}
          >
            &rarr;
          </span>
        )}
      </div>

      {/* Story number */}
      <span
        className="block text-[10px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-2"
        style={{ color: story.theme.primary, opacity: 0.5 }}
      >
        Tanpen {num}
      </span>

      {/* Story title */}
      <h4
        className="font-[family-name:var(--font-zen)] text-lg md:text-xl lg:text-2xl tracking-wider transition-colors duration-300"
        style={{ color: `var(--text)` }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = story.theme.primary)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = `var(--text)`)
        }
      >
        {story.title}
      </h4>

      {/* Subtitle */}
      <p
        className="text-xs md:text-sm tracking-[0.15em] mt-1 font-[family-name:var(--font-inter)]"
        style={{ color: `var(--muted)` }}
      >
        {story.subtitle}
      </p>
    </Link>
  );
}

export default function StoryNavigation({ currentSlug }: StoryNavigationProps) {
  const { prev, next } = getAdjacentStories(currentSlug);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[var(--muted)]/10" />

      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        <div
          className={`grid gap-0 ${
            prev && next
              ? "grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {/* Prev */}
          {prev ? (
            <NavLink story={prev} direction="prev" />
          ) : (
            <div />
          )}

          {/* Vertical divider (only when both exist) */}
          {prev && next && (
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[var(--muted)]/10 hidden md:block" />
          )}

          {/* Next */}
          {next ? (
            <NavLink story={next} direction="next" />
          ) : (
            <div />
          )}
        </div>
      </div>
    </motion.section>
  );
}

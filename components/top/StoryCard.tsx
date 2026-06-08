"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Story } from "@/lib/stories";

interface StoryCardProps {
  story: Story;
  index: number;
}

export default function StoryCard({ story, index }: StoryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const num = String(index + 1).padStart(2, "0");
  const hasImage = !!story.cardImage;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={`/${story.slug}`} className="group block">
        <div
          className="relative overflow-hidden transition-all duration-500"
          style={{ backgroundColor: story.theme.void }}
        >
          {/* Card image background */}
          {hasImage && (
            <div className="absolute inset-0 transition-all duration-700 group-hover:scale-105">
              <Image
                src={story.cardImage!}
                alt=""
                fill
                className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay for text readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${story.theme.void}e0 0%, ${story.theme.void}90 50%, ${story.theme.void}c0 100%)`,
                }}
              />
            </div>
          )}

          {/* Large background number watermark (only when no image) */}
          {!hasImage && (
            <div
              className="absolute -top-4 -right-2 font-[family-name:var(--font-cormorant)] text-[120px] md:text-[160px] lg:text-[200px] font-bold leading-none select-none pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.06]"
              style={{ color: story.theme.primary, opacity: 0.03 }}
            >
              {num}
            </div>
          )}

          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${story.theme.primary}0a, transparent 70%)`,
            }}
          />

          {/* Top accent line - grows on hover */}
          <div
            className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out z-20"
            style={{ backgroundColor: story.theme.primary }}
          />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-10 lg:p-12">
            {/* Label */}
            <span
              className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
              style={{ color: story.theme.primary, opacity: 0.6 }}
            >
              Tanpen {num}
            </span>

            {/* Title */}
            <h3
              className="font-[family-name:var(--font-zen)] text-xl md:text-2xl lg:text-3xl tracking-wider mt-4 mb-2 transition-colors duration-300 group-hover:text-[var(--text)]"
              style={{ color: `${story.theme.primary}` }}
            >
              {story.title}
            </h3>

            {/* Subtitle */}
            <p
              className="text-xs md:text-sm tracking-[0.2em] font-[family-name:var(--font-inter)]"
              style={{ color: `var(--muted)` }}
            >
              {story.subtitle}
            </p>

            {/* Accent divider */}
            <div
              className="w-10 h-[1px] mt-6 mb-6 transition-all duration-500 group-hover:w-16"
              style={{ backgroundColor: `${story.theme.primary}40` }}
            />

            {/* Synopsis */}
            <p
              className="text-sm md:text-base lg:text-base leading-[1.9] md:leading-[2] line-clamp-3"
              style={{ color: `var(--text)`, opacity: 0.5 }}
            >
              {story.synopsis}
            </p>

            {/* Read action */}
            <div className="mt-8 flex items-center gap-3">
              <span
                className="text-[11px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] transition-all duration-300 group-hover:tracking-[0.5em]"
                style={{ color: story.theme.primary }}
              >
                Read
              </span>
              <motion.span
                className="inline-block text-sm transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: story.theme.primary }}
              >
                &rarr;
              </motion.span>
            </div>
          </div>

          {/* Bottom accent bar */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px] z-20"
            style={{ backgroundColor: `${story.theme.primary}15` }}
          />
        </div>
      </Link>
    </motion.div>
  );
}

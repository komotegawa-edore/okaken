"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Story } from "@/lib/stories";

interface SynopsisSectionProps {
  story: Story;
  children?: React.ReactNode;
}

export default function SynopsisSection({ story, children }: SynopsisSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {children}
      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6 md:px-8">
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
            Synopsis
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl leading-[2.2] tracking-wide"
          style={{ color: story.theme.primary }}
        >
          {story.synopsis}
        </motion.p>
      </div>
    </section>
  );
}

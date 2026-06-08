"use client";

import { motion } from "framer-motion";
import type { Story } from "@/lib/stories";
import TextReveal from "@/components/animation/TextReveal";

interface StoryHeroProps {
  story: Story;
  children?: React.ReactNode;
}

export default function StoryHero({ story, children }: StoryHeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      {children}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-[1px] mx-auto mb-8"
          style={{ backgroundColor: story.theme.primary }}
        />
        <TextReveal
          text={story.title}
          className="font-[family-name:var(--font-zen)] text-3xl md:text-5xl lg:text-6xl tracking-wider"
          delay={0.6}
          staggerDelay={0.05}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-6 text-sm tracking-[0.4em] font-[family-name:var(--font-inter)]"
          style={{ color: story.theme.primary }}
        >
          {story.subtitle}
        </motion.p>
      </div>
    </section>
  );
}

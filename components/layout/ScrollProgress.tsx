"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress({ color = "var(--text)" }: { color?: string }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: color,
      }}
    />
  );
}

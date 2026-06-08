"use client";

import { motion } from "framer-motion";
import FloatingParticles from "@/components/animation/FloatingParticles";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--bg)]">
      <FloatingParticles
        color="rgba(245, 230, 200, 0.4)"
        count={40}
        speed={0.2}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Light line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "120px", opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="h-[1px] bg-gradient-to-r from-transparent via-[var(--text)] to-transparent mb-12"
        />

        {/* Title */}
        <div className="overflow-hidden">
          {"okaken".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.0 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="inline-block font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl lg:text-9xl tracking-[0.3em] font-light text-[var(--text)]"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.2 }}
          className="mt-8 text-sm md:text-base tracking-[0.5em] text-[var(--muted)] font-[family-name:var(--font-shippori)]"
        >
          短編小説プロジェクト
        </motion.p>

        {/* Expanding line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "60px", opacity: 0.5 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="h-[1px] bg-[var(--muted)] mt-12"
        />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="absolute bottom-[-120px] flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.3em] text-[var(--muted)] font-[family-name:var(--font-inter)]">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-8 bg-gradient-to-b from-[var(--muted)] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

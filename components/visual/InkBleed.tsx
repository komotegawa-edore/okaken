"use client";

import { motion } from "framer-motion";

export default function InkBleed({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Top edge */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, rgba(74, 63, 47, 0.3), transparent)",
          filter: "blur(8px)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Bottom edge */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(74, 63, 47, 0.3), transparent)",
          filter: "blur(8px)",
        }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      {/* Corner spots */}
      {[
        { top: "-2%", left: "-2%" },
        { top: "-2%", right: "-2%" },
        { bottom: "-2%", left: "-2%" },
        { bottom: "-2%", right: "-2%" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-40 h-40 rounded-full"
          style={{
            ...pos,
            background: "radial-gradient(circle, rgba(74, 63, 47, 0.4), transparent 70%)",
            filter: "blur(12px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
}

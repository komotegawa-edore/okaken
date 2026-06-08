"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { stories } from "@/lib/stories";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-6">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="font-[family-name:var(--font-cormorant)] text-lg tracking-[0.3em] text-[var(--text)] hover:opacity-70 transition-opacity"
        >
          okaken
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1px] bg-[var(--text)]"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-[1px] bg-[var(--text)]"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-[1px] bg-[var(--text)]"
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="font-[family-name:var(--font-zen)] text-xl text-[var(--text)] hover:opacity-70 transition-opacity"
                >
                  トップ
                </Link>
              </motion.div>
              {stories.map((story, i) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                >
                  <Link
                    href={`/${story.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="group flex flex-col items-center gap-1"
                  >
                    <span
                      className="font-[family-name:var(--font-zen)] text-xl transition-colors duration-300"
                      style={{
                        color: "var(--text)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = story.theme.primary)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text)")
                      }
                    >
                      {story.title}
                    </span>
                    <span className="text-xs text-[var(--muted)] font-[family-name:var(--font-inter)]">
                      {story.subtitle}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

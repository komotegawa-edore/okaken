"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { TextSection } from "@/lib/fulltext/types";

interface FullTextSectionProps {
  sections: TextSection[];
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    void: string;
  };
}

function RenderSection({
  section,
  theme,
}: {
  section: TextSection;
  theme: FullTextSectionProps["theme"];
}) {
  switch (section.type) {
    case "heading":
      return (
        <div className="mt-20 mb-10 first:mt-0">
          {section.label && (
            <span
              className="block text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] mb-3"
              style={{ color: `${theme.secondary}aa` }}
            >
              {section.label}
            </span>
          )}
          <h3
            className="font-[family-name:var(--font-zen)] text-lg md:text-xl lg:text-2xl tracking-wider leading-[1.8]"
            style={{ color: theme.primary }}
          >
            {section.content}
          </h3>
        </div>
      );

    case "paragraph":
      return (
        <p
          className="font-[family-name:var(--font-shippori)] text-sm md:text-base lg:text-lg leading-[2] md:leading-[2.2] tracking-wide mb-6 lg:mb-8 whitespace-pre-line"
          style={{ color: `${theme.primary}dd` }}
        >
          {section.content}
        </p>
      );

    case "question":
      return (
        <blockquote
          className="my-14 lg:my-16 pl-5 md:pl-8 border-l-2 py-3"
          style={{ borderColor: `${theme.secondary}50` }}
        >
          <p
            className="font-[family-name:var(--font-shippori)] text-sm md:text-base lg:text-lg leading-[2] tracking-wider italic"
            style={{ color: `${theme.primary}99` }}
          >
            {section.content}
          </p>
        </blockquote>
      );

    case "quote":
      return (
        <div className="my-12 md:my-14 lg:my-16 text-center px-4">
          <p
            className="font-[family-name:var(--font-cormorant)] text-base md:text-lg lg:text-2xl leading-[1.8] tracking-wider italic"
            style={{ color: theme.accent || theme.secondary }}
          >
            {section.content}
          </p>
          {section.label && (
            <p
              className="font-[family-name:var(--font-shippori)] text-xs mt-3 tracking-wide"
              style={{ color: `${theme.primary}70` }}
            >
              {section.label}
            </p>
          )}
        </div>
      );

    case "break":
      return (
        <div className="my-10 md:my-14 flex justify-center">
          <div
            className="w-12 md:w-16 h-[1px]"
            style={{ backgroundColor: `${theme.primary}25` }}
          />
        </div>
      );

    default:
      return null;
  }
}

export default function FullTextSection({
  sections,
  theme,
}: FullTextSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollPosRef = useRef(0);

  const toggle = useCallback(() => {
    if (isOpen) {
      // Closing: save scroll position for later
      scrollPosRef.current = window.scrollY;
      setIsOpen(false);
    } else {
      setIsOpen(true);
      // Scroll to button area after opening
      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [isOpen]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: theme.void }}
    >
      {/* Subtle top border */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-[1px]"
        style={{ backgroundColor: `${theme.primary}15` }}
      />

      <div className="max-w-2xl lg:max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Toggle Button */}
        <div className="flex justify-center">
          <button
            onClick={toggle}
            className="group flex items-center gap-3 md:gap-4 cursor-pointer py-3 px-6"
          >
            <span
              className="text-[11px] md:text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] transition-opacity duration-300 group-hover:opacity-100"
              style={{ color: theme.primary, opacity: isOpen ? 0.8 : 0.5 }}
            >
              {isOpen ? "全文を閉じる" : "全文を読む"}
            </span>
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ color: theme.primary, opacity: 0.5 }}
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </button>
        </div>

        {/* Full Text Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="fulltext-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.4, delay: 0.1 },
              }}
              style={{ overflow: "hidden" }}
            >
              <div className="pt-12 md:pt-20 pb-8">
                {sections.map((section, i) => (
                  <RenderSection key={i} section={section} theme={theme} />
                ))}

                {/* End marker */}
                <div className="mt-16 md:mt-24 flex justify-center">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-8 h-[1px]"
                      style={{ backgroundColor: `${theme.primary}20` }}
                    />
                    <span
                      className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
                      style={{ color: `${theme.primary}40` }}
                    >
                      Fin
                    </span>
                    <div
                      className="w-8 h-[1px]"
                      style={{ backgroundColor: `${theme.primary}20` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle bottom border */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-[1px]"
        style={{ backgroundColor: `${theme.primary}15` }}
      />
    </section>
  );
}

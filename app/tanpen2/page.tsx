"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getStory } from "@/lib/stories";
import StoryNavigation from "@/components/story/StoryNavigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GlitchText from "@/components/animation/GlitchText";
import GrainOverlay from "@/components/visual/GrainOverlay";
import NoiseBackground from "@/components/visual/NoiseBackground";
import PageTransition from "@/components/layout/PageTransition";
import FullTextSection from "@/components/story/FullTextSection";
import { fullText } from "@/lib/fulltext/tanpen2";

gsap.registerPlugin(ScrollTrigger);

const story = getStory("tanpen2")!;

function TypewriterTitle() {
  const chars = story.title.split("");
  return (
    <div className="font-[family-name:var(--font-zen)] text-2xl md:text-4xl lg:text-5xl tracking-wider">
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: 1.0 + i * 0.08,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : undefined,
            color: "var(--text)",
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1.2em] ml-1 align-middle"
        style={{ backgroundColor: story.theme.secondary }}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden crt-scanlines"
      style={{ backgroundColor: story.theme.void }}
    >
      <NoiseBackground opacity={0.08} />
      <div className="relative z-10 text-center px-6">
        {/* Thin red horizontal line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-[1px] mb-12"
          style={{ backgroundColor: story.theme.secondary }}
        />
        <TypewriterTitle />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 4, duration: 1.5 }}
          className="mt-8 text-xs tracking-[0.5em] font-[family-name:var(--font-inter)]"
          style={{ color: story.theme.primary }}
        >
          {story.subtitle}
        </motion.p>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="h-[1px] mt-12"
          style={{ backgroundColor: story.theme.secondary }}
        />
      </div>
    </section>
  );
}

function SynopsisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden crt-scanlines"
      style={{ backgroundColor: story.theme.accent }}
    >
      <NoiseBackground opacity={0.06} />
      <div ref={ref} className="relative z-10 max-w-lg mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
            style={{ color: story.theme.primary }}
          >
            Case File — Synopsis
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-base leading-[2.2] tracking-wide"
          style={{ color: story.theme.primary }}
        >
          <GlitchText
            text={story.synopsis}
            intensity="low"
            color={story.theme.secondary}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ExcerptSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const paragraphs = story.excerpt.split("\n\n");
  const highlightWords = ["水滴", "精密機械", "灼熱", "静か"];

  return (
    <section className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: story.theme.void }}>
      <div ref={ref} className="relative z-10 max-w-lg mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
            style={{ color: story.theme.primary }}
          >
            Excerpt
          </span>
        </motion.div>
        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.8, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
            className="text-sm leading-[2.2] tracking-wide mb-8 last:mb-0"
            style={{ color: story.theme.primary }}
          >
            {p.split(new RegExp(`(${highlightWords.join("|")})`)).map((part, j) =>
              highlightWords.includes(part) ? (
                <span
                  key={j}
                  className="transition-colors duration-700 hover:text-[var(--t2-secondary)]"
                  style={{ color: story.theme.primary }}
                >
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </motion.p>
        ))}

        {/* Aside - philosophical question */}
        <motion.aside
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 0.4, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 pl-6 border-l"
          style={{ borderColor: `${story.theme.secondary}40` }}
        >
          <p
            className="text-xs leading-[2] tracking-wider italic font-[family-name:var(--font-cormorant)]"
            style={{ color: story.theme.primary }}
          >
            観察することで対象は変質する。では、観察者自身は？
          </p>
        </motion.aside>
      </div>
    </section>
  );
}

function ClosingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!ref.current) return;

    const chars = ref.current.querySelectorAll(".closing-char");
    gsap.fromTo(
      chars,
      { opacity: 1, x: 0, y: 0 },
      {
        opacity: 0,
        x: () => (Math.random() - 0.5) * 200,
        y: () => (Math.random() - 0.5) * 200,
        stagger: 0.02,
        scrollTrigger: {
          trigger: ref.current,
          start: "center center",
          end: "bottom top",
          scrub: 1.5,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          className="font-[family-name:var(--font-zen)] text-xl md:text-3xl leading-[2] tracking-wider"
          style={{ color: story.theme.primary }}
        >
          {story.closingQuote.split("").map((char, i) => (
            <span key={i} className="closing-char inline-block" style={{ whiteSpace: char === " " ? "pre" : undefined }}>
              {char}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Tanpen2Page() {
  return (
    <PageTransition>
      <GrainOverlay opacity={0.06} />
      <ScrollProgress color={story.theme.secondary} />
      <HeroSection />
      <SynopsisSection />
      <ExcerptSection />
      <FullTextSection sections={fullText} theme={story.theme} />
      <ClosingSection />
      <StoryNavigation currentSlug="tanpen2" />
    </PageTransition>
  );
}

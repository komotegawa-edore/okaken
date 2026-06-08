"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getStory } from "@/lib/stories";
import StoryNavigation from "@/components/story/StoryNavigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/visual/GrainOverlay";
import PageTransition from "@/components/layout/PageTransition";

gsap.registerPlugin(ScrollTrigger);

const story = getStory("tanpen4")!;

function GridBackground({ broken = false }: { broken?: boolean }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 136, ${broken ? 0.02 : 0.06}) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 136, ${broken ? 0.02 : 0.06}) 1px, transparent 1px)
        `,
        backgroundSize: broken ? "60px 60px" : "40px 40px",
        transform: broken ? "skewX(-2deg) skewY(1deg)" : "none",
      }}
    />
  );
}

function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { scale: 0.3, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      <GridBackground />

      {/* Neon pulse border */}
      <motion.div
        className="absolute inset-4 border pointer-events-none"
        style={{ borderColor: `${story.theme.secondary}20` }}
        animate={{
          borderColor: [
            `${story.theme.secondary}10`,
            `${story.theme.secondary}30`,
            `${story.theme.secondary}10`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div ref={titleRef} className="relative z-10 text-center px-6 opacity-0">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider">
          <span style={{ color: story.theme.primary }}>Creator</span>
          <span className="text-[var(--muted)] mx-2 md:mx-4">/</span>
          <span style={{ color: story.theme.secondary }}>Replicator</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-8 text-xs tracking-[0.5em] font-[family-name:var(--font-inter)]"
          style={{ color: story.theme.secondary }}
        >
          {story.subtitle}
        </motion.p>
      </div>
    </section>
  );
}

function SynopsisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const pullQuote = "創造者と複製者——その境界はどこにあるのか。";

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      <GridBackground broken />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-6 md:px-8">
        {/* Pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-[family-name:var(--font-zen)] leading-[1.8] tracking-wider mb-20 text-center"
          style={{ color: story.theme.secondary }}
        >
          {pullQuote}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <span
            className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
            style={{ color: story.theme.secondary }}
          >
            Synopsis
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl leading-[2.2] tracking-wide font-bold"
          style={{ color: story.theme.primary }}
        >
          {story.synopsis}
        </motion.p>
      </div>
    </section>
  );
}

function ExcerptSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const paragraphs = story.excerpt.split("\n\n");

  return (
    <section className="relative py-32 md:py-48 overflow-hidden" style={{ backgroundColor: story.theme.accent }}>
      <GridBackground />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6 md:px-8">
        {/* Flickering left border */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-[2px]"
          style={{ backgroundColor: story.theme.secondary }}
          animate={{
            opacity: [1, 0.3, 1, 0.6, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "steps(5)",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
            style={{ color: story.theme.secondary }}
          >
            Excerpt
          </span>
        </motion.div>

        {paragraphs.map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.3 }}
            className="text-base md:text-lg leading-[2] tracking-wide mb-8 last:mb-0"
            style={{ color: story.theme.primary }}
          >
            {p.split(/(境界|創る者|複製する者|線)/).map((part, j) =>
              ["境界", "創る者", "複製する者", "線"].includes(part) ? (
                <span
                  key={j}
                  className="px-1 py-0.5 border"
                  style={{
                    borderColor: `${story.theme.secondary}40`,
                    color: story.theme.secondary,
                    textShadow: `0 0 10px ${story.theme.secondary}40`,
                  }}
                >
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

function ClosingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current.querySelector(".grid-bg"), {
      backgroundSize: "200px 200px",
      opacity: 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const manifestText = story.closingQuote;

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      <div className="grid-bg absolute inset-0 grid-pattern" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center px-6"
      >
        <p
          className="font-[family-name:var(--font-zen)] text-2xl md:text-4xl lg:text-5xl leading-[1.8] tracking-wider"
          style={{ color: story.theme.secondary }}
        >
          {manifestText}
        </p>
      </motion.div>
    </section>
  );
}

export default function Tanpen4Page() {
  return (
    <PageTransition>
      <GrainOverlay opacity={0.03} />
      <ScrollProgress color={story.theme.secondary} />
      <HeroSection />
      <SynopsisSection />
      <ExcerptSection />
      <ClosingSection />
      <StoryNavigation currentSlug="tanpen4" />
    </PageTransition>
  );
}

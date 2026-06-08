"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getStory } from "@/lib/stories";
import StoryNavigation from "@/components/story/StoryNavigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/visual/GrainOverlay";
import InkBleed from "@/components/visual/InkBleed";
import PageTransition from "@/components/layout/PageTransition";
import FullTextSection from "@/components/story/FullTextSection";
import { fullText } from "@/lib/fulltext/tanpen6";

gsap.registerPlugin(ScrollTrigger);

const story = getStory("tanpen6")!;

function WashiTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(ellipse at 20% 50%, ${story.theme.primary}08, transparent 50%),
          radial-gradient(ellipse at 80% 30%, ${story.theme.secondary}06, transparent 50%),
          linear-gradient(135deg, ${story.theme.void} 0%, #12100d 100%)
        `,
      }}
    />
  );
}

function LivingChar({ char, index }: { char: string; index: number }) {
  const [isAlive, setIsAlive] = useState(false);

  useEffect(() => {
    const delay = 1500 + index * 120;
    const timer = setTimeout(() => setIsAlive(true), delay);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={
        isAlive
          ? {
              opacity: 1,
              y: [0, -2, 1, 0],
              rotate: [0, Math.random() * 2 - 1, 0],
            }
          : { opacity: 0 }
      }
      transition={{
        opacity: { duration: 0.3 },
        y: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2,
        },
        rotate: {
          duration: 4 + Math.random() * 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random(),
        },
      }}
      className="inline-block"
      style={{ whiteSpace: char === " " ? "pre" : undefined }}
    >
      {char}
    </motion.span>
  );
}

function HeroSection() {
  const titleChars = story.title.split("");

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      <WashiTexture />
      <InkBleed />

      <div className="relative z-10 text-center px-6">
        <h1 className="font-[family-name:var(--font-zen)] text-3xl md:text-5xl lg:text-6xl tracking-wider">
          {titleChars.map((char, i) => (
            <LivingChar key={i} char={char} index={i} />
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1.5 }}
          className="mt-8 text-xs tracking-[0.5em] font-[family-name:var(--font-inter)]"
          style={{ color: story.theme.primary }}
        >
          {story.subtitle}
        </motion.p>
      </div>
    </section>
  );
}

function WritingAnimation({ text, delay = 0 }: { text: string; delay?: number }) {
  const chars = text.split("");
  return (
    <span>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.05,
            delay: delay + i * 0.04,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

function SynopsisSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const lifeWords = ["動き始めた", "物質", "肉体", "自律的", "呼吸", "生命", "変容"];

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      <WashiTexture />
      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="text-[10px] tracking-[0.4em] uppercase font-[family-name:var(--font-inter)]"
            style={{ color: story.theme.primary }}
          >
            Synopsis
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {isInView ? (
            <p className="text-lg md:text-xl leading-[2.2] tracking-wide" style={{ color: story.theme.primary }}>
              {story.synopsis.split(new RegExp(`(${lifeWords.join("|")})`)).map((part, i) =>
                lifeWords.includes(part) ? (
                  <motion.span
                    key={i}
                    animate={{ color: ["#d9cfc0", "#e06040", "#d9cfc0"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                    className="inline"
                  >
                    {part}
                  </motion.span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </p>
          ) : null}
        </motion.div>

        {/* Notre nouvelle forme de vie */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="mt-16 text-center font-[family-name:var(--font-cormorant)] text-xl md:text-2xl italic tracking-wider"
          style={{ color: story.theme.accent }}
        >
          &ldquo;Notre nouvelle forme de vie&rdquo;
        </motion.p>
      </div>
    </section>
  );
}

function MutatingChar({ char, index }: { char: string; index: number }) {
  const [mutated, setMutated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.02) {
        setMutated(true);
        setTimeout(() => setMutated(false), 300 + Math.random() * 700);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      style={{
        display: "inline-block",
        transform: mutated
          ? `translate(${Math.random() * 3 - 1.5}px, ${Math.random() * 3 - 1.5}px) scale(${1 + Math.random() * 0.3})`
          : undefined,
        color: mutated ? "#e06040" : undefined,
        transition: "transform 0.2s ease, color 0.3s ease",
        whiteSpace: char === " " ? "pre" : undefined,
      }}
    >
      {char}
    </span>
  );
}

function ExcerptSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const paragraphs = story.excerpt.split("\n\n");

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ backgroundColor: story.theme.void }}
    >
      <WashiTexture />
      <InkBleed />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.6 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
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
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 + i * 0.4 }}
            className="text-base md:text-lg leading-[2] tracking-wide mb-8 last:mb-0"
            style={{ color: story.theme.primary }}
          >
            {p.split("").map((char, j) => (
              <MutatingChar key={`${i}-${j}`} char={char} index={j} />
            ))}
          </motion.p>
        ))}

        {/* Surreal marginalia */}
        <motion.aside
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 0.3, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mt-16 ml-auto max-w-xs text-right"
        >
          <p
            className="text-xs leading-[2] tracking-wider italic font-[family-name:var(--font-cormorant)]"
            style={{ color: story.theme.accent }}
          >
            文字が紙面を離れるとき、それは死か、それとも——
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

    const chars = ref.current.querySelectorAll(".butterfly-char");
    gsap.to(chars, {
      y: () => -50 + Math.random() * -100,
      x: () => (Math.random() - 0.5) * 200,
      rotateZ: () => (Math.random() - 0.5) * 90,
      opacity: 0,
      stagger: {
        each: 0.03,
        from: "random",
      },
      scrollTrigger: {
        trigger: ref.current,
        start: "center center",
        end: "bottom top",
        scrub: 2,
      },
    });

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
      <WashiTexture />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-4xl lg:text-5xl italic tracking-wider leading-[1.6]">
            {story.closingQuote.split("").map((char, i) => (
              <span
                key={i}
                className="butterfly-char inline-block"
                style={{
                  color: story.theme.accent,
                  whiteSpace: char === " " ? "pre" : undefined,
                }}
              >
                {char}
              </span>
            ))}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Tanpen6Page() {
  return (
    <PageTransition>
      <GrainOverlay opacity={0.05} />
      <ScrollProgress color={`${story.theme.accent}`} />
      <HeroSection />
      <SynopsisSection />
      <ExcerptSection />
      <FullTextSection sections={fullText} theme={story.theme} />
      <ClosingSection />
      <StoryNavigation currentSlug="tanpen6" />
    </PageTransition>
  );
}

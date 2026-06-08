"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getStory } from "@/lib/stories";
import StoryHero from "@/components/story/StoryHero";
import SynopsisSection from "@/components/story/SynopsisSection";
import ExcerptSection from "@/components/story/ExcerptSection";
import StoryNavigation from "@/components/story/StoryNavigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import FloatingParticles from "@/components/animation/FloatingParticles";
import GrainOverlay from "@/components/visual/GrainOverlay";
import PageTransition from "@/components/layout/PageTransition";
import { useMousePosition } from "@/hooks/useMousePosition";

gsap.registerPlugin(ScrollTrigger);

const story = getStory("tanpen1")!;

function PulsatingOrb() {
  const mouse = useMousePosition();

  return (
    <motion.div
      className="absolute w-64 h-64 rounded-full pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${story.theme.primary}30, ${story.theme.secondary}10, transparent 70%)`,
        filter: "blur(40px)",
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        x: (mouse.x - (typeof window !== "undefined" ? window.innerWidth / 2 : 0)) * 0.05 - 128,
        y: (mouse.y - (typeof window !== "undefined" ? window.innerHeight / 2 : 0)) * 0.05 - 128,
        scale: [1, 1.1, 1],
      }}
      transition={{
        x: { type: "spring", stiffness: 50, damping: 30 },
        y: { type: "spring", stiffness: 50, damping: 30 },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
    />
  );
}

function FloatingColorCircles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[
        { color: story.theme.primary, x: "20%", y: "30%", size: 200, delay: 0 },
        { color: story.theme.secondary, x: "70%", y: "60%", size: 160, delay: 2 },
        { color: story.theme.accent, x: "40%", y: "80%", size: 120, delay: 4 },
      ].map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            left: circle.x,
            top: circle.y,
            background: `radial-gradient(circle, ${circle.color}15, transparent 70%)`,
            filter: "blur(30px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: circle.delay,
          }}
        />
      ))}
    </div>
  );
}

function ClosingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    gsap.fromTo(
      el.querySelectorAll(".closing-element"),
      { y: 0, opacity: 1 },
      {
        y: -60,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: el,
          start: "center center",
          end: "bottom top",
          scrub: 1,
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
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          className="closing-element font-[family-name:var(--font-zen)] text-xl md:text-3xl leading-[2] tracking-wider"
          style={{ color: story.theme.primary }}
        >
          {story.closingQuote}
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "60px" } : { width: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="closing-element h-[1px] mx-auto mt-12"
          style={{ backgroundColor: story.theme.primary }}
        />
      </div>
    </section>
  );
}

export default function Tanpen1Page() {
  return (
    <PageTransition>
      <GrainOverlay />
      <ScrollProgress color={story.theme.primary} />

      <StoryHero story={story}>
        <PulsatingOrb />
        <FloatingParticles
          color={`rgba(245, 230, 200, 0.4)`}
          count={30}
          speed={0.15}
        />
      </StoryHero>

      <SynopsisSection story={story}>
        <FloatingColorCircles />
        <div
          className="absolute left-0 top-0 bottom-0 w-[2px]"
          style={{
            background: `linear-gradient(to bottom, transparent, ${story.theme.primary}40, ${story.theme.secondary}40, transparent)`,
          }}
        />
      </SynopsisSection>

      <ExcerptSection
        story={story}
        highlightWords={["光", "色", "意識", "暗闇", "記憶"]}
        highlightColor={story.theme.primary}
      />

      <ClosingSection />

      <StoryNavigation currentSlug="tanpen1" />
    </PageTransition>
  );
}

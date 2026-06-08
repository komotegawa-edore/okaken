"use client";

import HeroSection from "@/components/top/HeroSection";
import StoryCard from "@/components/top/StoryCard";
import { stories } from "@/lib/stories";
import GrainOverlay from "@/components/visual/GrainOverlay";
import PageTransition from "@/components/layout/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <GrainOverlay />
      <HeroSection />

      {/* Story Grid */}
      <section className="relative py-24 md:py-40 px-6 md:px-10 bg-[var(--bg)]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {stories.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-[var(--muted)]/10">
        <p className="text-xs tracking-[0.3em] text-[var(--muted)] font-[family-name:var(--font-inter)]">
          okaken project
        </p>
      </footer>
    </PageTransition>
  );
}

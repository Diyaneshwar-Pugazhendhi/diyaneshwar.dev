"use client";

import * as React from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { heroState } from "@/lib/hero-state";

const DEFAULT_GREETINGS = [
  { text: "Curious." },
  { text: "Builder." },
  { text: "Maker." },
  { text: "Learner." },
  { text: "Shipper." },
  { text: "Driven." },
  { text: "Ready." },
];

type ArcRevealHeroProps = {
  greetings?: { text: string; lang?: string }[];
  greetingHold?: number;
  revealDuration?: number;
  className?: string;
  introClassName?: string;
  greetingClassName?: string;
  revealClassName?: string;
  storageKey?: string;
  children?: React.ReactNode;
};

/**
 * ArcRevealHero — adapted from the 21st.dev `ruixen.ui/arc-preloader-hero`.
 * A full-screen foreground curtain cycles single-word greetings, then a curved
 * (Bézier) edge lifts to wipe the curtain away and reveal `children`.
 */
export function ArcRevealHero({
  greetings = DEFAULT_GREETINGS,
  greetingHold = 620,
  revealDuration = 1500,
  className,
  introClassName,
  greetingClassName,
  revealClassName,
  storageKey,
  children,
}: ArcRevealHeroProps) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = React.useState<"intro" | "reveal" | "done">("intro");
  const [index, setIndex] = React.useState(0);
  const progress = useMotionValue(0);

  const path = useTransform(progress, (v) => {
    const g = 110 - v * 140;
    const k = g + 25;
    return `M 0 ${g} Q 50 ${k} 100 ${g} L 100 110 L 0 110 Z`;
  });

  React.useEffect(() => {
    if (reduced) {
      setPhase("done");
      return;
    }
    if (storageKey && typeof window !== "undefined") {
      try {
        if (window.sessionStorage.getItem(storageKey) === "done") setPhase("done");
      } catch {}
    }
  }, [reduced, storageKey]);

  React.useEffect(() => {
    if (phase !== "intro") return;
    if (index >= greetings.length - 1) {
      const t = window.setTimeout(() => setPhase("reveal"), greetingHold + 220);
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(() => setIndex((i) => i + 1), greetingHold);
    return () => window.clearTimeout(t);
  }, [phase, index, greetingHold, greetings.length]);

  React.useEffect(() => {
    if (phase !== "reveal") return;
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.85, 0, 0.15, 1],
      onComplete: () => {
        if (storageKey && typeof window !== "undefined") {
          try {
            window.sessionStorage.setItem(storageKey, "done");
          } catch {}
        }
        setPhase("done");
      },
    });
    return () => controls.stop();
  }, [phase, progress, revealDuration, storageKey]);

  const showOverlay = phase !== "done";
  const current = greetings[Math.min(index, greetings.length - 1)];

  // tell the background when the intro countdown/reveal finishes so it can
  // fade in and transition with the hero
  React.useEffect(() => {
    if (phase === "done") heroState.setDone(true);
  }, [phase]);

  return (
    <section
      aria-label="Hero"
      className={cn(
        "relative isolate min-h-screen w-full overflow-hidden text-foreground",
        className,
      )}
    >
      <div className={cn("relative z-0", revealClassName)}>{children}</div>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
              "absolute inset-x-0 top-0 z-30 h-screen overflow-hidden bg-foreground",
              introClassName,
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phase === "intro" && current && (
                  <motion.span
                    key={`${index}-${current.text}`}
                    lang={current.lang}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "select-none px-6 text-center text-5xl font-semibold tracking-tight text-background sm:text-6xl md:text-7xl",
                      greetingClassName,
                    )}
                  >
                    {current.text}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path d={path} style={{ fill: "hsl(var(--background))" }} />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

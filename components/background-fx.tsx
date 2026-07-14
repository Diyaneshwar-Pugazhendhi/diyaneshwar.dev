"use client";

import * as React from "react";
import { useSyncExternalStore } from "react";
import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { heroState } from "@/lib/hero-state";

// Complementary scheme (color-wheel): indigo (~230) base + its 180° complement
// amber (~50) accent, softened with an analogous violet. All low-alpha so the
// "quiet" feel holds while the warm complement makes it stand out.
const ORBS = [
  {
    pos: "absolute -left-40 -top-40",
    grad: "h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,hsla(230,85%,72%,0.42),transparent_60%)] blur-3xl",
    animate: { x: [0, 50, -20, 0], y: [0, 30, 10, 0] },
    duration: 20,
  },
  {
    pos: "absolute -right-32 top-1/4",
    grad: "h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,hsla(265,80%,75%,0.30),transparent_60%)] blur-3xl",
    animate: { x: [0, -40, 20, 0], y: [0, -20, 35, 0] },
    duration: 24,
  },
  {
    pos: "absolute -bottom-40 left-1/4",
    grad: "h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,hsla(45,92%,70%,0.28),transparent_60%)] blur-3xl",
    animate: { x: [0, 25, -35, 0], y: [0, -30, 20, 0] },
    duration: 28,
  },
];

const EASE = [0.33, 1, 0.68, 1] as const; // gentle ease-out

export function BackgroundFX() {
  const reduced = useReducedMotion();
  const ready = useSyncExternalStore(
    heroState.subscribe,
    heroState.getSnapshot,
    heroState.getSnapshot,
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const y = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className={orb.pos}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.8, ease: EASE, delay: 0.15 + i * 0.15 }}
        >
          <motion.div
            className={orb.grad}
            animate={reduced ? undefined : orb.animate}
            transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}

      {/* cursor-following glow — warm complement so it pops against the cool field */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
      >
        <motion.div
          style={{ x, y }}
          className="absolute -ml-[14rem] -mt-[14rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,hsla(40,92%,68%,0.30),transparent_55%)] blur-3xl"
        />
      </motion.div>

      {/* faint dot grid — fades in last */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.35 }}
        className="absolute inset-0 bg-[radial-gradient(circle,hsl(230_30%_70%/0.18)_1px,transparent_1px)] [background-size:24px_24px]"
      />
    </div>
  );
}

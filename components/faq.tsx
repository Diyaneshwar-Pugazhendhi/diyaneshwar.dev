"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "Are you available for freelance or contract work?",
    a: "Yes — I take on a small number of project-build sprints per semester. Reach out via the Project build plan and we'll scope it together.",
  },
  {
    q: "What's your stack?",
    a: "TypeScript end to end: React and Next.js on the front, Node and PostgreSQL behind it, deployed on Vercel or a VPS. I'm happy to adapt to your codebase.",
  },
  {
    q: "Do you mentor complete beginners?",
    a: "Absolutely. The Mentorship plan is built for students shipping their first real projects — we start with goals and work outward from there.",
  },
  {
    q: "Can I see real code, not just screenshots?",
    a: "Of course. My GitHub and a few live demos are linked in the footer, and most portfolio pieces link straight to their repos.",
  },
  {
    q: "How do payments work for mentorship?",
    a: "Monthly, cancel anytime. We kick off with a free intro call so you can decide if it's a fit before committing.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium tracking-tight">{q}</span>
        <Plus
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
            open && "rotate-45",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="container-content scroll-mt-24 py-24 md:py-32">
      <Reveal className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          FAQ
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Questions, answered.
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-2xl">
        {FAQS.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}

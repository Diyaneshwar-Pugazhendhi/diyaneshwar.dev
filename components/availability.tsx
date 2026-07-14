import { Code2, Clapperboard, BadgeCheck, Linkedin, ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { site } from "@/lib/site";

const HIGHLIGHTS = [
  { icon: Code2, title: "Full-stack dev", body: "TypeScript, React, Node & PostgreSQL." },
  { icon: Clapperboard, title: "Video & motion", body: "Editing, color, motion graphics." },
  { icon: BadgeCheck, title: "7 certifications", body: "Google, CompTIA & Anthropic." },
];

export function Availability() {
  return (
    <section id="availability" className="container-content scroll-mt-24 py-24 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Open to work
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Ready to join as an associate.
        </h2>
        <p className="mt-3 text-balance text-muted-foreground">
          I&apos;m looking for an associate role where I can contribute across
          software and video from day one — not freelance gigs.
        </p>
      </Reveal>

      <RevealGroup className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <RevealItem key={h.title}>
            <div className="flex h-full items-start gap-3 rounded-lg border border-border bg-card p-5">
              <h.icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground/70" />
              <div>
                <h3 className="text-sm font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.body}</p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      <Reveal className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          Get in touch
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
      </Reveal>
    </section>
  );
}

import { ArrowRight, Sparkles } from "lucide-react";
import { ArcRevealHero } from "@/components/arc-reveal-hero";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <ArcRevealHero storageKey="portfolio-arc-reveal" aria-label="Hero">
      <div
        id="top"
        className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-6 py-28 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" />
          {site.role}
        </span>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          I build things that{" "}
          <span className="underline decoration-foreground/30 decoration-4 underline-offset-8">
            ship
          </span>
          .
        </h1>

        <p className="max-w-xl text-balance text-base text-muted-foreground md:text-lg">
          A computer-science student who builds full-stack software and edits
          video — ready to join a team as an associate. This is the work
          I&apos;m proud of.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            See my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </ArcRevealHero>
  );
}

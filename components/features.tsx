import { Clapperboard, Code2, Trophy, type LucideIcon } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  metric: string;
};

const FEATURES: Feature[] = [
  {
    icon: Code2,
    title: "Software that ships",
    body: "Full-stack web apps in TypeScript and React, with Node and PostgreSQL behind them. I take features from idea to production.",
    metric: "TS · React · Node",
  },
  {
    icon: Clapperboard,
    title: "Video editing & motion",
    body: "Cuts, color, and motion graphics for real client gigs — the same care for detail I bring to code.",
    metric: "Premiere · After Effects",
  },
  {
    icon: Trophy,
    title: "Certified & recognized",
    body: "Seven certifications across AI, data, and project management from Google, CompTIA, and Anthropic.",
    metric: "7 certifications",
  },
];

export function Features() {
  return (
    <section id="features" className="container-content scroll-mt-24 py-24 md:py-32">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          What I bring
        </p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Not just a student. A builder.
        </h2>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <RevealItem key={f.title}>
            <article className="group h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)]">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:scale-110">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-widest text-foreground/70">
                {f.metric}
              </p>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

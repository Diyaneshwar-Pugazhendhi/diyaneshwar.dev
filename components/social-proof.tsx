import { Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const STATS = [
  { value: "6", label: "Certifications earned" },
  { value: "3", label: "Google certificates" },
  { value: "1", label: "Public project shipped" },
  { value: "TS·React", label: "Core stack" },
];

const TESTIMONIALS = [
  {
    quote:
      "Diyaneshwar shipped our hackathon MVP in a weekend — clean code, zero hand-holding. Rare for any engineer, let alone a student.",
    name: "Priya R.",
    role: "Team Lead, Hackathon '25",
  },
  {
    quote:
      "He treats side projects like products. The attention to detail and follow-through is what you'd expect from a senior, not a sophomore.",
    name: "Arjun M.",
    role: "Mentor, Dev Club",
  },
];

export function SocialProof() {
  return (
    <section
      id="proof"
      className="border-y border-border bg-muted/40 scroll-mt-24 py-24 md:py-32"
    >
      <div className="container-content">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Proof
          </p>
          <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The work speaks — so do the people around it.
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <RevealItem key={s.label} className="text-center">
              <div className="text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <Quote className="h-6 w-6 text-foreground/40" />
                <blockquote className="mt-4 flex-1 text-balance text-base leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-medium tracking-tight">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export const site = {
  name: "Diyaneshwar Pugazhendhi",
  role: "CS Student · Dev & Video Editor",
  initials: "DP",
  linkedin: "https://www.linkedin.com/in/diyaneshwar-p-4b65b1378/",
  github: "https://github.com/Diyaneshwar-Pugazhendhi",
  email: "hello@diyaneshwar.dev",
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
};

export const certifications: Certification[] = [
  {
    name: "Google AI Professional Certificate",
    issuer: "Google",
    date: "Jul 2026",
    link: "https://www.credly.com/badges/72842614-be98-4ac4-8e53-f718264e6c28",
  },
  {
    name: "Google Advanced Data Analytics Certificate",
    issuer: "Google",
    date: "Jun 2026",
    link: "https://www.credly.com/go/6d1sUoVy",
  },
  {
    name: "Google Project Management Certificate",
    issuer: "Google",
    date: "Jul 2026",
    link: "https://www.credly.com/go/p9808JBd",
  },
  {
    name: "CompTIA A+ (Part 1)",
    issuer: "CompTIA · Alison",
    date: "Jul 2026",
    link: "https://alison.com/verify/3b4cfbf20b",
  },
  {
    name: "AI Fluency Foundation",
    issuer: "Certificate",
    date: "2026",
  },
  {
    name: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
  },
  {
    name: "AI Fluency for Students",
    issuer: "Anthropic",
    date: "2026",
  },
];

export type Project = {
  name: string;
  description: string;
  language: string;
  stars: number;
  href: string;
};

export const projects: Project[] = [
  {
    name: "insight-analytics",
    description:
      "A full-stack analytics dashboard — Fastify API + React/SPA with dark, SaaS-style visualizations.",
    language: "TypeScript",
    stars: 0,
    href: "https://github.com/Diyaneshwar-Pugazhendhi/insight-analytics",
  },
];

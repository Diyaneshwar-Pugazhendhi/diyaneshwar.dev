# diyaneshwar.dev

![CI](https://github.com/Diyaneshwar-Pugazhendhi/diyaneshwar.dev/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

My personal portfolio site — a developer-focused, motion-rich single page built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

![Preview](https://raw.githubusercontent.com/Diyaneshwar-Pugazhendhi/diyaneshwar.dev/main/screenshots/diyaneshwar-dev.png)

🔗 **Live:** [diyaneshwar.dev](https://diyaneshwar.dev)

## ✨ Highlights

- **Hero with arc reveal** — animated headline + scrollytelling gradient
- **Background FX** — subtle particle/grid layer
- **Themed** — light/dark toggle powered by `next-themes`
- **Sections** — hero, projects, features, certifications, social proof, FAQ, availability, contact footer
- **Responsive** — works on mobile, tablet, desktop

## 🛠 Tech Stack

| Layer | Tools |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | lucide-react |
| Theme | next-themes |
| Deploy | Vercel |

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/Diyaneshwar-Pugazhendhi/diyaneshwar.dev.git
cd diyaneshwar.dev

# Install
npm install

# Run dev server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
diyaneshwar.dev/
├── app/
│   ├── layout.tsx        # Root layout with theme provider
│   ├── page.tsx          # Home page composition
│   └── globals.css       # Tailwind + custom styles
├── components/
│   ├── navbar.tsx        # Sticky nav with theme toggle
│   ├── hero.tsx          # Landing hero
│   ├── arc-reveal-hero.tsx
│   ├── background-fx.tsx
│   ├── projects.tsx      # Project showcase grid
│   ├── features.tsx
│   ├── certifications.tsx
│   ├── social-proof.tsx
│   ├── faq.tsx
│   ├── availability.tsx
│   ├── footer.tsx
│   ├── reveal.tsx        # Scroll-reveal wrapper
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/                  # Utilities
├── public/               # Static assets
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## 🎨 Customizing

- **Content** — edit text in `app/page.tsx` and individual components
- **Colors** — update `tailwind.config.ts` theme tokens
- **Sections** — drop new components into `components/` and compose them in `app/page.tsx`
- **Animation** — tweak Framer Motion props (variants, durations) per component

## 📦 Scripts

```bash
npm run dev      # Local dev server
npm run build    # Production build
npm run start    # Run production build
npm run lint     # ESLint
```

## 🌗 Theming

The site uses `next-themes` with a class strategy. Toggle is wired in the navbar; theme is persisted in `localStorage` and respects the system preference by default.

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](.github/CONTRIBUTING.md) for setup instructions and guidelines.

## 📄 License

MIT © [Diyaneshwar Pugazhendhi](https://github.com/Diyaneshwar-Pugazhendhi)

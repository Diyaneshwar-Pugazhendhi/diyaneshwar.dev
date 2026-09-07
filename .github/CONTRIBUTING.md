# Contributing to diyaneshwar.dev

Thank you for your interest in contributing! This project is a personal portfolio site, but contributions that improve code quality, fix bugs, or enhance features are welcome.

## Development Setup

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

### Getting Started

1. **Fork the repository** and clone it locally:
   ```bash
   git clone https://github.com/<your-username>/diyaneshwar.dev.git
   cd diyaneshwar.dev
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will be available at [http://localhost:3000](http://localhost:3000).

4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build a production-optimized bundle |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint to check for style and errors |

### Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Theme | next-themes |

### Code Style

- TypeScript strict mode is enforced
- Run `npm run lint` before committing
- Use functional React components with TypeScript props interfaces
- Tailwind CSS classes for all styling (no inline styles)
- Framer Motion for all animations

### Project Structure

```
app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx            # Home page
├── globals.css         # Tailwind + custom styles
components/
├── navbar.tsx          # Sticky nav with theme toggle
├── hero.tsx            # Landing hero section
├── projects.tsx        # Project showcase grid
└── ...                 # Other section components
lib/
└── ...                 # Utility functions
```

### Making Changes

1. Make your changes on a feature branch
2. Ensure `npm run lint` passes with no errors
3. Test your changes in the browser at `http://localhost:3000`
4. Commit with a clear, descriptive message:
   ```
   git commit -m "feat: add new project section"
   ```
5. Push to your fork and open a Pull Request

### Reporting Issues

Please use the [issue tracker](../issues) for bug reports and feature requests. Include:

- A clear description of the issue or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Your environment (OS, Node.js version, browser)

### License

By contributing, you agree that your contributions will be licensed under the MIT License.

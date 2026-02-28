# embed-genius-folio

Personal portfolio website for a Mid-level Embedded Systems Engineer. Built with a dark, circuit-board aesthetic using React and Tailwind CSS, showcasing firmware experience, hardware platforms, projects, and professional history.

## Sections

- **Hero** – Specialties and animated circuit-line intro
- **About** – Profile, cover letter, and key stats
- **Skills** – Languages, MCU platforms, tools, and communication protocols
- **Projects** – Smart Farm, Park Here, Energy Consumption Prediction, Smart Lab
- **Experience** – Work history at Nouvenn IoT and INATEL
- **Education** – Academic background
- **Contact** – Contact form

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | Vite |
| Language | TypeScript |
| UI framework | React |
| Component library | shadcn-ui (Radix UI) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Charts | Recharts |
| Data fetching | TanStack Query |
| Package manager | Bun |
| Testing | Vitest |

## Getting Started

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd embed-genius-folio

# Install dependencies
bun install

# Start the development server (http://localhost:8080)
bun run dev
```

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server with HMR at `localhost:8080` |
| `bun run build` | Production build |
| `bun run build:dev` | Development build (keeps source maps) |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run test` | Run tests once with Vitest |
| `bun run test:watch` | Run Vitest in watch mode |

## Project Structure

```
src/
├── components/         # Page sections and reusable UI
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── ContactSection.tsx
│   ├── Navbar.tsx
│   └── ui/             # shadcn-ui primitives
├── pages/
│   ├── Index.tsx       # Main page layout
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── test/               # Vitest test files
```

## Deployment

Build the project and serve the `dist/` folder with any static hosting provider (Vercel, Netlify, GitHub Pages, etc.):

```sh
bun run build
# deploy the dist/ directory
```

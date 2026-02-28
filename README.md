# Portfolio Website

Personal portfolio website for **Pedro Luis Dionísio Fraga**, a Mid-level Embedded Systems Engineer. Built with a dark, circuit-board aesthetic using React and Tailwind CSS, showcasing firmware experience, hardware platforms, projects, and professional history.

**Live:** [pedroluisdionisiofraga.github.io/portfolio-website](https://PedroLuisDionisioFraga.github.io/portfolio-website/)

## Sections

- **Hero** – Animated circuit-line intro with specialties (Firmware, IoT, Cellular/MQTT/BLE/WiFi/Mesh, Silabs/ESP32/STM32, Embedded Linux)
- **About** – Profile photo, cover letter, and key stats (5 years experience, 5+ projects, 3 certifications)
- **Skills** – Languages (C/C++, Bash, Python, Rust), MCU platforms (ESP32, EFR32/EFM32, STM32, RP2040/RP2350, RPi CM4), tools, and communication protocols
- **Projects** – Smart Farm, Park Here, Energy Consumption Prediction, Smart Lab
- **Experience** – Work history at Nouvenn IoT (Mid-level Engineer & IoT Firmware Intern) and INATEL (Lab Monitor & Research Fellow)
- **Education** – B.Sc. Computer Engineering (INATEL, 2025) and embedded systems certifications
- **Contact** – Contact form with email and social links (GitHub, LinkedIn)

## Tech Stack

| Layer | Technology |
|---|---|
| Build tool | Vite 7 |
| Language | TypeScript 5 |
| UI framework | React 18 |
| Component library | shadcn/ui (Radix UI) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Charts | Recharts |
| Routing | React Router 6 |
| Data fetching | TanStack Query |
| Forms | React Hook Form + Zod |
| Package manager | Bun |
| Testing | Vitest + Testing Library |
| Deployment | GitHub Pages (gh-pages) |

## Getting Started

```sh
# Clone the repository
git clone https://github.com/PedroLuisDionisioFraga/portfolio-website.git
cd portfolio-website

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
| `bun run deploy` | Build and deploy to GitHub Pages |

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
│   ├── NavLink.tsx
│   └── ui/             # shadcn/ui primitives
├── pages/
│   ├── Index.tsx       # Main page layout
│   └── NotFound.tsx
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── test/               # Vitest test files
```

## Deployment

The site is deployed to **GitHub Pages** via the `gh-pages` package:

```sh
bun run deploy
```

This runs `vite build` and publishes the `dist/` directory to the `gh-pages` branch. The app uses `/portfolio-website` as its base path for correct asset and route resolution.

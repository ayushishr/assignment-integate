Deployement link - https://warm-lolly-bab5f0.netlify.app/
# Genome — IT Solutions & Cybersecurity Landing Page

A modern, responsive single-page landing site for an IT solutions and cybersecurity company. Built from UI mockups with a clean blue–purple gradient theme, interactive sections, and a structure suitable for scaling into a full marketing site.

---

## Overview

This project is a **React SPA** that replicates a multi-section corporate landing page. It includes a fixed header with dropdown navigation, hero with CTA, stats bar, tabbed Solutions and Services sections, customer logos sections, and a footer with scroll-to-top — all implemented with **vanilla React (hooks)** and **plain CSS** (no UI library), demonstrating component composition and maintainable styling.

---

## Features

- **Header** — Sticky nav with logo, dropdowns (Solution, Services), greeting, search & profile actions
- **Hero** — Tagline, headline with gradient highlight, description, primary CTA, and image area with decorative shapes
- **Image feature** — Two overlapping cards (team collaboration + security focus) with bordered layout
- **Stats bar** — Full-width gradient strip with metrics (e.g. 13+ Customers, 2+ Vendor Collaborated)
- **Solutions** — Tabbed content (Infrastructure Solutions / Cybersecurity Solution) with icon cards
- **Infrastructure** — Sub-tabs (Infrastructure, Unified Communication, Data Center) and cards (Networking, Security Surveillance) with “Explore All” CTA
- **Services** — Four service categories and five service cards (Planning, Consulting, Solutioning, Project Management, Products & Technology Training) with “Read More” CTA
- **Our Happy Customers** — Grid of customer/partner names (placeholder for logos)
- **Our UAE Customers** — Dedicated UAE customers section with logo placeholders
- **Footer** — Dark navy bar, copyright, and scroll-to-top button
- **Responsive** — Layout adapts for smaller screens; nav collapses appropriately
- **Accessibility** — Semantic HTML, `aria-label` on icon buttons, keyboard-friendly interactive elements

---

## Tech Stack

| Category   | Choice                |
|-----------|------------------------|
| Framework | React 19               |
| Build     | Vite 7                 |
| Language  | JavaScript (JSX)      |
| Styling   | CSS (no preprocessor) |
| Font      | Inter (Google Fonts)  |

No external UI library or CSS framework — components and styles are built from scratch for full control and to showcase CSS architecture (variables, BEM-like naming, component-scoped files).

---

## Project Structure

```
genome-landing/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css
│   │   ├── Hero.jsx & Hero.css
│   │   ├── ImageFeature.jsx & ImageFeature.css
│   │   ├── StatsBar.jsx & StatsBar.css
│   │   ├── Solutions.jsx & Solutions.css
│   │   ├── Infrastructure.jsx & Infrastructure.css
│   │   ├── Services.jsx & Services.css
│   │   ├── HappyCustomers.jsx & HappyCustomers.css
│   │   ├── UAECustomers.jsx & UAECustomers.css
│   │   └── Footer.jsx & Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css          # Global styles & CSS variables
├── index.html
├── package.json
└── README.md
```

- **One component per section** — Each section has its own `.jsx` and `.css` for clarity and easy handoff.
- **Global design tokens** — `index.css` holds `:root` variables (colors, gradients) for consistency.

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

### Install & run

```bash
# Clone or navigate to project
cd genome-landing

# Install dependencies
npm install

# Start dev server (e.g. http://localhost:5173)
npm run dev
```

### Build for production

```bash
npm run build
```

Output is in `dist/`. Preview the production build:

```bash
npm run preview
```

---

## Implementation Highlights

- **State** — `useState` for active tabs (Solutions, Infrastructure, Services) and dropdown open/close; no global state library.
- **Styling** — CSS variables for brand colors and gradients; responsive units (`clamp`, `minmax`) and flex/grid for layout.
- **UX** — Smooth scroll-to-top from footer; hover states on cards and buttons; dropdowns on hover (can be switched to click if needed).
- **Performance** — Vite for fast HMR and optimized production bundles; minimal dependencies.

---

## Customization

- **Content** — Copy and labels live in component files; easy to replace with CMS or i18n later.
- **Images** — Hero and feature sections use CSS placeholders. Add assets under `public/` and use `<img src="/hero.jpg" alt="..." />` (or import from `src/assets`) for real imagery.
- **Customer logos** — Replace text placeholders in `HappyCustomers.jsx` and `UAECustomers.jsx` with `<img>` tags or a small logo grid component.

---

## Possible Extensions

- Add a **Contact** form or **Contact Us** section and wire to an API or email service.
- Introduce **React Router** for separate pages (e.g. Solutions, Services, Contact).
- **TypeScript** migration for type-safe props and state.
- **E2E tests** (e.g. Playwright/Cypress) for critical flows.
- **Analytics** or **tag manager** for marketing tracking.

---

## License

This project is for portfolio/assignment use. Adapt as needed for your own purposes.

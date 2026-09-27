# Dr. Maya Reynolds Website — First Draft

This is the first draft of a modern, responsive website for Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. The goal of this version is to establish the brand direction, communicate the practice in a warm and trustworthy way, and create a calm digital experience that aligns with the tone of therapy and healing.

This draft is intentionally designed to feel polished and high-quality while still leaving space for refinement. It reflects the early stages of the project: the structure, voice, content flow, and visual language are all in place, and the site is positioned as a strong foundation for the next iteration with client feedback, final copy, and more advanced optimization.

## What this first draft includes

- A refined homepage with a welcoming hero section and clear calls to action
- Practice-focused messaging around anxiety, trauma, burnout, and nervous-system regulation
- Informational sections that explain the therapeutic approach and the client experience
- Dedicated pages for services, office details, FAQs, contact, privacy, and practice disclosures
- Warm, editorial visuals with a soft neutral palette and elevated typography
- Responsive layouts across desktop and mobile screens
- Search-engine metadata and sitemap structure for future launch readiness

## The overall direction

This first draft aims to create a sense of calm, trust, and emotional safety from the very first scroll. The look and feel are grounded in warmth, clarity, and professionalism, with the intent of helping prospective clients feel at ease before even scheduling a consultation.

The site is designed to balance:

- Clinical credibility
- Emotional warmth
- Clear information architecture
- Ease of navigation
- A premium, modern brand presence

## Tech stack

- [Next.js](https://nextjs.org/) 16.3.6
- [React](https://react.dev/) 19.2.8
- TypeScript
- Tailwind CSS 4
- ESLint
- Sharp for image handling and optimization

## Project structure

```text
.
├── public/
│   └── images/                 # Brand photography and visual assets
├── src/
│   ├── app/                    # App Router pages and metadata files
│   │   ├── about/
│   │   ├── contact/
│   │   ├── disclaimer/
│   │   ├── faqs/
│   │   ├── good-faith-estimate/
│   │   ├── methods/
│   │   ├── office/
│   │   ├── privacy-policy/
│   │   ├── specialties/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/             # Reusable site sections
│   └── data/                   # Structured practice content
├── conejo.png                  # Reference site performance comparison image
├── gmt.png                     # Current draft performance comparison image
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Performance comparison

This repository includes a visual performance comparison between the reference site (Conejo) and the current Dr. Maya Reynolds first-draft site (GMT). These captures help evaluate the current direction and show where the site is already performing well and where there is room for optimization in future iterations.

### Side-by-side visual comparison

| Reference site | Current draft |
|---|---|
| [![Conejo performance capture](./conejo.png)](./conejo.png) | [![GMT performance capture](./gmt.png)](./gmt.png) |
| **Conejo** (`conejo.png`) | **Dr. Maya Reynolds** (`gmt.png`) |

### How to interpret this comparison

These performance captures represent a snapshot of how each site loads and performs under specific testing conditions. The comparison is most meaningful when evaluated under the same:

- Device profile (desktop or mobile)
- Network throttling settings
- Geographic location
- Browser and device
- Specific route/page tested

At the first-draft stage, the goal is not to achieve perfection on every metric — it is to establish a foundation that is already fast, accessible, and user-focused, with clear opportunities for optimization as the project moves forward.

### What this draft prioritizes

- **Visual clarity and brand presence** — The site communicates the practice's warm, professional identity from the first interaction
- **Responsive design** — Content and layout adapt smoothly across all screen sizes
- **Semantic HTML and structure** — Pages are built with accessibility and SEO in mind
- **Image optimization ready** — Sharp is integrated for future image tuning and compression
- **Font loading strategy** — Google Fonts are configured with `display: swap` to prevent layout shifts

### Performance-focused technical choices

- **Next.js App Router** — Enables server rendering by default, improving initial page load and SEO
- **Component-based architecture** — Reusable sections reduce code duplication and improve maintainability
- **Tailwind CSS** — Utility-first styling keeps the CSS bundle lean and scoped
- **Sharp integration** — Ready to optimize and resize images in production builds
- **Metadata and sitemap** — Built-in support for search engine crawling and social sharing

### Next steps for performance optimization

In future iterations, we can:
- Fine-tune image formats and sizes based on device and network conditions
- Measure and optimize Core Web Vitals (LCP, FID/INP, CLS)
- Test and optimize font-loading performance
- Review and compress asset sizes in production builds
- Implement caching strategies for repeat visitors
- Run a full Lighthouse audit and address any flagged opportunities

## Getting started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available commands

```bash
npm run dev          # Start dev server with Webpack
npm run dev:turbo    # Start dev server with Turbopack
npm run build        # Create production build
npm run start        # Serve production build
npm run lint         # Run ESLint
```

## Notes for the client-facing presentation

This is still the first draft of the website, but it already communicates the intended tone of the practice: calming, intelligent, grounded, and warm. The design direction aligns with the therapeutic brand, and the structure is ready for refinement as we continue to shape the final messaging, content, and performance strategy.

At this stage, the project should be understood as a strong concept foundation rather than a final production version. The work ahead includes:

- Content refinement and final copy approval
- Performance tuning and Core Web Vitals optimization
- Visual polish and brand consistency review
- Accessibility audit and improvements
- Launch readiness and SEO finalization

## Disclaimer

This first draft is intended as a concept and presentation version of the website. Final legal, clinical, and marketing copy should be reviewed and approved by Dr. Maya Reynolds before public launch.

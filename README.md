# Dr. Maya Reynolds Website — First Draft

This is the first draft of a modern, responsive website for Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. The goal of this version is to establish the brand direction, present the practice in a warm and trustworthy way, and create a calm digital experience that matches the tone of therapy and healing.

This draft is intentionally designed to feel polished and high-quality while still leaving space for refinement. It reflects the early stages of the project: the structure, voice, content flow, and visual language are in place, and the site is positioned as a strong foundation for the next iteration with client feedback, final copy, and more advanced optimization.

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

This repository also includes a visual comparison between the reference site and the current first-draft design. These captures are intended to help evaluate performance direction and identify where the draft can improve.

| Reference site | Current draft |
|---|---|
| [![Conejo performance capture](./conejo.png)](./conejo.png) | [![GMT performance capture](./gmt.png)](./gmt.png) |
| `conejo.png` | `gmt.png` |

This comparison is meant to be evaluated under the same testing conditions, including device type, network settings, and route assumptions, so the differences in performance are interpreted fairly. At this stage, this is a first draft, and the goal is not perfection—it is to understand where the experience is already strong and where it can still be improved.

### What this draft is focusing on

- Establishing a compelling visual identity
- Creating a clear and reassuring client journey
- Presenting therapy services in a calm and thoughtful way
- Creating the foundation for future optimization and content refinement

### Performance-oriented notes

- Next.js App Router is used to support modern rendering patterns and improved page structure
- Google Fonts are loaded with `display: swap` to support smoother rendering
- Image handling is set up with Sharp for future optimization opportunities
- The current build is a strong early foundation, with room for further tuning in production performance

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
npm run dev
npm run dev:turbo
npm run build
npm run start
npm run lint
```

## Notes for the client-facing presentation

This is still the first draft of the website, but it already communicates the intended tone of the practice: calming, intelligent, grounded, and warm. The design direction is aligned with the therapeutic brand, and the structure is ready for refinement as we continue to shape the final messaging, content, and optimization strategy.

At this stage, the project is best understood as a strong concept foundation rather than a final production version. The work ahead includes content refinement, performance tuning, visual polish, and final content approval before launch.

## Disclaimer

This first draft is intended as a concept and presentation version of the website. Final legal, clinical, and marketing copy should be reviewed and approved before public launch.

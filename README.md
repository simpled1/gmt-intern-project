# Dr. Maya Reynolds — Therapy Practice Website

A modern, responsive website for Dr. Maya Reynolds, a licensed clinical psychologist serving clients in Santa Monica, California and throughout California via telehealth.

The site is designed to make learning about therapy feel calm, clear, and approachable. It combines a polished marketing experience with practical information about specialties, treatment methods, the office, FAQs, contact details, privacy, and client-rights resources.

## Project status

This repository contains the first production-oriented draft of the Dr. Maya Reynolds website. The visual system, page structure, content model, and responsive layouts are in place and can be extended as the practice content is finalized.

## Highlights

- Responsive homepage with a welcoming hero section and clear calls to action
- Content-focused pages for anxiety, trauma, burnout, and other common concerns
- Integrative treatment information grounded in somatic awareness and evidence-based care
- Dedicated pages for the practice, methods, office, FAQs, contact, and appointment information
- Privacy policy, disclaimer, and Good Faith Estimate resources
- Search-engine support through page metadata, a sitemap, and robots configuration
- Warm neutral color palette, custom typography, and a calm editorial visual language
- Optimized image handling through Next.js and the `sharp` package
- Reusable React components for navigation, content sections, calls to action, and the footer

## Technology

- [Next.js](https://nextjs.org/) 16.3.6
- [React](https://react.dev/) 19.2.8
- TypeScript
- Tailwind CSS 4
- ESLint
- Sharp for image optimization

## Site structure

```text
.
├── public/
│   └── images/                 # Photography and illustrations used by the site
├── src/
│   ├── app/                    # App Router pages and SEO configuration
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
│   ├── components/             # Reusable page sections
│   └── data/                   # Structured methods and specialties content
├── conejo.png                  # Reference-site performance capture
├── gmt.png                     # Dr. Maya Reynolds site performance capture
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Performance comparison

The repository includes two performance captures for a visual comparison between the reference **Conejo** site and the **GMT / Dr. Maya Reynolds** site:

| Reference site | Dr. Maya Reynolds site |
|---|---|
| [![Conejo performance capture](./conejo.png)](./conejo.png) | [![GMT performance capture](./gmt.png)](./gmt.png) |
| `conejo.png` | `gmt.png` |

These images are included as the source of truth for the comparison. They should be evaluated using the same device profile, network throttling, URL, and Lighthouse/PageSpeed test settings before treating the values as a direct benchmark. The comparison is intended to showcase the difference in the captured performance results; it does not claim that one capture is universally representative of every route or production deployment.

For a repeatable comparison, build and serve the site in production mode:

```bash
npm install
npm run build
npm run start
```

Then run Lighthouse or PageSpeed Insights against the same route and test conditions used for the Conejo capture. Record the following metrics when updating this section:

- Performance score
- Largest Contentful Paint (LCP)
- Total Blocking Time (TBT) or Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Speed Index
- Total page weight and image payload

### Performance-focused implementation choices

- Next.js App Router enables server-rendered page content by default.
- `next/font/google` loads the Cormorant Infant and Mulish typefaces with `display: swap`.
- Sharp is installed to support optimized image processing in production builds.
- Page sections are composed from reusable components rather than duplicated markup.
- Metadata, sitemap, and robots configuration are included to improve discoverability and sharing.

## Getting started

### Prerequisites

- Node.js 20 or newer is recommended
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available commands

| Command | Description |
|---|---|
| `npm run dev` | Start the development server using Webpack |
| `npm run dev:turbo` | Start the development server using Turbopack |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Content and customization

- Update page content in the route files under `src/app/`.
- Update specialties and treatment methods in `src/data/`.
- Reuse or extend the components in `src/components/` for new sections.
- Update global styles and design tokens in `src/app/globals.css`.
- Add or replace static assets in `public/images/`.
- Update the metadata in `src/app/layout.tsx` and the URL configuration in `src/app/sitemap.ts` before deployment.

## Deployment

The application can be deployed to any platform that supports Next.js. Before launch, verify the production URL, canonical metadata, sitemap, contact details, legal content, image licenses, and accessibility across mobile and desktop breakpoints.

## Disclaimer

This website draft is informational and is not a substitute for emergency mental-health care. Final clinical, legal, insurance, and contact information should be reviewed by the practice before publication.

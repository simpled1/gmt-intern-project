# Dr. Maya Reynolds | Integrative Psychotherapy & Somatic Care

A modern, responsive Next.js website for a psychotherapy practice focused on anxiety, trauma, burnout, and nervous-system regulation. The app combines a polished marketing homepage with informative pages for specialties, approach, FAQs, office details, and contact information.

## Overview

This project is built as a marketing and educational website for a licensed clinical psychologist in Santa Monica, California. It presents the practice's values, clinical specialties, therapeutic approach, office details, and calls-to-action in a warm, calming, highly branded experience.

## Features

- Responsive homepage with hero, value propositions, and trust-building sections
- Clinical specialty pages and content-driven sections for common concerns
- Integrative treatment approach emphasizing somatic awareness and evidence-based care
- FAQ and informational content for prospective clients
- Contact, privacy, disclaimer, and office information pages
- SEO support with metadata, sitemap, and robots configuration
- Consistent visual language using custom fonts, warm neutral colors, and refined layout design

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Next.js Image optimization
- ESLint

## Project Structure

```text
.
├── public/
│   └── images/
├── src/
│   ├── app/
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
│   ├── components/
│   │   ├── AppointmentCTA.tsx
│   │   ├── CoreSpecialities.tsx
│   │   ├── EmpathyBanner.tsx
│   │   ├── FAQs.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HonoringSection.tsx
│   │   ├── IntegrativeApproach.tsx
│   │   ├── Navbar.tsx
│   │   ├── PhilosophyBanner.tsx
│   │   ├── TheOffice.tsx
│   │   └── WhoWeHelp.tsx
│   └── data/
│       ├── methods.ts
│       └── specialties.ts
├── package.json
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── README.md
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Production Build

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Linting

```bash
npm run lint
```

## Notes

- The app uses custom metadata for the practice brand and page titles.
- Images are optimized through the Next.js `Image` component.
- The design system uses a soft wellness palette with serif headlines and clean sans-serif body text.
- Content is organized in reusable data files to make specialty and methods content easier to manage and extend.

## License

This project is private and intended for internal or client-specific use unless otherwise specified.

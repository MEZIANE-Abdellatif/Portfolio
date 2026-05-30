# Abdellatif Meziane — Portfolio

Minimal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

Push to GitHub and import the repo in [Vercel](https://vercel.com). No environment variables required.

Update the canonical URL in `app/layout.tsx` (`siteUrl`) to match your production domain.

## Structure

- `app/layout.tsx` — metadata, JSON-LD, font
- `app/page.tsx` — page composition
- `components/` — Hero, About, Projects, Skills, Contact, Navbar
- `data/` — projects and skills data

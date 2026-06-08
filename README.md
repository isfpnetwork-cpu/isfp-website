# ISFP Website

Professional public website for the Institute of Sustainable Finance Professionals.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- TypeScript

## Local Development

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

The primary production domain is intended to be `isfpglobal.org`. The secondary domain `isfpglobal.com` can redirect to the primary domain later.

## Structure

- `app/` contains public pages and placeholder platform routes.
- `components/` contains reusable layout, CTA, card and form components.
- `lib/site.ts` contains shared site metadata, navigation and future route definitions.
- `public/brand/` contains the supplied ISFP SVG brand assets.

## Future Integration Points

The current forms are frontend-only. Comments in `components/Forms.tsx` mark where backend validation, database storage, CRM routing, email notifications and newsletter consent management should be connected.

Prepared future platform routes:

- `/assessment/start`
- `/assessment/results`
- `/dashboard`
- `/benchmarking`
- `/courses`
- `/cpd`

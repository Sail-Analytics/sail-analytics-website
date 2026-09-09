# Sail Analytics

The Sail Analytics marketing website — 24 pages covering the company's services, case studies, engagement calculator, and contact flow.

Built with [Lovable](https://lovable.dev), React, [TanStack Start](https://tanstack.com/start), and Tailwind CSS, with [Supabase](https://supabase.com) as the backend for the calculator's lead-capture gate and the contact form.

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/61a70d8e-ba06-43b1-b812-ed49edd48bfe).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Project structure

- `src/routes/` — one file per page, using [TanStack Router](https://tanstack.com/router)'s file-based routing (`about.tsx` → `/about`, `work_.ev-battery.tsx` → `/work/ev-battery`, etc.)
- `src/components/` — shared layout (header, footer, icon sprite) and the calculator/case-study/comparison page templates
- `src/lib/calculator/model.ts` — the engagement calculator's pricing model (roles, rates, formulas)
- `src/lib/supabase.ts` — the Supabase client used by the calculator gate and contact form
- `src/styles/sail.css` — the site's design system (typography, layout, components)
- `supabase/migrations/` — SQL for the two Supabase tables this project writes to (`calculator_leads`, `contact_submissions`)
- `public/logos/` — client and technology logos shown on the home, what-we-build, and about pages

## Backend (Supabase)

Two forms write to Supabase, both insert-only from the client (nothing is readable back, by design — view submissions via the Supabase dashboard):

- **Engagement calculator gate** (`/calculator`) → `calculator_leads`
- **Contact form** (`/contact`) → `contact_submissions`

The Supabase project URL and publishable key are set directly in `src/lib/supabase.ts` — the publishable key isn't a secret (Vite would inline an env var into the public bundle anyway; access is controlled by each table's Row Level Security policy, not by hiding the key).

If you add another table, add its migration under `supabase/migrations/` and run it in the Supabase SQL Editor.

## Development

You need Node.js — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone https://github.com/Sail-Analytics/sail-analytics-website.git
cd sail-analytics-website
npm i
npm run dev
```

The dev server runs at `http://localhost:8080`.

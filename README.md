# GBR Fertility Centre — website

A full Next.js application for GBR Fertility Centre (Chennai · Thirupattur ·
Nellore), built on the centre's own content, clinical language and brand assets.

The homepage opens with a scroll-driven animation of a sperm travelling into the
womb, fertilisation, cell division, implantation and the arrival of a baby. The
rest of the site covers specialities, treatments, conditions, centres, doctors,
academics, the journal, FAQs, appointments and the legal pages.

## Stack

| Concern     | Choice                                                       |
| ----------- | ------------------------------------------------------------ |
| Framework   | Next.js 16 (App Router, Cache Components, Partial Prefetching) |
| Language    | TypeScript (strict)                                          |
| React       | React 19                                                     |
| Styling     | Tailwind CSS v4 + shadcn/ui primitives (`src/components/ui`)  |
| Animation   | `motion` (`motion/react`)                                    |
| Icons       | `lucide-react`                                               |
| Fonts       | Instrument Serif (display) + Manrope (body) via `next/font`   |
| Hosting     | GitHub → Vercel                                              |

## Getting started

Requires **Node 22** (see `.nvmrc`; Next 16 needs ≥ 20.9).

```bash
cd web
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build      # prerenders every route
npm start
```

Other checks:

```bash
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

> On Windows PowerShell use `npm.cmd` — the `npm` shim may be blocked by policy.

## Deployment (GitHub → Vercel)

The repository is a single Next.js app at its root (`vetrisuriya/gbr`, branch
`main`), so Vercel needs no root-directory override.

### 1. Push

```bash
git add -A
git commit -m "Your message"
git push origin main
```

Vercel redeploys `main` automatically once the project is connected.

### 2. Create the Vercel project

1. [vercel.com/new](https://vercel.com/new) → **Import Git Repository** → `vetrisuriya/gbr`.
2. Framework preset: **Next.js** (auto-detected). Leave the root directory as
   `./`, build command `next build`, install command `npm install`, output
   directory default.
3. **Environment Variables** — add these before the first production deploy:

   | Name                     | Value                                                        | Environments |
   | ------------------------ | ------------------------------------------------------------ | ------------ |
   | `APPOINTMENT_WEBHOOK_URL` | JSON endpoint that receives appointment enquiries            | Production, Preview |
   | `ACADEMIC_WEBHOOK_URL`    | Optional separate endpoint for academic registrations        | Production, Preview |

   Without a webhook the API routes only write to the function logs, so
   enquiries are not delivered anywhere. See [Forms](#forms).
4. **Deploy.** The first build takes a couple of minutes; every route is
   prerendered.

Previews created from pull requests are protected by Vercel's
`x-robots-tag: noindex` header, so they cannot compete with production in
search results.

### 3. Custom domain

1. Vercel → Project → **Settings → Domains** → add `gbrclinic.com` and
   `www.gbrclinic.com`; choose which one redirects to the other.
2. At the DNS provider, point the apex record at Vercel (`A 76.76.21.21`) and
   `www` at `cname.vercel-dns.com`. Vercel shows the exact values it expects —
   use those.
3. Keep the old host live until the new deployment is verified, then switch
   DNS. TLS certificates are issued automatically once DNS resolves.

`site.url` in `src/data/site.ts` is the single source of truth for canonical
URLs, Open Graph URLs, JSON-LD, `sitemap.xml` and `robots.txt`. If the domain
ever changes, update it there and redeploy.

### 4. After the first production deploy

- Open `/sitemap.xml` and `/robots.txt` and confirm they use the production
  domain.
- Submit `https://gbrclinic.com/sitemap.xml` in Google Search Console (and Bing
  Webmaster Tools) and request indexing for the homepage.
- Submit both forms once and confirm the payload arrives at the webhook.
- Test `/book`, `/academics/register`, the mobile menu and the homepage journey
  animation on a real phone.
- If DNS moved from another host, keep the old URLs' redirects in place for at
  least a few months.

Rollbacks are instant in Vercel → **Deployments → … → Promote to Production**.

### Continuous integration

`.github/workflows/ci.yml` runs `npm ci`, typecheck, lint and a production
build on every push to `main` and every pull request. Vercel builds in
parallel; the workflow is the safety net that catches a broken build before it
reaches the branch that deploys.


## Structure

```
web/
├── public/brand/          Client logo, doctor photo, award and family images
└── src/
    ├── app/
    │   ├── page.tsx                 Homepage (hero → journey → specialities …)
    │   ├── specialities/[slug]/     8 clinical programmes
    │   ├── treatments/[slug]/       11 treatments
    │   ├── conditions/[slug]/       8 conditions
    │   ├── centres/[slug]/          3 locations
    │   ├── academics/[slug]/        4 training programmes
    │   ├── blog/[slug]/             25 journal articles
    │   ├── api/appointment/         Appointment form handler
    │   ├── api/academic/            Academic registration handler
    │   ├── sitemap.ts, robots.ts
    │   └── globals.css              Theme tokens, utilities, keyframes
    ├── components/                  Header, footer, journey animation, forms, cards
    ├── data/                        Typed content: site, specialities, treatments,
    │                                conditions, centres, academics, faqs, posts
    └── lib/cn.ts                    clsx + tailwind-merge helper
```

All content lives in `src/data`. Detail routes read from those files and are
prerendered with `generateStaticParams`, so adding a treatment, condition,
centre, programme or article is a data edit — no new page files.

## The journey animation

`src/components/fertility-journey.tsx` is the centrepiece. A 460vh section drives
a sticky, full-height stage through five beats:

1. **Swim** — sperm travel along a beziér path toward the egg
2. **Meet** — fertilisation flash
3. **Divide** — the cell cluster forms and drifts
4. **Implant** — the cluster settles into the uterine lining
5. **Arrive** — the illustration fades and a photograph of a baby resolves

Progress is measured from the section's bounding rect on `scroll`/`resize`
rather than with `useScroll`, which proved unreliable here. Under
`prefers-reduced-motion` the component renders a static summary instead.

## Forms

`/book` and `/academics/register` post JSON to route handlers, which validate
input server-side. Set either webhook to forward submissions:

```
APPOINTMENT_WEBHOOK_URL=
ACADEMIC_WEBHOOK_URL=          # falls back to APPOINTMENT_WEBHOOK_URL
```

Without a webhook the payload is logged to the server console — fine for
staging, not for production. No clinical detail should be collected through
these forms.

## Content and clinical accuracy

- Statistics and success rates are worded conservatively; no pregnancy or live
  birth rate is promised anywhere on the site.
- Regulatory wording refers to the ART (Regulation) Act, 2021 rather than any
  unverified registration claim.
- Every article and treatment page carries a general-information note.
- `src/data/posts.json` stores articles as typed blocks (not raw HTML), so no
  `dangerouslySetInnerHTML` is used.

## Notes for maintainers

- `src/data/site.ts` holds the copyright year as a static value; `new Date()`
  cannot be used at render time while Cache Components are enabled.
- Detail routes declare `export const instant = false` because they are fully
  prerendered and have no request-time data to stream. Removing it reintroduces a
  dev-only Instant Navigation warning.
- A hydration mismatch warning appears in development from motion values in
  server-rendered inline styles. It does not occur in a production build.

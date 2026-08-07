# Husker Grill Cleaning

Next.js (App Router) rebuild of [huskergrillcleaning.com](https://huskergrillcleaning.com) for Vercel — replacing Squarespace.

## Stack

- Next.js 16 + TypeScript + Tailwind CSS v4
- Static marketing pages with LocalBusiness + FAQ JSON-LD
- Brand system: onyx `#05070a` + gold gradient accents, Inter + Playfair Display

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## URL parity (Squarespace → Vercel)

| Path | Purpose |
|------|---------|
| `/` | Homepage lander |
| `/see-our-work` | Gallery (stub → expand) |
| `/pricing` | Pricing SEO route |
| `/multi-tenant-apartment-townhome-grill-cleaning` | Multi-tenant |
| `/about` | About |
| `/join-our-team` | Careers |
| `/schedule-2` | Booking / contact |

## Deploy

1. Push `main` to GitHub (`malexbrunken/husker-grill-cleaning`)
2. Import the repo in Vercel (framework: **Next.js**)
3. After cutover, point `huskergrillcleaning.com` + `www` to Vercel
4. Submit `https://huskergrillcleaning.com/sitemap.xml` in Google Search Console

## Notes

- Homepage content/pricing matches the live Squarespace lander (Jul 2026).
- Housecall Pro reviews iframe retained on home.
- Online scheduler widget can replace the `/schedule-2` call/email cards when ready.

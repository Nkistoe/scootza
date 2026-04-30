# ScootZA Landing Page

Next.js 14 landing page for ScootZA, South Africa's safety-first food and store delivery platform.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React icons
- Google Fonts (Fraunces + DM Sans)

## Brand Colours

- Primary Green: `#39B54A`
- Dark: `#333333`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

```
app/
  layout.tsx       # Root layout with fonts and metadata
  page.tsx         # Main landing page
  globals.css      # Global styles with Tailwind

components/
  Navbar.tsx       # Sticky navigation with mobile menu
  Hero.tsx         # Hero with phone mockup and verification badges
  Stats.tsx        # Quick stats banner
  HowItWorks.tsx   # 4-step process
  Safety.tsx       # Biometric verification protocol
  ThreeTier.tsx    # Customer/Driver/Admin showcase
  Features.tsx     # SA-specific features
  CTA.tsx          # App download section
  Footer.tsx       # Full footer with contact

public/
  scootza-logo.svg # Brand logo
```

## Deployment

Deploy easily on Vercel:

```bash
npm install -g vercel
vercel
```

Or build for static hosting (cPanel via domains.co.za):

```bash
npm run build
```

Output is in the `.next` folder. For full static export, add `output: 'export'` to `next.config.js`.

## Design Credits

Designed and built by [Idea Convergence](https://ideaconvergence.com)

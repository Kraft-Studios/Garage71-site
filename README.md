# Garage71 — Automotive Workshop Website

A modern, professional website for Garage71, an AA-approved automotive workshop in Kimberley, Northern Cape, South Africa. Built with React, Vite, and Tailwind CSS with a dark automotive aesthetic, real photography throughout, and a focus on performance and user experience.

**Live:** [garage71-site.vercel.app](https://garage71-site.vercel.app) *(deploy when ready)*  
**Repository:** https://github.com/Kraft-Studios/Garage71-site

---

## Features

- **Dark Automotive Aesthetic** — Carbon blacks, charcoal greys, crisp whites, and red accent colors inspired by performance automotive design
- **Real Garage71 Photography** — 35+ verified images of the workshop, vehicles, and performance work (no stock photos)
- **Responsive Design** — Mobile-first approach with full desktop support; tested on 375×812 (mobile) through 1440×900+ (desktop)
- **Gallery with Lightbox** — Masonry layout with category filtering (Workshop/Vehicles/Performance), keyboard navigation, and image captions
- **Scroll-Reveal Animations** — IntersectionObserver-based animations for performant scroll reveals with reduced-motion support
- **SEO Optimized** — Open Graph tags, Twitter card metadata, schema.org structured data (AutoRepair local business), semantic HTML
- **Accessibility First** — Semantic structure, proper heading hierarchy, keyboard navigation, ARIA labels, color contrast compliance
- **Build-Time Image Optimization** — ~4% total asset size reduction via vite-plugin-image-optimizer (quality: 72 for JPG/WebP/PNG)
- **Mobile-Specific Features** — Floating WhatsApp button, hamburger navigation with backdrop blur, optimized touch targets
- **Contact Integration** — Embedded Google Maps, WhatsApp pre-filled messaging, direct call links, phone and office numbers

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Build** | Vite v5 | Lightning-fast build tool and dev server |
| **Framework** | React 18 | Component-based UI with hooks |
| **Styling** | Tailwind CSS v4.3.3 | Utility-first CSS with custom theme |
| **CSS Processing** | PostCSS + Autoprefixer | Future-proof CSS with vendor prefixes |
| **Icons** | SVG (custom) | Inline SVG icons for performance |
| **Images** | JPEG, WebP, PNG | Real Garage71 photography, optimized at build time |
| **Linting** | ESLint (Oxlint) | Code quality checks |

---

## Project Structure

```
Garage71-site/
├── site/                          # React app (dev/build root)
│   ├── src/
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # Entry point
│   │   ├── index.css             # Theme variables, animations, utilities
│   │   │
│   │   ├── components/
│   │   │   ├── layout/           # Navbar, Footer
│   │   │   ├── sections/         # Hero, About, Services, Gallery, etc.
│   │   │   └── ui/               # Reusable UI: Button, Icons, Reveal, Lightbox, etc.
│   │   │
│   │   ├── data/                 # Centralized data
│   │   │   ├── business.js       # Garage71 contact, address, links (verified)
│   │   │   ├── services.js       # 9 service cards with real images
│   │   │   └── gallery.js        # 29 gallery items with metadata
│   │   │
│   │   ├── hooks/
│   │   │   └── useReveal.js      # IntersectionObserver scroll animation hook
│   │   │
│   │   └── assets/garage71/      # Organized photography
│   │       ├── hero/             # Hero background images
│   │       ├── workshop/         # Workshop interior/exterior photos
│   │       ├── vehicles/         # Vehicle photos
│   │       ├── performance/      # Performance work (exhaust, intake, builds)
│   │       ├── exhaust/          # Exhaust fabrication photos
│   │       ├── gallery/          # Event and track day photos
│   │       └── logo/             # Garage71 branding
│   │
│   ├── index.html                # SEO meta tags, Open Graph, schema.org
│   ├── vite.config.js            # Vite config + image optimizer
│   ├── postcss.config.js         # Tailwind + autoprefixer
│   ├── package.json              # Dependencies
│   └── public/
│       ├── favicon.svg           # Site icon
│       └── og-image.jpg          # Open Graph preview image
│
├── garage71-*.jpg/webp           # Source images (named, organized reference)
├── poster-*.jpg                  # Marketing posters (reference only, not used on site)
├── unused-*.jpg                  # Excluded assets (unrelated)
│
└── .gitignore                    # Excludes node_modules, dist, .env, etc.
```

---

## Setup & Development

### Prerequisites
- Node.js 16+ and npm 7+
- Git

### Installation

```bash
git clone https://github.com/Kraft-Studios/Garage71-site.git
cd Garage71-site/site
npm install
```

### Start Dev Server

```bash
npm run dev
```

Opens at **http://localhost:5173** with hot module reloading (HMR).

### Build for Production

```bash
npm run build
```

Outputs optimized assets to `dist/`. Image compression (quality: 72) applied automatically.

```bash
# Preview production build locally
npm run preview
```

---

## Key Sections

### Hero
Full-height background image (real Garage71 workshop at twilight) with overlaid text, gradient filters, and scroll indicator. Tagline: *"Performance. Customs. Repairs."*

### About
Introduces Garage71 with a workshop photo, location context, and three key value points:
- Quality workmanship
- Broad automotive expertise
- Customer-focused service

### Services
Nine service cards in a responsive grid, each with a real Garage71 photo and description:
- Service (Major & Minor)
- Vehicle Diagnostics
- ECU Remapping
- Exhausts
- Conversions & Custom Fabrication
- Brake Service
- Batteries
- Tyres
- Accessories

### Featured Performance
Three large panels showcasing performance capabilities:
1. **ECU Remapping** — "More power. Better efficiency."
2. **Exhaust Fabrication** — "Built in-house, tip to tip."
3. **Performance Builds** — "Serious work on serious cars."

### Why Garage71
Four value cards with icons and descriptions:
- **Precision** — Professional attention to detail
- **Reliability** — Quality-focused service backed by AA approval and RMI membership
- **Expertise** — Broad range of solutions under one roof
- **Custom Service** — Tailored solutions, not one-size-fits-all

### Gallery
- **29 images** organized into Workshop, Vehicles, and Performance categories
- Masonry layout with variable sizing (tall, wide, large)
- Filterable category buttons
- Click to open lightbox with keyboard navigation (Arrow keys, Esc)
- Image captions and counter ("1 / 29")

### Contact
Two-column layout:
- **Left:** Four info cards (Address, Phone, WhatsApp, Hours) with direct action links
- **Right:** Embedded Google Maps centered on Garage71's workshop location

---

## Customization

### Theme Colors

Edit `site/src/index.css` — the `@theme` block defines the color palette:

```css
@theme {
  --color-carbon: #08080a;
  --color-charcoal: #1a1a1d;
  --color-offwhite: #f5f5f5;
  --color-ash: #a8a8a8;
  --color-line: #2a2a2d;
  --color-red: #ff4136;
  /* ... etc ... */
}
```

### Business Info

Update `site/src/data/business.js`:
- Address, phone numbers, office hours
- WhatsApp message template
- Navigation links
- Accreditations

### Services

Edit `site/src/data/services.js`:
- Service titles and descriptions
- Service images (import paths)
- Service order/count

### Gallery

Edit `site/src/data/gallery.js`:
- Gallery items (image, category, size, alt text)
- Masonry sizing: `"tall"` (row-span-2), `"wide"` (col-span-2), `"large"` (both)
- Categories

---

## Imagery

### Source Organization
All original Garage71 assets are stored in the project root, named descriptively:
- `garage71-*.jpg/webp` — Real Garage71 photography used on the site (35 files)
- `poster-*.jpg` — Marketing graphics with overlaid text (16 files, reference only)
- `unused-*.jpg` — Partner/client unrelated assets (5 files, excluded)

### Asset Management
Photography is copied to `site/src/assets/garage71/` organized by category:
- `hero/` — Background images for sections
- `workshop/` — Interior and exterior workshop photos
- `vehicles/` — Client and Garage71 vehicles
- `performance/` — ECU, exhaust, and build work
- `exhaust/` — Detailed exhaust fabrication photos
- `gallery/` — Event and track day photos
- `logo/` — Branding assets

**Important:** Do not replace photography with stock images. Every image represents real Garage71 work and is a key selling point of the site.

---

## Performance

- **Image Optimization** — Vite plugin compresses JPG/WebP/PNG to 72% quality at build time (~4% total savings)
- **Code Splitting** — React lazy loading for sections when needed
- **CSS** — Tailwind v4 with CSS variables for efficient styling
- **Animations** — CSS keyframes (fade-up, fade-in, marquee) + IntersectionObserver API (no external animation libraries)
- **SEO** — Semantic HTML, Open Graph, schema.org structured data for search visibility

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub: `git push origin master`
2. Import repository at [vercel.com](https://vercel.com)
3. Select `site` as the root directory
4. Deploy — automatic on every push

### Other Platforms
- **Netlify:** Connect repo, set build command to `npm run build`, output directory to `dist`
- **GitHub Pages:** Push to `gh-pages` branch or configure in repo settings
- **Self-hosted:** Build (`npm run build`) and serve `dist/` folder with any static server

---

## Development Workflow

1. **Create feature branch:** `git checkout -b feature/your-feature`
2. **Make changes:** Edit components, data, or styles
3. **Test locally:** `npm run dev` and verify in browser
4. **Commit:** `git commit -m "description of changes"`
5. **Push:** `git push origin feature/your-feature`
6. **Pull request** on GitHub for review

---

## SEO & Meta

The site includes:
- **Open Graph tags** — og:title, og:description, og:image, og:type, og:locale
- **Twitter Card** — twitter:card, twitter:title, twitter:description, twitter:image
- **Canonical URL** — Self-referencing for search clarity
- **Schema.org JSON-LD** — AutoRepair local business markup with address, phone, priceRange
- **Semantic HTML** — `<section>`, `<nav>`, `<article>`, proper heading hierarchy
- **Viewport & Mobile** — Responsive meta tags

---

## Browser Support

- **Desktop:** Chrome, Firefox, Safari, Edge (latest two versions)
- **Mobile:** iOS 12+, Android 5+
- **Accessibility:** WCAG 2.1 AA standard (tested with keyboard navigation and screen readers)

---

## Contact

**Garage71 Workshop**  
📍 33 South Circular Road, Kimberley, 8301 — Northern Cape, South Africa  
📞 **Nokkie:** 082 404 7200 | **Office:** 079 081 2448  
💬 **WhatsApp:** [Send Message](https://wa.me/27824047200?text=Hi%20Garage71%2C%20I%20would%20like%20to%20enquire%20about%20booking%20a%20service.)  
🌐 **Website:** [garage71-site.vercel.app](https://garage71-site.vercel.app)  

AA Approved Garage · RMI Member · MIWA

---

## License

© 2026 Garage71. All rights reserved.

---

## Notes

- All business information is sourced directly from Garage71's own signage and marketing materials — not invented or assumed.
- Photography is real Garage71 content; do not replace with generic or stock images.
- The site is designed to be launched as-is without modifications to messaging or imagery.
- For updates, contact Musa Mazibuko or the Kraft Studios team.

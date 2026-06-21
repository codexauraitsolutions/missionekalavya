# Mission Ekalavya — Next.js Rebuild

Rebuilt from the original 19-page plain-HTML site into **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, matching the tech stack used in the Manavi reference project.

## What changed from the original site

- **Single shared Navbar & Footer** (`src/components/layout/Navbar.tsx`, `Footer.tsx`) used once in `src/app/layout.tsx` — every page automatically gets the same nav. Edit `src/lib/nav-links.ts` to add/remove/reorder nav links across the entire site from one file.
- **Google Play / App Store buttons** added to the header (desktop + mobile menu), linking to the URLs provided.
- **All 19 pages ported** as Next.js routes (folders under `src/app/`), each a `page.tsx`.
- **Firebase/Firestore form-saving kept** — Contact, Demo Registration, and Scholarship Registration forms save to the same `meklvy_form_submissions` Firestore collection as before.
- **Tailwind CSS** replaces the old plain CSS, recreating the same red/orange/yellow brand look and animations (scroll-reveal, hover states, gradients).

## Project structure

```
src/
  app/                    → one folder per page/route (about/, programs/, pricing/, etc.)
    layout.tsx            → wraps every page with Navbar + Footer (edit ONCE, reflects everywhere)
    page.tsx              → homepage
    globals.css           → Tailwind + custom animations
  components/
    layout/                → Navbar.tsx, Footer.tsx
    ui/                     → reusable pieces (PageHero, SectionTitle, Reveal, CTASection, FAQAccordion, Lightbox, CategoryFilter)
    forms/                  → ContactForm, DemoRegistrationForm, ScholarshipRegistrationForm, StudentRegistrationFields
  lib/
    nav-links.ts           → single source of truth for the nav menu + app store URLs
    firebase.ts            → Firebase init + saveFormSubmission()
    useLeadForm.ts          → shared submit/validation logic for the 3 lead forms
public/
  images/                  → logo, favicon, img1-4 (copied from your original site)
```

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Building for production

```bash
npm run build
```

## Deploying to Netlify

1. Push this project to a GitHub repo (or drag-and-drop the folder into Netlify's UI)
2. In Netlify: **Add new site → Import an existing project**
3. Build command: `npm run build`
4. Netlify will auto-detect Next.js and use the `@netlify/plugin-nextjs` plugin (already configured in `netlify.toml`)
5. Deploy

No environment variables are required — the Firebase config is intentionally public (it's a web app config, not a secret key) and lives in `src/lib/firebase.ts`.

## Known gaps / things to finish

- **App store badge buttons** currently render as simple dark pill buttons with Font Awesome icons (Google Play / Apple logos), not the official badge graphics — official badge PNGs weren't available during this rebuild. Swap in official badges by dropping them into `public/images/` and updating `src/components/layout/Navbar.tsx`.
- **Office addresses, phone numbers, and map embed** on the Contact page are placeholders from the original site (`+91-XXXXXXXXXX` etc.) — update with real details.
- **MSG91 SMS Cloud Function** (sending a text after form submission) was discussed but not part of this rebuild — the forms currently only save to Firestore. See your earlier conversation for the Cloud Function plan if you want to add this.
- **Placeholder images** (team photos, gallery photos, blog post images) use placehold.co generated images, same as the original site — replace with real photos when available.

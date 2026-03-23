# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 14 (App Router) landing page** for "Cocoon", a luxury real estate property in São Miguel dos Milagres, Alagoas, Brazil. The site is a single-page marketing site with Portuguese (PT-BR) and English i18n support.

### Key directories

- `src/app/` — App Router entry points
  - `page.js` — Main landing page (client component, composes all sections)
  - `layout.js` — Root layout: ReCaptcha provider, custom fonts, metadata
  - `api/register/route.js` — POST endpoint: validates reCAPTCHA v3, sends email via Nodemailer
  - `privacy_policy/` — Standalone privacy policy page

- `src/sections/` — Full-page content blocks rendered in `page.js` (`cover`, `milagres`, `diferenciais`, `unidades`, `design`, `implantacao`, `facilidades`, `contato`, `popup-video`)

- `src/components/` — Reusable UI components including animation wrappers (`textReveal`, `fadeTo`, `lineByLine`, `motionTag`), carousels (`slider`, `indexedCarousel`, `overflowCarousel`, `unitSlider`), and content blocks (`article`, `heading`, `video`, `featurePanels`, `expandableImage`)

- `src/context/LanguageContext.js` — Global language state (PT-BR / EN); all display text is sourced from this context

- `src/locales/` — Translation files: `pt-br.json` and `en.json`

- `src/lib/` — `useMatchScreen.js` (responsive breakpoint hook), `tailwindScreens.preval.js` (build-time screen values via `next-plugin-preval`)

- `src/img/`, `src/svg/`, `src/fonts/` — Static assets (images, SVGs, custom Regulator font family)

### Path alias

`@/*` resolves to `src/*` (configured in `jsconfig.json`).

### Styling

Tailwind CSS with custom theme: color palette (`sand`, `cacao`, `coco`, `milk`), extra breakpoints (`fhd: 1920px`, `qhd: 2560px`), and a custom `dScalePlugin` for scaling utilities. Styled Components is also used alongside Tailwind.

### Environment variables

The API route (`src/app/api/register/route.js`) requires:
- `RECAPTCHA_SECRET_KEY` — Google reCAPTCHA v3 secret
- `NODEMAILER_*` or equivalent SMTP credentials for email delivery

# ZioAnacleto Site

Personal portfolio of **Fabrizio Traversa**, Android Technical Leader and percussionist. Bilingual (English at `/`, Italian at `/it/`), single page with a floating section toolbar.

Built with [Astro](https://astro.build) as a fully static site: almost no JavaScript, typed content, no UI framework.

## Getting started

Requires Node 22+ (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type check + static build into dist/
npm run preview    # serve dist/
npm run format     # Prettier
```

## Project structure

```
src/
  data/profile.ts       All content (experience, education, skills, music, links), EN + IT
  i18n/config.ts        Locales, paths, Localized<T> type
  i18n/ui.ts            Interface strings, useTranslations(locale)
  lib/shapes.ts         Material-Expressive shape library (polar radii, morphable)
  lib/motion.ts         Spring physics → CSS linear() easings (--spring-*)
  lib/format.ts         Date / duration formatting per locale
  components/           One Astro component per section + shared pieces
  scripts/              Client behaviour (morphing shapes, toolbar, timeline, pads, copy)
  styles/tokens.css     Colour roles (light/dark), type scale, corners, spacing
  styles/global.css     Base styles
  views/Home.astro      The page, shared by both locales
  pages/                Routes: / (en), /it/ (it), 404
public/                 Static files, Cloudflare _headers, favicon
```

### Editing content

Every text lives in `src/data/profile.ts` (content) or `src/i18n/ui.ts` (interface). Each value has an `en` and an `it` version; TypeScript fails the build if one is missing.

### Adding the portrait

Put the photo in `public/images/` (square crop, at least 1000×1000) and set its path in `src/views/Home.astro`:

```ts
const portrait: string | undefined = '/images/portrait.jpg';
```

The hero shape then clips the photo and keeps morphing around it.

## Motion

- The hero shape morphs every bar at 112 bpm and pulses on each beat; it pauses off screen, in background tabs, with the pause button, and never autoplays under `prefers-reduced-motion`.
- Spring easings come from `src/lib/motion.ts` (Material 3 Expressive damping/stiffness values) and are injected as CSS variables at build time.
- The percussion pads synthesise sound with the Web Audio API, only after a tap or a key press (1–4).

## CI and deploy

`.github/workflows/ci.yml` runs on every pull request and push: Prettier check, `astro check` and build. On every push to `main` it then deploys `dist/` to **Cloudflare Pages** (project `zioanacleto-site`, created automatically on the first run).

One-time setup in the GitHub repository (_Settings → Secrets and variables → Actions_):

| Kind     | Name                    | Value                                                                     |
| -------- | ----------------------- | ------------------------------------------------------------------------- |
| Secret   | `CLOUDFLARE_API_TOKEN`  | API token with the _Cloudflare Pages: Edit_ permission                    |
| Secret   | `CLOUDFLARE_ACCOUNT_ID` | Account ID shown in the Cloudflare dashboard sidebar                      |
| Variable | `SITE_URL`              | Public URL once the custom domain is live, e.g. `https://your-domain.tld` |

Then add the custom domain in Cloudflare (_Workers & Pages → zioanacleto-site → Custom domains_).

`public/_headers` sets security headers and long-term caching for hashed assets.

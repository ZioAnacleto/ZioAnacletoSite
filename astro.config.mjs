// @ts-check
import { defineConfig } from 'astro/config';

// Set SITE_URL in the Cloudflare Pages environment once the custom domain is live,
// e.g. SITE_URL=https://fabriziotraversa.dev. It enables canonical and hreflang URLs.
const site = process.env.SITE_URL;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});

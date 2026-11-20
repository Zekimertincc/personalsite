// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // TODO: set the real domain before deploying
  site: 'https://zekiinceoglu.com',
  integrations: [react(), mdx()],
  i18n: {
    locales: ['en', 'fr', 'tr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});

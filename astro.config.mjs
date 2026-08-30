import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://homepage-teya.vercel.app',
  integrations: [sitemap()],
});

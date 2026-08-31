import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://homepage-roan-phi-25.vercel.app',
  integrations: [sitemap()],
});

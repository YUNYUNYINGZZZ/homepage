import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ⚠️ 首次部署到 Vercel 后，把这里改成你的真实地址（例如 https://my-blog.vercel.app）
export default defineConfig({
  site: 'https://your-project.vercel.app',
  integrations: [sitemap()],
});

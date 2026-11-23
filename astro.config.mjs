// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// When deployed to Vercel, VERCEL is automatically set to "1"
// When building locally for WordPress dist upload, base is '/contact-us'
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true';

export default defineConfig({
  site: 'https://radiantexhibits.com',
  base: isVercel ? '/' : '/contact-us',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});

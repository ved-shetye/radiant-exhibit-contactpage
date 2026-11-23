// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://radiantexhibits.com',
  base: '/contact-us',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
import { defineConfig } from "astro/config";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://github.com/trunswicked',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
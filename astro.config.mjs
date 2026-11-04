// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Hide Astro's floating dev toolbar so it doesn't clutter the preview (or the projector).
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});

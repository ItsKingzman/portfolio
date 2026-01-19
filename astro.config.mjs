import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    optimizeDeps: {
      include: ['animejs']
    },
    ssr: {
      noExternal: ['animejs']
    }
  }
});
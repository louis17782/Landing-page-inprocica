import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  prefetch: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    server: {
      hmr: true,
    }
  },
  image: {
    // Usar un valor válido para experimentalLayout
    experimentalLayout: 'constrained',
  },
  experimental: {
    responsiveImages: true,
  },
});
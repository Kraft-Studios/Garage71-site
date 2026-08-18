import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Compresses photos at build time only — keeps the real Garage71
    // photography fast to load without adding any runtime dependency.
    ViteImageOptimizer({
      jpg: { quality: 72 },
      jpeg: { quality: 72 },
      webp: { quality: 72 },
      png: { quality: 72 },
    }),
  ],
})

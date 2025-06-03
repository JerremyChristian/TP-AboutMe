import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/TP-AboutMe/', // ← important for GitHub Pages to load assets/scripts correctly
  build: {
    outDir: 'docs', // ← where built files go
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})

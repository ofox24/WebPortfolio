import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so the site (and PDF) work when hosted from a subfolder (e.g., GitHub Pages)
  base: './',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ensure assets and public files (like the PDF) resolve correctly on GitHub Pages
  base: '/WebPortfolio/',
  plugins: [react()],
})

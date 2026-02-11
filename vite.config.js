import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base path for Vercel deployment (use '/' for root deployment)
  base: '/',
  plugins: [react()],
})

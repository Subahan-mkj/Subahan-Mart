import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Only ONE clean configuration block
export default defineConfig({
  plugins: [react()]
})
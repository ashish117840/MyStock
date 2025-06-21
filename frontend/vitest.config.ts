import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // ✅ Enable globals like describe, it, expect
    setupFiles: './src/setupTests.ts',
  },
})
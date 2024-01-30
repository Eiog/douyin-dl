/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude],
    server: {
      deps: {
        external: ['../public/x-bogus.cjs'],
        fallbackCJS: true,
      },
    },
  },
})

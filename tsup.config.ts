import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  external: ['vue', '../public/x-bogus.cjs'],
  dts: true,
  minify: false,
})

// vitest.config.ts
import { defineConfig } from 'vitest/config'
import * as path from 'node:path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: [
      'src/**/*.{test,spec}.ts',
      'server/**/*.{test,spec}.ts',
      'scripts/**/*.{test,spec}.ts',
    ],
    exclude: [
      '**/tests/e2e/**',
      '**/__tests__/**/e2e.*',
    ],
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: './coverage',
      reporter: ['text', 'html', 'lcov', 'clover'],
    },
    reporters: ['default'],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@server': path.resolve(__dirname, './server'),
      '@scripts': path.resolve(__dirname, './scripts'),
    },
  },
  esbuild: { target: 'esnext' },
})

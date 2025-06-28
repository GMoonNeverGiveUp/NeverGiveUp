// vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@src':     path.resolve(__dirname, './src'),
      '@server':  path.resolve(__dirname, './server/src'),
      '@scripts': path.resolve(__dirname, './scripts/src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    include: [
      'src/**/*.{test,spec}.{ts,tsx}',
      'server/**/*.{test,spec}.{ts,tsx}',
      'scripts/**/*.{test,spec}.{ts,tsx}',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov', 'clover'],
      reportsDirectory: './coverage',
      all: true,
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/coverage/**',
        '**/.pnpm/**',
      ],
    },
  },
  esbuild: {
    target: 'es2021',
    format: 'esm',
  },
});

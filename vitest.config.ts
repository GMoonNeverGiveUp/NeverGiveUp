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
      'src/**/*.{test,spec}.ts',
      'server/**/*.{test,spec}.ts',
      'scripts/**/*.{test,spec}.ts',
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov', 'clover'],
      reportsDirectory: './coverage',
    },
  },
  esbuild: { target: 'es2021' }
});

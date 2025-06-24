import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  // ignore all the generated and build artifacts
  ignores: [
    'node_modules/**',
    '.astro/**',
    '**/*.d.ts',
    'dist/**',
    'public/**',
  ],

  root: true,
  parser: 'astro-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.astro']
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'semi': ['error', 'always']
  },
  overrides: [
    {
      files: ['*.astro'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
});

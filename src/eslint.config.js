// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  root: true,
  ignores: ['node_modules/**', 'dist/**', '**/*.tsbuildinfo'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      extends: ['plugin:astro/recommended']
    },
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
      ],
      rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
        ]
      }
    }
  ]
});

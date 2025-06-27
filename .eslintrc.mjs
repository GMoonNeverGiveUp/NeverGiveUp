// .eslintrc.cjs
import { flatESLintConfig, configs as jsConfigs } from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import astroPlugin from 'eslint-plugin-astro'
import importPlugin from 'eslint-plugin-import'
import jsoncPlugin from 'eslint-plugin-jsonc'
import prettierConfig from 'eslint-config-prettier'

export default flatESLintConfig(
  // 1) Base JavaScript rules
  jsConfigs.recommended,

  // 2) TypeScript support
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {
      // TS-specific
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // import ordering
      'import/order': ['error', {
        groups: [['builtin','external'], 'internal', ['parent','sibling','index']],
        'newlines-between': 'always',
      }],
    },
  },

  // 3) Astro files
  {
    files: ['**/*.astro'],
    plugins: {
      astro: astroPlugin,
    },
    extends: ['plugin:astro/recommended'],
    rules: {
      // allow unused props in .astro
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },

  // 4) JSON & JSONC (e.g. package.json)
  {
    files: ['**/*.json', '**/*.jsonc'],
    languageOptions: {
      parser: jsoncPlugin.parsers['jsonc-eslint-parser'],
    },
    plugins: {
      jsonc: jsoncPlugin,
    },
    extends: ['plugin:jsonc/recommended-with-json'],
    rules: {
      'jsonc/no-comments': 'off',
    },
  },

  // 5) Shared overrides & ignores
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'public/**',
      'coverage/**',
      '**/*.d.ts',
    ],
  },

  // 6) Prettier last
  prettierConfig,
)

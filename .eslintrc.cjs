// .eslintrc.cjs
const { flatESLintConfig, configs: jsConfigs } = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const astroPlugin = require('eslint-plugin-astro');
const importPlugin = require('eslint-plugin-import');
const jsoncPlugin = require('eslint-plugin-jsonc');
const prettierConfig = require('eslint-config-prettier');

module.exports = flatESLintConfig(
  // 1) Base JS rules
  jsConfigs.recommended,

  // 2) TS support
  {
    files: ['**/*.ts','**/*.tsx'],
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
      '@typescript-eslint/no-unused-vars': ['warn',{ argsIgnorePattern:'^_',varsIgnorePattern:'^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/order': ['error',{
        groups:[['builtin','external'],'internal',['parent','sibling','index']],
        'newlines-between':'always',
      }],
    },
  },

  // 3) Astro files
  {
    files: ['**/*.astro'],
    extends: ['plugin:astro/recommended'],
    plugins: { astro: astroPlugin },
    rules: { '@typescript-eslint/no-unused-vars':'off' },
  },

  // 4) JSON & JSONC
  {
    files: ['**/*.json','**/*.jsonc'],
    languageOptions: {
      parser: jsoncPlugin.parsers['jsonc-eslint-parser'],
    },
    extends: ['plugin:jsonc/recommended-with-json'],
    plugins: { jsonc: jsoncPlugin },
    rules: { 'jsonc/no-comments':'off' },
  },

  // 5) Ignore build/artifacts
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
);

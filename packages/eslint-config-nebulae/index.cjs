const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const astroPlugin = require('eslint-plugin-astro');
const jsoncPlugin = require('eslint-plugin-jsonc');
const jsoncParser = require('jsonc-eslint-parser');
const prettier = require('eslint-config-prettier');

module.exports = [
  // TypeScript config
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal'],
          'newlines-between': 'always'
        }
      ]
    }
  },

  // Astro config
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroPlugin.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    plugins: {
      astro: astroPlugin
    },
    processor: astroPlugin.processors['.astro'],
    rules: {
      ...astroPlugin.configs.recommended.rules
    }
  },

  // JSONC / JSON5 config
  {
    files: ['**/*.json', '**/*.jsonc', '**/*.json5'],
    languageOptions: {
      parser: jsoncParser
    },
    plugins: {
      jsonc: jsoncPlugin
    },
    rules: {
      ...jsoncPlugin.configs['recommended-with-jsonc'].rules
    }
  },

  // Prettier baseline
  {
    rules: {
      ...prettier.rules
    }
  }
];

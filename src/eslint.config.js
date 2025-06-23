// src/eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import parser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.js', '**/*.astro'],
    languageOptions: {
      parser, // ✅ This is now a correct parser object
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    rules: {
      // ✅ General Best Practices
      'no-console': 'warn',
      'no-debugger': 'error',
      'eqeqeq': ['error', 'always'],

      // ✅ Code Style
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 2, { SwitchCase: 1 }],

      // ✅ Modern Practices
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],

      // ✅ Testing Globals
      'no-undef': 'off',
    },
  },
];

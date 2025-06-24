// .eslintrc.cjs
const path = require('path');

module.exports = {
  root: true,

  // don’t lint generated or config files
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.astro/',
    '.eslintrc.cjs',
    '*.config.js',
    '*.config.cjs',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.astro'],
  },

  plugins: [
    '@typescript-eslint',
    'astro',
  ],

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'prettier',
  ],

  rules: {
    // this one needs type info – turn it off unless you really want it
    '@typescript-eslint/await-thenable': 'off',
    // add any other global tweaks here
  },

  overrides: [
    {
      // for JS/CommonJS config files, don’t point at your tsconfig
      files: ['*.js', '*.cjs', '*.config.js', '*.config.cjs'],
      parser: 'espree',
      parserOptions: {
        project: null,
      },
      rules: {
        // turn off TS‐only rules in pure JS files
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      // use the Astro parser for .astro files
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};

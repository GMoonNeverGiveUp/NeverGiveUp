// .eslintrc.cjs
module.exports = {
  root: true,
  ignorePatterns: ['node_modules/**', 'dist/**', '**/*.tsbuildinfo'],

  overrides: [
    // — Astro files
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      extends: ['plugin:astro/recommended'],
    },

    // — JS/TS files
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
      },
    },
  ],
};

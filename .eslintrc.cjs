// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    node:    true,
    es2022:  true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType:  'module',
    project:     './tsconfig.json',
    extraFileExtensions: ['.astro'],
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'plugin:jsonc/recommended-with-json',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'astro',
    'jsonc',
  ],
  settings: {
    'jsonc/schemas': [
      // optional: JSON schema mappings for package.json, etc.
    ],
    'import/resolver': {
      node: { extensions: ['.js','.ts','.jsx','.tsx','.astro'] },
    },
  },
  rules: {
    // TypeScript
    '@typescript-eslint/no-unused-vars': ['warn',{ argsIgnorePattern:'^_', varsIgnorePattern:'^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // import ordering
    'import/order': ['error',{ 
      groups: [['builtin','external'], 'internal', ['parent','sibling','index']],
      'newlines-between':'always',
    }],

    // Astro-specific
    'astro/no-conflict-set-directives': 'error',

    // JSONC: allow comments
    'jsonc/no-comments': 'off',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'public/',
    'coverage/',
    '**/*.d.ts',
  ],
}

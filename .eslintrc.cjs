/* eslint-env node */
module.exports = {
  root: true,
  extends: ['wdzeng/typescript'],
  env: {
    browser: false,
    es2022: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    // Your custom rules go here ...
    'prettier/prettier': 'warn'
  },
  overrides: [{
    files: ['**/*.test.ts'],
    rules: {
      // It is OK to import anything in test files.
      'n/no-unpublished-import': 'off',
    }
  }]
}

import { getConfigForTs } from 'eslint-config-wdzeng'

export default getConfigForTs(
  // Custom rules go here
  {},
  // Options
  {
    projectRoot: import.meta.dirname, // Project root directory
    ecmaVersion: 2023, // ECMAScript version
    ignores: ['build', 'dist', 'out'], // Global ignore files
    node: true, // Whether in Node.js
    browser: false, // Whether in browser
    vitest: true // Whether to use Vitest
  }
)

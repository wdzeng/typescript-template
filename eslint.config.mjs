import { getConfigForTs } from 'eslint-config-wdzeng'

export default getConfigForTs(
  // Custom rules go here
  {},
  // Options
  {
    browser: false, // Whether in browser
    ecmaVersion: 2022, // ECMAScript version
    ignores: ['build', 'dist', 'out'], // Ignore files
    node: true, // Whether in Node.js
    projectRoot: import.meta.dirname // Project root dir
  }
)

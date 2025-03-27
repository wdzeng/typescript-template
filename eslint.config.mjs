import { getConfigForTs } from 'eslint-config-wdzeng'

export default getConfigForTs(
  // Custom rules go here
  {},
  // Options
  {
    browser: false, // Whether in browser
    vitest: true // Whether to use Vitest
  }
)

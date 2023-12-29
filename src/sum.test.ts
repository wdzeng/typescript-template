import { expect, test } from '@jest/globals'

import sum from '@/sum'

test('test sum', () => {
  expect(sum(1, 2, 3)).toBe(6)
})

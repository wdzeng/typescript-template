import { expect, test } from 'vitest'

import sum from '@/sum'

test('test sum', () => {
  expect(sum(1, 2)).toBe(3)
})

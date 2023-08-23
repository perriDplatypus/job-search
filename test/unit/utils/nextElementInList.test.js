import { describe, expect } from 'vitest'

import nextElementInList from '@/utils/nextElementInList'

describe('nextElementInList', () => {
  it('locates element in list and returns next element in list', () => {
    const list = ['a', 'b', 'c', 'd', 'e']
    const value = 'c'
    const result = nextElementInList(list, value)
    expect(result).toBe('d')
  })

  describe('when element is at the end of list', () => {
    it('locates next element at the start of list', () => {
      const list = ['a', 'b', 'c', 'd', 'e']
      const value = 'e'
      const result = nextElementInList(list, value)
      expect(result).toBe('a')
    })
  })
})

import { describe, it, expect } from 'vitest'
import { fromSrc } from '@src/index'

describe('🛠 Script: run.ts', () => {
  it('should return the correct greeting from fromSrc()', () => {
    expect(fromSrc()).toBe('👋 Hello from the src workspace!')
  })
})

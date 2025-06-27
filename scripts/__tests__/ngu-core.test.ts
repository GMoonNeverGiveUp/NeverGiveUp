// src/__tests__/ngu-core.test.ts
import { describe, it, expect } from 'vitest'
import { getGreeting } from '../../src/utils/getGreeting.js'

describe('🚀 NGU Core Bootstrap', () => {
  it('should return the correct NGU greeting', () => {
    expect(getGreeting()).toMatch(/Never Give Up/i)
  })
})

import { describe, it, expect } from 'vitest'
// same here—no extension
import { getGreeting } from '../src/utils/getGreeting'

describe('🚀 NGU Core Bootstrap', () => {
  it('should return the correct NGU greeting', () => {
    const msg = getGreeting()
    expect(msg).toMatch(/Never Give Up/i)
  })
})

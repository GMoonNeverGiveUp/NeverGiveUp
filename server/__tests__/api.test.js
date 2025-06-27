// server/__tests__/api.test.ts
import { describe, it, expect } from 'vitest'
import { handler } from '../api'

describe('🌐 Server API', () => {
  it('returns expected API result', async () => {
    const result = await handler()
    expect(result).toMatchObject({ status: 'OK' })
  })
})

// server/__tests__/api.test.ts
import { describe, it, expect, vi } from 'vitest'
import * as srcModule from '../src/index.js'
const spy = vi.spyOn(srcModule, 'fromSrc').mockReturnValue('Hello')
import { handler, serverHello } from '../api.js'

describe('🌐 Server API', () => {
  it('handler() returns OK status', async () => {
    const result = await handler()
    expect(result).toHaveProperty('status', 'OK')
  })

  it('serverHello() uses fromSrc() and adds suffix', () => {
    const greeting = serverHello()
    expect(spy).toHaveBeenCalled()
    expect(greeting).toBe('Hello from server')
  })
})

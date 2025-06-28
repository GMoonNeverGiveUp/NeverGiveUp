import { describe, it, expect, vi } from 'vitest';
import * as core from '../src/index.js';    // your library entry
import { handler, serverHello } from '../api.js';

describe('🌐 server/api', () => {
  it('handler() returns OK', async () => {
    const res = await handler();
    expect(res).toEqual({ status: 'OK', message: 'Server up!' });
  });

  it('serverHello() delegates to fromSrc()', () => {
    const spy = vi.spyOn(core, 'fromSrc').mockReturnValue('Yo');
    const result = serverHello();
    expect(spy).toHaveBeenCalledOnce();
    expect(result).toBe('Yo from server');
    spy.mockRestore();
  });
});

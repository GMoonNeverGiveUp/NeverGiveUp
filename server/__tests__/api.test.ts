import { describe, it, expect } from 'vitest';
import { handler } from '../api.js';

describe('🌐 Server API', () => {
  it('returns expected API result', async () => {
    const result = await handler();
    expect(result).toHaveProperty('status', 'OK');
  });
});

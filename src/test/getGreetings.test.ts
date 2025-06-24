import { describe, it, expect } from 'vitest';
import { getGreeting } from '../utils/getGreeting.js';

describe('🌟 getGreeting', () => {
  it('returns a motivational NGU string', () => {
    const result = getGreeting();
    expect(result).toMatch(/Never Give Up/);
  });
});

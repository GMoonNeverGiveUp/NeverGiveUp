// server/__tests__/ngu-core.test.ts
import { describe, it, expect } from 'vitest';
import { getGreeting } from '@src/utils/getGreeting.ts'; // now resolved correctly

describe('🚀 NGU Core Bootstrap', () => {
  it('should return the correct NGU greeting', () => {
    const msg = getGreeting();
    expect(msg).toMatch(/Never Give Up/i);
  });
});

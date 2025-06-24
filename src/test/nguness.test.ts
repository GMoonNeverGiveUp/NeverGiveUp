import { describe, it, expect } from 'vitest';
import { getNGUMessage } from '../utils/nguness.js';

describe('🧠 NGUNess Utility', () => {
  it('returns a personalized NGU message', () => {
    const result = getNGUMessage('Yasmin');
    expect(result).toContain('Never Give Up, Yasmin');
  });

  it('returns the default message when no name is given', () => {
    const result = getNGUMessage();
    expect(result).toContain('Never Give Up, Galactic Genius');
  });
});
    
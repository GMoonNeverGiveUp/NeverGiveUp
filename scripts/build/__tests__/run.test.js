import { describe, test, expect } from 'vitest';
import { fromSrc } from '@scripts/index';
describe('🛠 run.ts helper', () => {
    test('returns the greeting from the src workspace', () => {
        const greeting = fromSrc();
        expect(greeting).toBe('👋 Hello from the src workspace!');
    });
});

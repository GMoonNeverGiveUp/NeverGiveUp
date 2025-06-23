import { fromSrc } from '../index';

describe('fromSrc', () => {
  it('should return the correct greeting', () => {
    expect(fromSrc()).toBe('👋 Hello from the src workspace!');
  });
});

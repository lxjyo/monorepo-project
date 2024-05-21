import { sub } from '../src/sub';

describe('测试sub方法', () => {
  it('1 - 2 = -1', () => {
    expect(sub(1, 2)).toBe(-1);
  });
});

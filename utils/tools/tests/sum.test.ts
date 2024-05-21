import { sum } from '../src/sum';

describe('测试sum方法', () => {
  it('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

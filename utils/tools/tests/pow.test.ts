import { pow } from '../src/pow';

describe('pow', () => {
  it('测试pow', () => {
    expect(pow(2, 3)).toBe(8);
  })
});
import { twoSumBruteForce, twoSumHashMap } from '../src/problems/001-twoSum';

describe('001_twoSum', () => {
  test('twoSumHashMap', () => {
      expect(twoSumHashMap([2, 7, 11, 15], 9)).toEqual([0, 1]);
      expect(twoSumHashMap([3, 2, 4], 6)).toEqual([1, 2]);
      expect(twoSumHashMap([3, 3], 6)).toEqual([0, 1]);
  });

  test('twoSumBruteForce', () => {
      expect(twoSumBruteForce([2, 7, 11, 15], 9)).toEqual([0, 1]);
      expect(twoSumBruteForce([3, 2, 4], 6)).toEqual([1, 2]);
      expect(twoSumBruteForce([3, 3], 6)).toEqual([0, 1]);
  });
});
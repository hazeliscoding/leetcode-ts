// Solution 1: Using a hash map (Time: O(n), Space: O(n))
export function twoSumHashMap(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }

  throw new Error('No two sum solution');
}

// Solution 2: Brute force (Time: O(n^2), Space: O(1))
export function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  throw new Error('No two sum solution');
}
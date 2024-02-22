import { isPalindromeBruteForce } from '../src/problems/009-palindromeNumber';

describe('009-palindromeNumber', () => {
  test('isPalindromeBruteForce', () => {
    expect(isPalindromeBruteForce(121)).toBe(true);
    expect(isPalindromeBruteForce(-121)).toBe(false);
    expect(isPalindromeBruteForce(10)).toBe(false);
  });

  test('isPalindromeOptimized', () => {
    expect(isPalindromeBruteForce(121)).toBe(true);
    expect(isPalindromeBruteForce(-121)).toBe(false);
    expect(isPalindromeBruteForce(10)).toBe(false);
  });
});

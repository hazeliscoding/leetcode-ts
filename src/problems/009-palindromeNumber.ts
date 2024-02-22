export function isPalindromeBruteForce(x: number): boolean {
  const str = x.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

export function isPalindromeOptimized(x: number): boolean {
  // Edge cases: when x < 0, it's not a palindrome.
  // Also, if the last digit of the number is 0, to be a palindrome,
  // the first digit of the number also needs to be 0, which can only happen if x is 0.
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // When the length of the number is odd, we can get rid of the middle digit by reversedHalf/10
  // For example, in the case of 12321, at the end of the loop we will have x = 12, reversedHalf = 123,
  // since the middle digit doesn't matter in palindrome(it will always equal to itself), we can safely remove it.
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

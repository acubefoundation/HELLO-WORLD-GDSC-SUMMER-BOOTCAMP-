/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let checker = x;
  let result = 0;
  while (checker > 0) {
    result = result * 10 + (checker % 10);
    checker = Math.floor(checker / 10);
  }
  if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
}
  return result == x;
};
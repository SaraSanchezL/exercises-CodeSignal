/* Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

Example

For inputArray = [2, 4, 1, 0], the output should be
solution(inputArray) = 3. */

function solution(inputArray) {
  let max = Math.abs(inputArray[1] - inputArray[0]);
  for (let i = 2; i < inputArray.length; i++) {
    if (Math.abs(inputArray[i] - inputArray[i - 1]) > max) {
      max = Math.abs(inputArray[i] - inputArray[i - 1]);
    }
  }
  return max
}
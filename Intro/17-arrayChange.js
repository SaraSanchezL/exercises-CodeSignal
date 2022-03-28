/* You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For , the output should be
inputArray = [1, 1, 1]solution(inputArray) = 3 */

function solution(inputArray) {

  let counter = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      let dif = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;

      counter += dif;
    }
  }

  return counter;

}
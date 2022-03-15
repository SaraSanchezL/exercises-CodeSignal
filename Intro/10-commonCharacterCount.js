/* Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c". */

const s1 = "aabcc"
const s2 = "adcaa"

function solution(s1, s2) {
  let counter = 0;
  const obj = s2.split("");
  for (str of s1) {
    let i = obj.findIndex(s => s === str);
    if (i >= 0) {
      counter++;
      obj.splice(i, 1);
    }
  }
  return counter;
}

console.log(solution(s1, s2));
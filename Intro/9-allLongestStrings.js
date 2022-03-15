/* Given an array of strings, return another array containing all of its longest strings.

Example

For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"]. */ 

function solution(inputArray) {
  let longArr = [];
  let max_length = 0;
     for (const str of inputArray) {
         if (str.length > max_length) {
             longArr = [];
             max_length = str.length
             longArr.push(str);
         }
         else if (str.length == max_length) {
             longArr.push(str);
         }
     }
     return longArr
 }
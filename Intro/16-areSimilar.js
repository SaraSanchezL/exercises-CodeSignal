/* Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.
Given two arrays and , check whether they are similar => a b

Example

For and , the output should be
a = [1, 2, 3] 
b = [1, 2, 3] 
solution(a, b) = true
The arrays are equal, no need to swap any elements.

For and , the output should be
a = [1, 2, 3] 
b = [2, 1, 3] 
solution(a, b) = true
We can obtain from by swapping and in b a 2 1 b

For and , the output should be
a = [1, 2, 2] 
b = [2, 1, 1] 
solution(a, b) = false
Any swap of any two elements either in or in won't make and equal a b a b */

function solution(a, b) {
  if (a.join('') === b.join('')) {
    return true;
  }
  let arrayA = [];
  let arrayB = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arrayA.push(a[i]);
      arrayB.push(b[i]);
    }
  }
  arrayB = arrayB.reverse().join('');
  arrayA = arrayA.join('');
  if (arrayA === arrayB) {
    return true;
  }
  return false;
}
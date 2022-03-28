/* Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome. 
*/

function solution(inputString) {

  const getArr = inputString.split('');
  const arr = [];

  getArr.map(element => {
    if (arr[element]) {
      arr[element]++
    } else {
      arr[element] = 1
    }
  })

  let counter = 0;
  for (const item in arr) {
    const value = arr[item];
    if (counter > 1) break;
    if (value % 2 === 1) {
      counter += 1;
    }
  }

  return counter <= 1;

}


/* Break : termina el bucle actual, sentecia switch o label y transfiere el control del programa a la siguiente sentencia a la sentecia de terminación de éstos elementos. */ 
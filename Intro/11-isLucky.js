/* Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.
Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false. */

function solution(n) {

  const b = n.toString().split('')
  const a = b.length / 2;
  let c1 = 0
  let c2 = 0
  b.map((e, i) => {
    if (i + 1 <= a) c1 += parseInt(e);
    if (i + 1 > a) c2 += parseInt(e);
  })
  return c1 === c2

}
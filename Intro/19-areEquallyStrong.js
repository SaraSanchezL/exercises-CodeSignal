/* Call two arms equally strong if the heaviest weights they each are able to lift are equal.

Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.

Example

For , , , and , the output should beyourLeft = 10yourRight = 15friendsLeft = 15friendsRight = 10
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For , , , and , the output should beyourLeft = 15yourRight = 10friendsLeft = 15friendsRight = 10
solution(yourLeft, yourRight, friendsLeft, friendsRight) = true;
For , , , and , the output should be
.yourLeft = 15yourRight = 10friendsLeft = 15friendsRight = 9solution(yourLeft, yourRight, friendsLeft, friendsRight) = false */

function solution(yourLeft, yourRight, friendsLeft, friendsRight) {

  return Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) &&
    Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight);
}
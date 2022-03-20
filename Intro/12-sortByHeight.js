/* Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]. 

El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array. El método shift elimina el elemento en el índice cero y desplaza los valores consecutivos hacia abajo, devolviendo el valor eliminado. 
*/

function solution(a) {
  let aFiltered = a.filter(n => {
    if (n !== -1) {
      return n;
    }
  }).sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] != -1) {
      a[i] = aFiltered.shift();
    }
  }

  return a;
}

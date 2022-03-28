/* Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"];
 */

function solution(picture) {

  picture = picture.map(a => '*'.concat(a, '*'))
  const row = picture[0].length;
  picture.unshift(Array(row).fill('*').join(''));
  picture.push(Array(row).fill('*').join(''))
  return picture;

}



/* El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
 El método fill() cambia todos los elementos en un arreglo por un valor estático, desde el índice start (por defecto 0) hasta el índice end (por defecto array.length). Devuelve el arreglo modificado.  */

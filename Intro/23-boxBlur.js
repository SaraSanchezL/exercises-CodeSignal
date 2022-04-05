/* Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel in the output image has a value equal to the average value of the pixel values from the square that has its center at , including itself. All the pixels on the border of are then removed.x3 × 3xxx
Return the blurred image as an integer, with the fractions rounded down.

Example

For
image = [[1, 1, 1], 
         [1, 7, 1], 
         [1, 1, 1]]
the output should be .solution(image) = [[1]]
To get the value of the middle pixel in the input square: . The border pixels are cropped from the final result.3 × 3(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1

For
image = [[7, 4, 0, 1], 
         [5, 6, 2, 2], 
         [6, 10, 7, 8], 
         [1, 4, 2, 0]]
the output should be
solution(image) = [[5, 4], 
                  [4, 4]]
There are four squares in the input image, so there should be four integers in the blurred output. To get the first value: . The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.3 × 3(7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5 */

function solution(image) {
  let adjacents = ([i, j]) => [
    [i, j],
    [i - 1, j - 1],
    [i - 1, j],
    [i - 1, j + 1],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j - 1],
    [i + 1, j],
    [i + 1, j + 1],
  ];
  let blur = image.slice(2).map((r) => r.slice(2));
  for (let i = 1; i < image.length - 1; i++) {
    for (let j = 1; j < image[i].length - 1; j++) {
      blur[i - 1][j - 1] = Math.floor(
        adjacents([i, j]).reduce((acc, el) => acc + image[el[0]][el[1]], 0) / 9
      );
    }
  }

  return blur;
}
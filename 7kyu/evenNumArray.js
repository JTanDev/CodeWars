// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]

function evenNumbers(array, number) {
  let newArr = array.reverse().filter((num) => num % 2 == 0);
  let final = [];
  for (let i = 0; i < number; i++) {
    final.unshift(newArr[i]);
  }
  return final;
}

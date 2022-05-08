// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  if (input === null || input.every((c) => c === 0)) {
    return [];
  }
  for (let num of input) {
    if (num > 0) {
      count++;
    } else if (num < 0) {
      sum += num;
    }
  }
  return [count, sum];
}

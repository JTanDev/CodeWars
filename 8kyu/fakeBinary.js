// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  let nums = x.split("");
  let binary = [];
  for (let num of nums) {
    if (num < 5) {
      binary.push(0);
    } else {
      binary.push(1);
    }
  }
  return binary.join("");
}

//Better

function fakeBin2(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

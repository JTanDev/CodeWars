// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  let arr = s.split("");
  let middle1;
  let middle2;
  if (arr.length % 2 === 0) {
    middle1 = arr[arr.length / 2 - 1];
    middle2 = arr[arr.length / 2];
    return `${middle1}${middle2}`;
  } else {
    middle1 = arr[Math.ceil(arr.length / 2 - 1)];
    return middle1;
  }
}

//Better

function getMiddle2(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

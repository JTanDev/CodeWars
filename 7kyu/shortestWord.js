// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(" ");
  let short = arr[0];
  for (let word of arr) {
    if (word.length < short.length) {
      short = word;
    }
  }
  return short.length;
}

//Better
function findShort2(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

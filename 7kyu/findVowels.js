// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

function vowelIndices(word) {
  const arr = [];
  const temp = word.toLowerCase().split("");
  for (let i = 0; i < temp.length; i++) {
    if (
      temp[i] == "a" ||
      temp[i] == "e" ||
      temp[i] == "i" ||
      temp[i] == "o" ||
      temp[i] == "u" ||
      temp[i] == "y"
    ) {
      arr.push(i + 1);
    }
  }
  return arr;
}

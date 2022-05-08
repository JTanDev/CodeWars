// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let nums = n.toString().split("");
  let rev = [];
  for (let num of nums) {
    rev.unshift(Number(num));
  }
  return rev;
}

//Better

function digitize2(n) {
  return String(n).split("").map(Number).reverse();
}

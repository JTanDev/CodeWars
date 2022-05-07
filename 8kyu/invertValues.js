// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    let inverse = []
    for(let num of array){
      inverse.push(-num)
    }
     return inverse;
  }

  //Better

function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}
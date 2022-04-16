//Complete the solution so that it reverses the string passed into it.

function solution(str){
    let split = str.split('')
    let reverse = split.reverse()
    let join = reverse.join('')
    return join
  }
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

function abbrevName(name){
    let arr = name.split(' ')
    let first = arr[0].slice(0,1).toUpperCase()
    let last = arr[1].slice(0,1).toUpperCase()
    return `${first}.${last}`
  }
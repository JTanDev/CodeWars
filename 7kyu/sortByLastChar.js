// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

function last(x){
    if (x.trim().length === 0){
      return x.split(' ')
    }
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let arr = x.split(' ')
    let newArr = []
    for( let letter of alph){
      for(let i=0;i<arr.length;i++){
        if(arr[i].split('').reverse()[0] == letter){
          newArr.push(arr[i])
        }
      }
    }
    return newArr
}

//LOL

function last2(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}
// Split Strings

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/

const splitStrings = function(str) {
  let result = [];
  for (let i = 0; i < str.length; i += 2) {
    if (str.length % 2 === 1 && i === str.length - 1) {
      result.push(str[i] + '_')
    } else {
      result.push(str[i] + str[i + 1])
    }   
  }
  return result
} 

console.log(splitStrings('abc'));
console.log(splitStrings('abcdef'));
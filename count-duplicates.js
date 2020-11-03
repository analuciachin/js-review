// Counting Duplicates

/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

const countDupl = function(str) {
  let characters = [];
  let allElements = [];
  let dupl = [];
  let chInArray = false;

  for (let i = 0; i < str.length; i++) {
    chInArray = false;
    for (let j = 0; j < characters.length; j++) {
      if (characters.length === 0) {
        characters.push(str[i].toLowerCase());
      } else if (str[i].toLowerCase() === characters[j].toLowerCase()) {
        chInArray = true;
      }
    }
    if (!chInArray) {
      characters.push(str[i].toLowerCase());
    }
  }

  console.log(characters);
  for (let i = 0; i < characters.length; i++) {
    let element = {};
    element.char = characters[i];
    element.count = 0;
    allElements.push(element);
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < allElements.length; j++) {
      if (str[i].toLowerCase() === allElements[j].char.toLowerCase()) {
        allElements[j].count++;
      }
    }
  }

  dupl = allElements.filter(el => el.count > 1)

  return dupl
}

console.log(countDupl('Indivisibilities'));
console.log(countDupl('ABBA'));
console.log(countDupl('aabBcde'));
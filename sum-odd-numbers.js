// Sum of odd numbers

/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8
*/

const rowSumOddNumbers = function(row) {
  let countNum = 0;
  let oddNum;
  let sumNum = 0;
  for (let i = 1; i < row; i++) {
    countNum += i;
  }
  oddNum = 2 * countNum - 1;
  for (let i = 1; i <= row; i++) {
    oddNum = oddNum + 2;
    sumNum = sumNum + oddNum;
  }
  return sumNum
}

console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(5));
// Looping over arrays

const amounts = [61.00, 52.25, 112.99, 5.00]; 

// // for
// const total = 0;
// for (let i = 0; i < amounts.length; i++) {
//   total += amounts[i];
// }
// console.log('Order total is: ', total);


// // for..of
// let total = 0;
// for (let amount of amounts) {
//   total += amount;
// }
// console.log('Order total is: ', total);


// forEach
let total = 0;
amounts.forEach(function(amount, index) {
  total += amount;
  console.log('amount: ', amount, ', index: ', index);
})

console.log('Order total is: ', total);
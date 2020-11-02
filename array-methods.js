let fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Strawberry'];

// // toString()
// console.log(fruits.toString());

// // join()
// console.log(fruits.join(' * '));

// // pop() - removes the LAST element of an array
// // Note: This method changes the original array.
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// // push() - adds a new element in the END of an array
// // Note: This method changes the original array.
// console.log(fruits);
// fruits.push('Kiwi');
// console.log(fruits);

// // shift() - removes the FIRST element in the array and "shifts" all other elements to a lower index
// // Note: This method changes the original array.
// console.log(fruits);
// fruits.shift();
// console.log(fruits);

// // unshift() - adds a new element at the BEGINNING and "unshifts" older elements
// // Note: This method changes the original array.
// console.log(fruits);
// fruits.unshift('Lemon');
// console.log(fruits);


// slice() - removes the last element of an array
// Note: The original array will NOT be changed.
// let newFruits = fruits.slice(0, fruits.length-1);
// console.log(fruits);
// console.log(newFruits);


// // splice() - adds/removes items to/from an array, and returns the removed item(s).
// // Note: This method changes the original array.
// console.log(fruits);
// fruits.splice(fruits.length, 0, 'Kiwi') - to add an new element at the end
//fruits.splice(2,2); - to remove elements
// fruits.splice(2, 2, "Lemon", "Pinapple"); - remove two elements and add 2 new elements
// console.log(fruits);


// // concat() - concatenate existing arrays
// // Note: This method does NOT change the original array
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
let myChildren = arr1.concat(arr2, arr3);   
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(myChildren);
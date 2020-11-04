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


// slice() - slices out a piece if an array into a new array
// Note: The original array will NOT be changed.
// console.log('fruits: ', fruits);
// let newFruits = fruits.slice(0, fruits.length-1);
// let citrus = fruits.slice(3);
// let someFruits = fruits.slice(1, 3); 
// // console.log('newFruits: ', newFruits);
// console.log('citrus: ', citrus);
// console.log('someFruits: ', someFruits);


// // splice() - adds/removes items to/from an array, and returns the removed item(s).
// // Note: This method changes the original array.
// console.log(fruits);
// fruits.splice(fruits.length, 0, 'Kiwi') - to add an new element at the end
//fruits.splice(2,2); - to remove elements
// fruits.splice(2, 2, "Lemon", "Pinapple"); - remove two elements and add 2 new elements
// console.log(fruits);


// // concat() - concatenate existing arrays
// // Note: This method does NOT change the original array
// const arr1 = ['Cecilie', 'Lone'];
// const arr2 = ['Emil', 'Tobias', 'Linus'];
// const arr3 = ['Robin', 'Morgan'];
// let myChildren = arr1.concat(arr2, arr3);
// let myChildren = arr1.concat('Peter');
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(myChildren);


// map()
const array1 = [1, 4, 9, 16, 25];


const map1 = array1.map(x => x * 2);
console.log(map1);


const map2 = array1.forEach(x => x * 2);
console.log(map2);


// reduce()

// // filter()
// let cities = [
//   {name: 'Montreal', province: 'Quebec', population: 3519595},
//   {name: 'Toronto', province: 'Ontario', population: 5429524},
//   {name: 'Vancouver', province: 'British Columbia', population: 2264823},
//   {name: 'Ottawa', province: 'Ontario', population: 989657},
//   {name: 'Calgary', province: 'Alberta', population: 1237656},
//   {name: 'Edmonton', province: 'Alberta', population: 1062643},
//   {name: 'Winnipeg', province: 'Manitoba', population: 711925}
// ]

// let bigcities = cities.filter((city) => city.population > 1500000)
//                       .sort((c1,c2) => c2.population - c1.population)
//                       .map(city => console.log(city.name + ': ' + city.population))


// var bunny = "lucy";
// var dog = "Tom";
// var cat = "Molly";
//  console.log(bunny, dog, cat);

// function animalName() {
//   var bunny = 'lucy'; //local variable
//   console.log(bunny);
// }

// var bunny = "lucy";
// function animalsName() {
//   console.log(bunny);
// }

//LOOPS
// for (let i = 0; i < 10; i++) {
//   console.log(`Number ${i}`);

// }

// let i = 0;
// while (i < 10) {
//   console.log(`Number ${i}`);
//   i++;
// }

// let i = 3;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// OBJECTS
// var bunny = {
//   name: 'Lucy',
//   age: 3,
//   isHappy: true,
// };

// console.log(bunny.name); // Output: Lucy
// console.log(bunny.age); // Output: 3
// console.log(bunny.isHappy); // Output: true

//ARRAYS
// var bunnies = ['Lucy', 'Tom', 'Molly'];
// console.log(bunnies[0]); // Output: Lucy
// console.log(bunnies[1]); // Output: Tom

//EXERCISE
// var bunny = {
//   name: 'Lucy',
//   age: 3,
//   isHappy: true
// }

// console.log(bunny.name);
// console.log(bunny.age);
// console.log(bunny.isHappy);

//FUNCTIONS
// sum up the total bunnies in a farm
// function sumBunnies() {
//   var blackBunnies = 10;
//   var whiteBunnies = 20;
//   var totalBunnies = blackBunnies + whiteBunnies;
//   return totalBunnies;
// }
// console.log(sumBunnies());

// function sumBunnies(blackBunnies, whiteBunnies) {
//   var totalBunnies = blackBunnies + whiteBunnies;
//   return totalBunnies;
// }

// console.log(sumBunnies(10, 20));

// result: 30

//ARROW FUNCTION
// var sumBunnies = (blackBunnies, whiteBunnies) => {
// the => is called the fat arrow
//   var totalBunnies = blackBunnies + whiteBunnies;
//   return totalBunnies;
// };

// console.log(sumBunnies(10, 20));
// result: 30

// IIFE (Immediate)
// (function () {
//   var blackBunnies = 10;
//   var whiteBunnies = 20;
//   var totalBunnies = blackBunnies + whiteBunnies;
//   console.log(totalBunnies);
// })();

// TYPE CASTING
// string to number
// var a = 14;
// var b = 2;
// var c = a / b;
// console.log(c);

// number to sring
// var a = '14';
// var b = '2';
// var c = a / b;
// console.log(c); // '7'

// ARRAY AND ARRAY METHOD
// const bunnies = ['Lucy', 'Tom', 'Molly'];

// // Add an item to the end of an array
// bunnies.push('Bella'); // ['Lucy', 'Tom', 'Molly', 'Bella']

// // Remove an item from the end of an array
// bunnies.pop(); // ['Lucy', 'Tom', 'Molly']

// // Add an item to the beginning of an array
// bunnies.unshift('Bella'); // ['Bella', 'Lucy', 'Tom', 'Molly']

// // Remove an item from the beginning of an array
// bunnies.shift(); // ['Lucy', 'Tom', 'Molly']

// // Find the index of an item in the array
// bunnies.indexOf('Tom'); // 1

// // Remove an item by index position
// bunnies.splice(1, 1); // ['Lucy', 'Molly']

// // Copy an array
// const newBunnies = bunnies.slice(); // ['Lucy', 'Molly']

// MIXED DATA TYPE
// const mixedDataTypes = [true, 20, 'Lucy', null, undefined, { name: 'Lucy' }];

// ACESSING ARRAY ELEMENTS
//const bunnies = ['Lucy', 'Tom', 'Molly'];

// Access the first item in the array
//bunnies[0]; // 'Lucy'

// Access the second item in the array
//bunnies[1]; // 'Tom'

// LOOPING THROUGH ARRAY
//const bunnies = ['Lucy', 'Tom', 'Molly'];

// for (let i = 0; i < bunnies.length; i++) {
//   console.log(`Bunny ${bunnies[i]} is scheduled for a checkup today.`);
// }

/* Result:
Bunny Lucy is scheduled for a checkup today.
Bunny Tom is scheduled for a checkup today.
Bunny Molly is scheduled for a checkup today.
 */

// ARRAY LENGTH
// const bunnies = ['Lucy', 'Tom', 'Molly'];

// bunnies.length; // 3

// NESTED ARRAY
// const nestedArrays = [
//   ['Lucy', 'Tom'],
//   ['Molly', 'Bella'],
// ];
// console.log(nestedArrays);

//ACCESSING NESTED ARRAY
// const nestedArrays = [
//   ['Lucy', 'Tom'],
//   ['Molly', 'Bella'],
// ];
// Access the first item in the first array
// nestedArrays[1][1]; // 'Lucy'
// console.log(nestedArrays[1][1]);

// EXERCISE
// var bunnies = ["Lucy", "Bella", "Tom", "Molly", "Billy", "Nora"];
// bunnies.push("Mario");
// console.log(bunnies);
// bunnies.pop("Lucy");
// console.log(bunnies);
// bunnies.unshift("Luigi");
// console.log(bunnies);

// JSON ---------------- JavaScript Object Notation
// {
//   "name": "Lucy",
//   "age": 3,
//   "isHappy": true
// }

//Convert JavaScript to JSON
// let bunny = {
//   name: 'Lucy',
//   age: 3,
//   isHappy: true,
// };

// let bunnyJSON = JSON.stringify(bunny);
// console.log(bunnyJSON);
// {"name":"Lucy","age":3,"isHappy":true}

//Convert JSON to JavaScript Object
// let bunnyJSON = '{"name":"Lucy","age":3,"isHappy":true}';
// let bunny = JSON.parse(bunnyJSON);

// console.log(bunny.name); // Lucy

//EXERCISE
// let bunny = {
//   name: 'Lucy',
//   age: 9,
//   isHappy:true
// }

// let bunnyJSON = JSON.stringify(bunny)
// console.log(bunny)

// let bunnyJSON = '{ "name": "Lucy", "age": 9, "isHappy": true }';
// let bunny = JSON.parse(bunnyJSON);
// console.log(bunny.name);

// COMPARISON OPERATOR
//Equal To
// let bunny_age = 3;
// let dog_age = 3;
// console.log(bunny_age == dog_age); // true

// Strict Equal To
// let bunny_age = 3;
// let dog_age = '3';
// console.log(bunny_age === dog_age); // false

// Not Equal To
// let bunny_age = 3;
// let dog_age = 4;
// console.log(bunny_age != dog_age); // true

// Strict Not Equal To
// let bunny_age = 3;
// let dog_age = 4;
// console.log(bunny_age !== dog_age); // true

// Greater Than
// let bunny_age = 3;
// let dog_age = 4;
// console.log(bunny_age > dog_age); // false

//Less Than
// let bunny_age = 3;
// let dog_age = 4;
// console.log(bunny_age < dog_age); // false

// Greater Than or Equal To
// let bunny_age = 3;
// let dog_age = 3;
// console.log(bunny_age >= dog_age); // true

// Less Than or Equal To
// let bunny_age = 3;
// let dog_age = 3;
// console.log(bunny_age <= dog_age); // true

// let bunnies = ["Lucy", "Tom", "Molly", "Bella"];
// let dogs = ["Billy", "Lora", "max",'Willy', 'Bingo'];

// if (bunnies >= dogs) {
//   console.log("there are more dogs in the console");
// } else if (dogs >= bunnies){
//   console.log('there are more bunnies in the console');
// }

// CONDITIONAL STATEMENTS
// check if bunny is healthy
// let bunny = 'healthy';
// if (bunny === 'healthy') {
//   console.log('Bunny is healthy');
// }

// IF ELSE STATEMENTS
// check if bunny is healthy
// let bunny = 'healthy';
// if (bunny === 'healthy') {
//   console.log('Bunny is healthy');
// } else {
//   console.log('Bunny is needs to see the vet');
// }

//IF ELSE IF STATEMENTS
// check if bunny is healthy
// let bunny = 'healthy';
// if (bunny === 'healthy') {
//   console.log('Bunny is healthy');
// } else if (bunny === 'sick') {
//   console.log('Bunny is needs to see the vet');
// } else {
//   console.log('Bunny health status unknown');
// }

//SWITCH STATEMENTS SYNTAX
// switch (expression) {
//   case x:
//     // code to be executed if expression === x
//     break;
//   case y:
//     // code to be executed if expression === y
//     break;
//   default:
//   // code to be executed if expression does not match any cases
// }

// check if bunny is healthy
// let bunny = 'healthy';
// switch (bunny) {
//   case 'healthy':
//     console.log('Bunny is healthy');
//     break;
//   case 'sick':
//     console.log('Bunny is needs to see the vet');
//     break;
//   default:
//     console.log('Bunny health status unknown');
// }

// TERNARY OPERATOR SYNTAX
// check if bunny is healthy
// let bunny = 'healthy';
// bunny === 'healthy'
//   ? console.log('Bunny is healthy')
//   : console.log('Bunny is needs to see the vet');

//EXERCISE
// let age = 20;
// age % 2 === 0
// ? console.log('the number is even')
// : console.log('number is odd');

// EXCEPTION HANDLING
// function sumBunnies(blackBunnies, whiteBunnies) {
//   if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
//     throw new Error('blackBunnies and whiteBunnies must be numbers');
//   }
//   var totalBunnies = blackBunnies + whiteBunnies;
//   return totalBunnies;
// }

// console.log(sumBunnies(10, 20));

// result: 30

// Try catch error
// function sumBunnies(blackBunnies, whiteBunnies) {
//   if (typeof blackBunnies !== 'number' || typeof whiteBunnies !== 'number') {
//     throw new Error('blackBunnies and whiteBunnies must be numbers');
//   }
//   var totalBunnies = blackBunnies + whiteBunnies;
//   return totalBunnies;
// }

// try {
//   sumBunnies(10, 20);
// } catch (error) {
//   console.log(error);
// }

//Class declaration
// class Bunny {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   speak() {
//     console.log(`My name is ${this.name}`);
//   }
// }

// Class Declaration with static method
// class Bunny {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//   speak() {
//     console.log(`My name is ${this.name}`);
//   }

//   static info() {
//     console.log('This is a bunny class');
//   }
// }

// PROMISES
// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve('Stuff worked');
//   } else {
//     reject('Error, it broke');
//   }
// });

// Promise with a then and catch method
// promises
// const getTodos_ = () => {
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response) => response.json())
//     // .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };

// getTodos_();

// Promise with async and await
// async await
// const getTodos = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();
//   //   console.log(data);
//   return data;
// };

// getTodos();

//REST-SPREAD OPERATORS
// Spread Operator
// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5, 6];
// console.log(arr2);

// Output: [1, 2, 3, 4, 5, 6]

// const bunnies = ['Peter', 'John', 'Paul'];
// const bunnies2 = [...bunnies, 'George', 'Ringo'];
// console.log(bunnies2);

// Output: ['Peter', 'John', 'Paul', 'George', 'Ringo']

// Rest Operator
// const highestNumber = (...args) => {
//   //the rest operator is used to pass an indefinite number of arguments to a function

//   // return the highest number in the array
//   return Math.max(...args);
// };

// console.log(highestNumber(1, 2, 3, 4, 5, 6));

// let a = 446.657483;

// console.log(Math.round(a))
// console.log(Math.ceil(a))
// console.log(Math.floor(a))
// console.log(Math.random(a))
// console.log(Math.sin(a))

// Template Literals
// let bunny_name = 'Peter';
// let bunny_color = 'white';
// // old way
// console.log(
//   "My bunny's name is " + bunny_name + ' and his color is ' + bunny_color
// );

// // new way
// console.log(`My bunny's name is ${bunny_name} and his color is ${bunny_color}`);

//CALCULATOR
// calculator example

// const calculator = {
//   add: function (x, y) {
//     return x + y;
//   },

//   subtract: function (x, y) {
//     return x - y;
//   },

//   multiply: function (x, y) {
//     return x * y;
//   },

//   divide: function (x, y) {
//     return x / y;
//   },

//   power: function (x, y) {
//     return x ** x, y ** y ;
//   },

//   square: function (x) {
//     return x * x;
//   },

//   cube: function (x) {
//     return x ** 3;
//   },

//   squareRoot: function (x) {
//     return Math.sqrt(x);
//   },

//   cubeRoot: function (x) {
//     return Math.cbrt(x);
//   },
// };

// console.log(calculator.add(2, 3));
// console.log(calculator.subtract(2, 3));
// console.log(calculator.multiply(2, 3));
// console.log(calculator.divide(2, 3));
// console.log(calculator.power(2, 3));
// console.log(calculator.square(2));
// console.log(calculator.cube(2));
// console.log(calculator.squareRoot(2));
// console.log(calculator.cubeRoot(2));

//HIGHER ORDER FUNCTIONS IN JAVASCRIPT
//Reduce method
// bunnies
// const bunnies = [
//   { name: 'Peter', color: 'white' },
//   { name: 'John', color: 'black' },
//   { name: 'Paul', color: 'white' },
//   { name: 'George', color: 'black' },
//   { name: 'Ringo', color: 'white' },
// ];

// // reduce method
// const whiteBunnies = bunnies.reduce((acc, bunny) => {
//   //
//   if (bunny.color === 'white') {
//     acc.push(bunny);
//   }
//   return acc;
// }, []);

// console.log(whiteBunnies);

//Map method
// bunnies
// const bunnies = [
//   { name: 'Peter', color: 'white' },
//   { name: 'John', color: 'black' },
//   { name: 'Paul', color: 'white' },
//   { name: 'George', color: 'black' },
//   { name: 'Ringo', color: 'white' },
// ];

// // map method
// const bunnyNames = bunnies.map((bunny) => {
//   return bunny.name;
// });

// console.log(bunnyNames);

//Fliter method
// bunnies
// const bunnies = [
//   { name: 'Peter', color: 'white' },
//   { name: 'John', color: 'black' },
//   { name: 'Paul', color: 'white' },
//   { name: 'George', color: 'black' },
//   { name: 'Ringo', color: 'white' },
// ];

// // filter method
// const whiteBunnies = bunnies.filter((bunny) => {
//   return bunny.color === 'white';
// });

// console.log(whiteBunnies);

//ForEach method
// bunnies
// const bunnies = [
//   { name: 'Peter', color: 'white' },
//   { name: 'John', color: 'black' },
//   { name: 'Paul', color: 'white' },
//   { name: 'George', color: 'black' },
//   { name: 'Ringo', color: 'white' },
// ];

// // forEach method
// bunnies.forEach((bunny) => {
//   console.log(bunny.name);
// });

//find method
// bunnies
// const bunnies = [
//   { name: 'Peter', color: 'white' },
//   { name: 'John', color: 'black' },
//   { name: 'Paul', color: 'white' },
//   { name: 'George', color: 'black' },
//   { name: 'Ringo', color: 'white' },
// ];

// // find method
// const whiteBunny = bunnies.find((bunny) => {
//   return bunny.color === 'red';
// });

// console.log(whiteBunny);

// Destructuring 
// Array destructuring
//const bunnies = ['Lucy', 'Tom', 'Molly'];

// Destructure the first item in the array
//const [firstBunny] = bunnies;

// Destructure the second and third items in the array
//const [secondBunny, thirdBunny] = bunnies;

// Destructure the first and third items in the array
//const [firstBunny, , thirdBunny] = bunnies;

//console.log(firstBunny); // Output: Lucy

//object destructuring
// const bunny = {
//   name: 'Lucy',
//   age: 3,
//   isHappy: true,
// };

// Destructure the name property
//const { name } = bunny;

// Destructure the name and age properties
//const { name, age } = bunny;

//console.log(name); // Output: Lucy
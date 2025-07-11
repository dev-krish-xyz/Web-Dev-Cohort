let team = ["rohit", "virat", "rahul", "gill", "bumrah"];
console.log(team[2]);

console.log(team.reverse()); // reverse a array

team[2] = "jaiswal"; // replaces item at index 2
console.log(team);

team.push("siraj"); // adds a element to the end of the array
console.log(team);

team.pop(); // deletes or displays the end element of the array
console.log(team);
console.log(team.pop());

team.unshift("dhawan"); // adds a element at the start of the array
console.log(team);

team.shift(); // deletes the first element of the array
console.log(team);

let num = [2, 3, 4]; // returns a new array by applying functions to each element
let cubed = num.map((num) => num * num * num); // transform array
console.log(cubed);

let nums = [12, 25, 28, 23, 45, 40]; // returns a new array with matching condition
let even = nums.filter((nums) => nums % 2 === 0);
console.log(even);

console.log(nums.slice(1, 4)); // shallow copys the portion of the array

let result = nums.find((nums) => nums > 10); // returns the first element that matches a condition
console.log(result);

let colors = ["red", "green", "blue"]; // defines a function for each element
colors.forEach((color) => console.log(color));

console.log(colors.includes("green")); // checks a value in the array and returns boolean value
console.log(colors.includes("white"));

console.log(colors.indexOf("green")); // returns the index of the element

// splice()

let computers = ["acer", "hp", "lenovo", "asus", "msi"];

let favpc = computers.splice(1, 2); // delete items with perticular index
console.log(favpc);
console.log(computers);

computers.splice(1, 2, "dell", "samsung", "mac"); // replaced with removing
// insert at index 1 and delete 2 items
console.log(computers);

computers.splice(1, 0, "apple"); // insert at any index
// insert at index 1 and delete 0 items
console.log(computers);

computers.splice(2, 1, "nothing"); // replace items
// insert at index 2 and delete 1 item to replace
console.log(computers);

computers.splice(3); // removes all the items from the index to the end
console.log(computers);

computers.splice(-2, 1); // removes the second last element on the list
console.log(computers);

// reduce()

let scores = [1, 2, 3, 4, 5];
let add = scores.reduce((acc, curr) => acc + curr, 0); // accumulation + current
console.log(add);

// finding the maximum value usig the reduce method
let max = scores.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log(max);

// acc = accumulator which stores the result
// curr = current value which updates in each iteration

let multiplied = scores.reduce((acc, curr) => acc * curr, 1); // multiplies all the elements in the array
console.log(multiplied);

// sort()

let sorting = [10, 5, 20, 32];
let sorted = sorting.sort((a, b) => a - b);
console.log(sorted);

let sortedreverse = sorting.sort((a, b) => b - a);
console.log(sortedreverse);

// concat()

let arr1 = ["gaming", "windows"];
let arr2 = ["coding", "mac"];
let concatanation = arr1.concat(arr2); // used for concantation of 2 arrays
console.log(concatanation);

// set()

let duplicated = [1, 4, 6, 4, 6, 3]; // used to remove the duplicated items in a array
let unique = [...new Set(duplicated)];
console.log(unique);

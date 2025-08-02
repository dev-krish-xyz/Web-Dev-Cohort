let n = 20; // Number data type
let y = "kumar"; // String type
let qs = true; // Boolean type
let nothing = null; // Null type
let undefin; // Undefined type
let sym = Symbol(); // Symbol type

// these are the userdefined data types called object
let liquors = ["cofee", "chai", "drinks", 67, 35];
console.log(liquors); // array type

let team = new Array("virat", "rohit", "rahul", "gill"); // another type of defining array

console.log(liquors[0], liquors[2]); // printing array elements
liquors[1] = "tea"; // changing the default value
console.log(liquors[1]);

let skills = [];
let profile = {
  name: "k behera",
  job: "programmer", // key - value pair
  score: 20,
  company: " Google",
  skills: ["java", "cpp", "react"], // aray inside object
}; // object type

console.log(profile);
console.log(profile.name, profile.score); // accessing elements of the object

console.log(typeof profile); // object
console.log(typeof liquors); // object

// symbol and bigint are other type of data types

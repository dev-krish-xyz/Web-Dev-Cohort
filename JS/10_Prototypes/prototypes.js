Array.prototype.kumar = function () {
  console.log("kumar is available");
}; // created a custom function inside the array prototype
const arr = [1, 2, 3];
arr.kumar(); // user defined function call

Object.prototype.piyush = function () {
  console.log("piyush is available");
}; // defining a function inside the object prototype

let obj = {
  x: 1,
};
obj.piyush();  // calling the user defined function 

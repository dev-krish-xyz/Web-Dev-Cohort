// write a function which converts a string to number

function stringToNumber(input) {
  let num = Number(input);
  return num;
}
console.log(stringToNumber("check"));
console.log(stringToNumber("123"));

// function to reverse the boolean value of the entity

function revBoolean(input) {
  return !Boolean(input);
}
console.log(revBoolean(123));
console.log(revBoolean(""));

// function to check the type of the value

function whatAmI(input) {
  return "i am " + typeof input + " type";
}
console.log(whatAmI("what"));
console.log(whatAmI(123));
console.log(whatAmI([]));

// function to check is it truthy or falsy value

function checkBoolValue(input) {
  return "i am " + Boolean(input);
}
console.log(checkBoolValue("what"));

// function which only returns numbers in the array

function filterNum(arr) {
  let num = arr.filter((arr) => typeof arr === "number");
  return num;
}
let size = [20, "ramesh", 40, "hari", 60, "kiran"];
console.log(filterNum(size));

//  function to reverse an array

function revArray(arr) {
  return arr.reverse();
}
let team = [1, 3, 4, 6];
console.log(revArray(team));

// function which returns the maximum number in the array

function returnMax(arr) {
  return arr.reduce((acc, curr) => (acc > curr ? acc : curr));
}
let bats = ["bas", 20, 30, 40];
console.log(returnMax(bats));

// function to remove duplicates from an array

// method 1
function removeDuplicate(arr) {
  return arr.filter((item,index) => arr.indexOf(item) === index);
}
let nums = [2, 4, 5, 4, 1, 4];
console.log(removeDuplicate(nums));

// method2
function removeDup(arr){
    return [...new Set(arr)];
}
let narr = [1,5,7,5,5,7,9];
console.log(removeDup(narr));

// function to flatten a nested array

function flatten(arr){
    return arr.flat(Infinity);  // infinity means flatten all the deep levels
}
let arn = [ [1,3], [3,5,6], [[13,24],16, 27]];
console.log(flatten(arn));



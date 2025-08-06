console.log('your age is', age);  // age is not defined but its stored in the memory phase and initialized to undefined
var age = 20;  // now the value of the age is assigned with 20
console.log('your age is', age); // so we find the age is 20
greet();
function greet (){
    console.log('hello there');
}

// newfunction();  // this wont called since the newfunction is a variable and its first initialized to undefined
var newfunction = function (){
    console.log('this is a new function');
}

newfunction();
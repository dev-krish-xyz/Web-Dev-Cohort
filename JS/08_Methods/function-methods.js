// function.call(thisArg, arg1, arg2, arg3....) : accepts arguments separately
function greet(){
    console.log(`hello: ${this.name}`);
}
const person = {name: 'vikash'};
greet.call(person);

// function.apply(thisArg, [argsArray]): arguments are passed as an array

function cricketer (role, location){
    console.log(`${this.name} is a ${role} from ${location}`);
}
const name = {name: 'Rohit Sharma'};
cricketer.apply(name,['Batsman','india']);

// function.toString(): returns string representaion of the source code of the function
function add(a,b){
    return a+b;
}
console.log(add.toString());

// calling a function and setting its context from another function

let person1 = {
    name: 'krishna',
    callhim :function (){
        console.log(`hello ${this.name}`);
    }
}
let person2 = {
    name : 'harish'
}
person1.callhim.call(person2);  // the callhim function from the person1 object taking the person2 as a parameter, basicallly setting person2 is the context for the callhim function


// using bind
const bindFunction = person1.callhim.bind(person2);  // bind() retuns a new function with the updated argument you have passed, storing that function into a variable called bindFunction

console.log(bindFunction);
bindFunction(); // calling the bindFuntion
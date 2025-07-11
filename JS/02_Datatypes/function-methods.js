// function.call(thisArg, arg1, arg2, arg3....)
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

// function.toString(): returns string represntaion of the source code of the function

function add(a,b){
    return a+b;
}
console.log(add.toString());
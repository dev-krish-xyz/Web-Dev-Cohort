// for in loop : usefull in iterating through the object keys and its values.
// not recomended for arrays

const obj = {
    name: 'kumar',
    age: 22,
    class: 'MCA'
}
for (let key in obj){  
    console.log(key, obj[key]);
}

// for of loop: usefull in iterating over the array for its values


let arr = [3,5,6,7,9];  // iterating over the array
for (let value of arr){
    console.log(value);
}
// for in loop no prefered in array iteration since it prints the custom properties of the array which is not expected 
let arr2 = [10,20,30];
arr.custom = 'not expected';
for( let index in arr){
    console.log(index); // custom was not expected in output
}


let name = 'sudarshan';  // iterating over the string
for(let char of name){
    console.log(char);
}
// Object is literally the father of all all in JS, the parent/base class of all the data types in JS is OBJECT itself.

// why everything in JS is a object ?
// prototype chaining or prototype inheritance 
let arr = [1,2,3];
console.log(arr.__proto__); // Array.prototype
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__.__proto__.__proto__); // no further inheritance

let str = "xyz";
console.log(str.__proto__); // String.prototype
console.log(str.__proto__.__proto__); // Object.prototype
console.log(str.__proto__.__proto__.__proto__); // no further inheritance

let obj = {num:123, square: 2};

console.log(obj.__proto__); // Object.prototype
console.log(obj.__proto__.__proto__); // no further inheritance

let num = 123;

console.log(num.__proto__); // Number.prototype
console.log(num.__proto__.__proto__); // Object.prototype
console.log(num.__proto__.__proto__.__proto__); // no further inheritance

// modern syntax

console.log(Object.getPrototypeOf(arr) === Array.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(arr)) === Object.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(arr))));

console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj)) === null);

console.log(Object.getPrototypeOf(str) === String.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(str)) === Object.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(str)))=== null);

console.log(Object.getPrototypeOf(num) === Number.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(num)) === Object.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(num))) === null);

// manual inheritance

class Name {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

class Secname {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

const n1 = new Name("krishna", "rapper");
console.log(n1.getFullname());
const n2 = new Secname("sedhee", "maut");

console.log(n2.getFullname()); // not accessible though it is not defined inside the class

n2.__proto__ = n1; // prototype inheritance, now the __proto__ of the n2 will contains the referece to the n1
//console.log(n2.getFullname()); // now n2 can access the properties of Name class through the prototypal inheritance

// inheritance using keyword

class Animal {
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(`i am a ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(breed){
        
    }
}
// Object.getPrototype()

const arr = [1,3,4];
console.log(Object.getPrototypeOf(arr) === Array.prototype);

// Object.create(proto)
// Object.setPrototypeOf(obj,proto) -> slower not reccomended

const animal = { eats: true};
const dog = Object.create(animal);  // dog.__proto__ = animal.prototype
console.log(dog.eats);
console.log(Object.getPrototypeOf(dog) === animal);

// protoObj.isPrototypeOf(obj): checks wheather the protoObj is the protoype of obj or not

const grandParent = {};
const parent = Object.create(grandParent);
const child = Object.create(parent);

console.log(grandParent.isPrototypeOf(parent));
console.log(parent.isPrototypeOf(child));
console.log(child.isPrototypeOf(parent));
console.log(child.isPrototypeOf(grandParent));


// hasOwnProperty() : Returns true if the object has the property directly (not via prototype).

const student = {
    name: 'ramesh',
    color: 'black'
}
const worker = Object.create(student);
worker.type = 'fulltime';
console.log(worker.hasOwnProperty('name'));
console.log(worker.hasOwnProperty('type'));

// instanceof: follows the prototype chain and matches constructor.prototype, only works with the objects which are created by the constructor inside a function or class.

function teacher (name){
    this.name = name;
}
const mathteacher = new teacher(); // object created using constructor function
console.log(mathteacher instanceof teacher );

// important notice

const birds = {};
const crow = Object.create(birds);

console.log(crow instanceof Object);           // true
console.log(birds.isPrototypeOf(crow));       // true
// console.log(crow instanceof birds);    // false: instanceof will not work a object created using another object

//If you create an object using Object.create(proto), it won't work with instanceof unless proto is Constructor.prototype:

// toString() : string representation of the object

const obj = {key: 1, value:20};
console.log(obj.toString(obj));
const arr2 = [2,4];
console.log(arr2.toString());
const num = 20;
console.log(num.toString());

// for accurate type checking 

console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call('okay'));
console.log(Object.prototype.toString.call(123));

// valueof() :creates a wrapper object around the primitive data
// wrapper object: JavaScript automatically wraps primitive values (string, number, boolean, symbol, bigint) in their respective object types when you try to access methods on them. string -> String, array -> Array

const num1 = new Number(5);
console.log(num1.valueOf());  // 
console.log(typeof num1);        // "object"
console.log(num1 == 5);          // true  (because of type coercion)
console.log(num1 === 5);         // false (strict comparison fails)


// obj.propertyIsEnumerable('property name') : enumerable means wheather the property is iterable through the loop or not

const enobj = {x:10};
console.log(enobj.propertyIsEnumerable('x'));
console.log(enobj.propertyIsEnumerable('toString'));






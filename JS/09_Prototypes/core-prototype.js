// Array.prototype; // Array is a base class and when we define a array that will be a object of the base class Array.

// Array contains a object called 'prototype' inside it which contains all the functions and methods of the Array class.

// if we create a class by ourself and define methods inside it then all the methods will be stored in the prototype object of that class.

class Bike {
  constructor(brand, color, capacity, hp) {
    this.brand = brand;
    this.color = color;
    this.capacity = capacity;
    this.hp = hp;
  }
  getHP(){
    return this.hp;
  }
  getColor(){
    return this.color;
  }
}
console.log(Bike.prototype);
// JS creates a internal object called prototype and stores all the methods in it.

// Any base class like Array, Object, String, Custom class insert a object called ' __proto__ ' when a object of that base clss is created.

// __proto__ is nothing but the copy of the ' prototype ' object of the base class which will contain all the methods defined inside the class.

const hornet = new Bike('Honda Motors','Mate Black','400CC','200HP' );
console.log(hornet);
console.log(hornet.__proto__);

// we can see the __proto__ object holds all the methods of the baseclass which were in the prototype object.

Bike.prototype = hornet.__proto__; // final conclusion

console.log(hornet.__proto__.__proto__);
console.log(Bike.__proto__.__proto__.__proto__);
// the final __proto__ of any class object points to Object thats why everything in java script are considered as object

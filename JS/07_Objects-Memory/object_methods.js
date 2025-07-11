const bike = {
  color: "white",
  engine: "BS-6",
  volume: "600CC",
  topspeed: 120,
  RPM: 10000,
  torque: "450nm",
  weight: "150 kg",
};

// methods

bike.wheel = "radial"; // adds a new prperty to the bike object
console.log(bike);

delete bike.torque; // deletes a property from the bike object
console.log(bike);

console.log("torque" in bike); // checks wheather the property exist or not

for (let value in bike) {
  // to print all the values in the object
  console.log(`value : ${bike[value]}`);
  console.log();
}

// Baseclass Object methods

// Obeject.create(proto) : set the dog prototype to animal

const animal = {
  barks: true,
};
const dog = Object.create(animal);
dog.color = "white";
console.log(dog.color);
console.log(dog.barks);

// Object.assign(target, ...sources) : assigns values from the source to the target

const target = { x: 10 };
const source = { y: 20 };
Object.assign(target, source);
console.log(target);

// Object.keys(obj)

const kobj = { x: 10, y: 30 };
console.log(Object.keys(kobj));

// Object.values(obj)

const vobj = { x: 10, y: 30 };
console.log(Object.values(vobj));

// Object.entries(obj)

const eobj = { x: 10, y: 30 };
console.log(Object.entries(eobj));

// Object.fromentries(iterable): Converts a list of key-value pairs back into an object.

const entries = [
  ["a", 1],
  ["b", 2],
];
const obj2 = Object.fromEntries(entries);
console.log(obj2);

// Object.freeze(obj): makes a object immutable( no adding, removing and changing of the properties)

const user = { name: "Alice" };
Object.freeze(user);
user.name = "Bob"; // Won't change
console.log(user.name); // Alice

// Object.seal(obj): prevents adding and removing but allows modifying the existing ones

const car = { brand: "Ford" };
Object.seal(car);
car.brand = "Toyota"; // Allowed
delete car.brand; // Not allowed
console.log(car); // { brand: 'Toyota' }

// Object.is(a,b): Checks if two values are the same (like ===, but correctly handles NaN).

console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false

// Object.getOwnPropetyNames(obj): Returns all property names (including non-enumerable)

const obj = Object.create(
  {},
  {
    hidden: {
      value: 42,
      enumerable: false,
    },
  }
);
console.log(Object.getOwnPropertyNames(obj)); // ["hidden"]

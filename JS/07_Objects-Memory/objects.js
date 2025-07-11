const person = {
  firstname: "kalpataru",
  lastname: "behera",
  rollno: 20,
  hobbies: ["cricket", "coding", "gym"],
  adress: {
    state: "odisha",
    area: "soro",
    pincode: 76507,
    vilage: "bpur",
  },
  married: false,
  'clg type': 'autonomous' 
};
console.log(person.hobbies); // accessing the elements of the object
console.log(person.adress.pincode);
console.log(person.rollno);
console.log(person['clg type']); 



// copying one object to another 

// SHALLOW copy by using ... operator : which means if we add a new object or array inside a p1 object then it will copy its adress which is a problem. spread operator only copies the level 1 items. it doesnt works on the inner objects.

let p1 = {
    fname: 'ayush',
    lname: 'chand'
}
let p2 = {
    ...p1  // spreading of object p1 inside object p2 using spread operator
}  
p2.fname = 'ramesh';
p2.lname = 'mohapatra'
console.log(p1);
console.log(p2);

// DEEP Copy: We have to create a function which converts objects into string because string can be copied through pass by value rather than pass by reference, further string can be converted into a object

const p1string = JSON.stringify(p1);  // converts object in to string
console.log(p1string);
let p2 = JSON.parse(p1string); // converts string in to object
console.log(p2);








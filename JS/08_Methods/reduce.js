// finding greates element of the array
const arr = [1, 3,4,45, 60, 60, 3,50];
const greatest = arr.reduce((acc, crr) => 
 acc > crr ? acc : crr   //  you dont have to return in this type of case
)
console.log(greatest);

// the initial value of the accumulator will the first element of the array if it is not given explicitly

// sum of the array elements

const sum = arr.reduce((acc, crr)=> 
acc = acc + crr
)
console.log(sum);

// count occurrance of the items 
const occurrance = arr.reduce((acc,curr) => 
{
    let flag = 0;
    if(acc === curr){
        flag ++;
    }
    return flag;
}
)
console.log(occurrance);

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'orange', 'banana'];

const count = fruits.reduce((acc, fruit) => {

    acc[fruit] = (acc[fruit] || 0) +1;
    return acc;
}, {});   // passing a empty object at start to get a object type value in the end
console.log(count);



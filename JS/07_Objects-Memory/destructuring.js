const team = {
    batsman: 'rohit sharma',
    bowler: 'jasprit bumrah',
    allrounder: ' hardik pandya'
}

const {batsman,bowler} = team;  // creates new variables and if the variable name matches with the objects keys, then variables are assigned with that key's value.
console.log(batsman);
console.log(bowler);

const fruits = ['kiwi', 'banana', 'coconut'];
const [first, second] = fruits;  // this is called aray destructuring
console.log(first,second);

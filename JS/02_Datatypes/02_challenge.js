// sum of n natural numbers

function printSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(printSum(5));

// multiplication table

function table(n) {
  for (let i = 1; i <= n; i++) {
    for (let k = 1; k <= 10; k++) {
      console.log(`${i} * ${k} = ` + i * k);
    }
  }
}
table(3);

// count vowels in the string

function countVowel(str) {
  //Aerospace
  let flag = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.includes("a" || "A")) {
      flag++;
    } else if (str.includes("e" || "E")) {
      flag++;
    } else if (str.includes("i" || "I")) {
      flag++;
    } else if (str.includes("o" || "O")) {
      flag++;
    } else if (str.includes("u" || "U")) {
      flag++;
    } else flag = flag;
  }
  return flag;
}
let str1 = "Aerospace";
console.log(countVowel(str1));

function cntVowel(str) {
  let count = 0;
  const vowel = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let str2 ='Aerodynamics'
console.log(cntVowel(str2));


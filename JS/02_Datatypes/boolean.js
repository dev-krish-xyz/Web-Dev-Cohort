// falsy values
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean("")); // empty string
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(0n)); // BigInt 0

// truthy values

console.log(Boolean({}));  // empty object
console.log(Boolean('what')); // string with values
console.log(Boolean([])); // empty array
console.log(Boolean(23)); // non-zero number
console.log(Boolean(Infinity)); // infinity value
console.log(Boolean(function(){})); // defined function




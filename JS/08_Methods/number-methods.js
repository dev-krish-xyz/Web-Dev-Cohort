// Number.isFinite()
const num = 40;
console.log(Number.isFinite(num));
console.log(Number.isFinite(Infinity));

// Number.isInteger()
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.6));
console.log(Number.isInteger('str'));

// Number.isNaN()
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN('abc'));     // false
console.log(isNaN('abc'));            // true (loose check)

// Number.parseInt(): converts a string in to integer, stops at the first invalid character
console.log(Number.parseInt('123abc'));
console.log(Number.parseInt('abc123')); 

// Number.parseFloat()
console.log(Number.parseFloat('3.14abc'));
console.log(Number.parseFloat('abc3.14'));

// Number.toFixed(digits)
const fixnum = 23.4674;
console.log(fixnum.toFixed(2));
console.log(fixnum.toFixed(0)); // rounded of

// Number.toExponential(fractionDigits): returns the exponential notation of the any number
let num3 = 456;
console.log(num.toExponential(3));

// Number.toPrecision(digits): Formats the number to the specified number of significant digits.
let num4 = 123.456;
console.log(num4.toPrecision(4)); // "123.5"
console.log(num4.toPrecision(2)); // "1.2e+2"

// Number(value): converts a value to a number
console.log(Number("123"));   // 123
console.log(Number("123abc")); // NaN

// Number.prototype.valueOf(): Returns the primitive value of a Number object.
let numObj = new Number(42);
console.log(numObj.valueOf()); // 42



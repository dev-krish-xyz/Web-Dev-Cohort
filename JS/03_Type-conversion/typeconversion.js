// Type conversion: implicit (type coercion)

console.log("5" + 1);   // "51"    → string + number = string
console.log("5" - 1);   // 4       → string is converted to number
console.log(true + 1);  // 2       → true is 1
console.log(false == 0);    // true    → false becomes 0
console.log(null == undefined); // true

// Conversion Rules: String conversion with " + " operator

console.log(1+'2');  // concantinated and converted to string
console.log(true + 'test');  // all converted to string


// Number conversions : happens in arithmetic( -, *, /) $ comparision( >, <, ==) operators

console.log(5 - '3');
console.log(5 * 'ram');     // numeric value of 'ram' = NaN
console.log(10* '12');      // Numeric value of '12' = 12
console.log(100 / '20');
console.log(null + 1);       // null = 0 (numberic value)
console.log(undefined * 1);   // undefined = NaN (numeric value)
console.log("" * 1);        // "" = 0 ( numeric value )
console.log(true * 5);        // true = 1
console.log(false * 24)     // false = 0


// Explicit  Conversion

// String conversion
console.log(String(123));  // method 1
console.log((123).toString());  // method 2

// Number conversion

console.log(Number('123'));
console.log(parseInt('13.45'));
console.log(parseFloat(12.45));
console.log(+"");  // + operator also used in number conversions
console.log(+null);
console.log(+undefined);

console.log([] == true);  // weird example
console.log(undefined == null);







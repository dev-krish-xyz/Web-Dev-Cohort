// length

const str = 'banrakash';
console.log(str.length);

// charAt(index)
console.log(str.charAt(2));

// at(index): supports negative indexing
console.log(str.at(-2));

// charCodeat(index) : returns ASCII code
console.log(str.charCodeAt(2));

// toUpperCase() toLowerCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// trim(), trimStart(), trimEnd(): deletes the white spaces
const trimstr = " bhusan ";
console.log(trimstr.trim());
console.log(trimstr.trimStart());
console.log(trimstr.trimEnd());

// slice(start, end)

const str2 = "pradhanji";
console.log(str2.slice(4));
console.log(str2.slice(2,6));

// substring(start,end): smiliar to slice but cant accept negative index
console.log(str2.substring(2,0))

// substr(start, length): extracts substring by length
console.log(str2.substr(2,4))

// indexOf(substring)
const str3 = "vinod";
console.log(str3.indexOf('n'));

// lastIndexOf(substring)
console.log(str3.lastIndexOf('d'));

// includes()
console.log(str3.includes('in'));

// startsWith(), endsWith()
console.log(str3.startsWith('vi'));
console.log(str3.endsWith('od'));

// replace(search, replacement): replace first match
const str4 = "sachivji";
console.log(str4.replace('a', 'u'));

// reaplaceAll(search, reaplacement): replace all matches
console.log(str4.replaceAll('i','a'));

// repeat()
console.log(str4.repeat(3));

// padStart(length, padStr), padEnd(length, Padstr)
const str5 = "prahladcha";
console.log(str5.padStart(3,'0'));
console.log("5".padStart(4,"0"));
console.log("5".padEnd(4,'-'));

// concat()
const strone = 'sachivji';
const strtwo = 'rinki';
console.log(strone.concat(strtwo));


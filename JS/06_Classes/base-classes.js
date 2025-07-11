const obj = new Object({key: 1});

const arr = new Array(2,3,4);

const str = new String('ayush');

const num = new Number(34);

const func = new Function((a,b) => a+b);

const bool = new Boolean(false);

const date = new Date();

const regex = new RegExp("\\d+");

const err = new Error('this is a error');
// subclasses : SyntaxError, RangeError, TypeError, ReferenceError

const map = new Map();
const set = new Set();

const p = new Promise((resolve, reject) => {
  resolve("done");
});

const sym = Symbol("id");
console.log(sym.description);

const big = BigInt(12345678901234567890n);



if (!Array.prototype.fill) {
  // fallback - polyfill - backup function
  Array.prototype.fill = function () {};
}

// creating a polyfill of forEach()
// signature of function : no return , parameters: value and index as input

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFN) {
    const orgArray = this;
    for (let i = 0; i < orgArray.length; i++) {
      userFN(orgArray[i], i);
    }
  };
}

const arr = [1, 2, 3, 4, 5, 6];
arr.forEach((value, index) =>
  console.log(`value at index ${index} is ${value}`)
);
// creating a polyfill of map()
// signature: returns a new array, takes funcion as input,

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const newarr = [];
    for (let i = 0; i < this.length; i++) {
      newarr.push(callback(this[i]));
    }
    return newarr;
  };
}
let arr2 = [2, 3, 4];
let narr = arr2.myMap((a) => a * 3);
console.log(narr);

// creating a polyfill for filter()
// signatures: creates a new array, condition check(true or false)

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    const newarr = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        newarr.push(this[i]);
      }
    }
    return newarr;
  };
}

let filarr = [20, 45, 12, 66, 33];
console.log(filarr.myFilter((value) => value % 2 === 0));

// creating a polyfill for reduce()
// signatures: returns a number, takes function as a input, paremeters: acc and curr, acc stores the result and curr represents the current value

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialvalue) {
    if (typeof callback !== "function") {
      throw new TypeError("callback is not a function");
    }
    let accumulator;
    let startIndex;
    if (initialvalue !== undefined) {
      accumulator = initialvalue;
      startIndex = 0;
    } else {
      if (this.length === 0) {
        throw new TypeError("reduce method is being used in a empty array");
      }
      accumulator = this[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        // in operator checks wheather the index is availble in the array or not, used to skip the holes in sparse arrays.
        accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
}
let redarr = [2, 4, 3, 6, 8];
console.log(redarr.myReduce((acc, curr) => acc * curr, 1));

//  includes()
// signature: returns a boolean value (true / false), takes a value as input

if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (searchElement) {
    if (this == null) {
      throw new TypeError(`The array shoudn't be null `);
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === searchElement) {
        return true;
      }
    }
    return false;
  };
}

let incarr = [10, 20, "harsh", "krishna"];
console.log(incarr.myIncludes());

const arrnew = Object(incarr);
console.log(arrnew);

//  flat()

if (!Array.prototype.myFlat) {
  Array.prototype.myFlat = function (depth) {
    const rtarr = [];
    if (this == null) {
      throw new TypeError("the array is null");
    }
    function flatten(array, currentDepth) {
      for (let i = 0; i < array.length; i++) {
        const value = array[i];
        if (Array.isArray(value) && currentDepth > 0) {
          flatten(value, currentDepth - 1);
        } else {
          rtarr.push(value);
        }
      }
    }

    flatten(this, depth);
    return rtarr;
  };
}

let flatarr = [10, [20, 30], [40, 50, 60]];
console.log(flatarr.myFlat(2));

// find()
// signature: returns the first element when mathes a condition

if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (callback) {
    let found;
    if (typeof callback !== "function") {
      throw new TypeError("callback is not a function");
    }
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i])) {
        found = [this[i], i];
        return found;
        break;
      }
    }
    return -1;
  };
}

let findarr = [25, 30, "ramesh", 60];
console.log(findarr.myFind((num) => num > 10));

// this is almost same as findIndex() which returns only the index
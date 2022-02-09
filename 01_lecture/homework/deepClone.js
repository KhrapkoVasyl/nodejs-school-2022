'use strict';

// 1. Write the clone function so that it can
// clone deeply the object passed as a parameter.

const deepClone = obj => {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  let newObj;
  if (Array.isArray(obj)) {
    newObj = [];
    for (const value of obj) {
      newObj.push(deepClone(value));
    }
  } else {
    newObj = {};
    const keys = Object.keys(obj);

    for (const key of keys) {
      newObj[key] = deepClone(obj[key]);
    }
  }
  return newObj;
};

const testObj = {
  ex1: {
    ex11: 'str1',
    ex12: 12,
  },
  ex2: {
    ex21: [1, '2', [3, 4]],
  },
  exMethodLog(value) {
    console.log(value);
  },
};

const newObj = deepClone(testObj);

console.log(newObj === testObj); // false
console.log(newObj.ex1 === testObj.ex1); // false
console.log(newObj.ex2 === testObj.ex2); // false
console.log(newObj.ex2.ex21 === testObj.ex2.ex21); // false
console.log(newObj.ex2.ex21[2] === testObj.ex2.ex21[2]); // false

'use strict';

// 1. Write the clone function so that it can
// clone deeply the object passed as a parameter.

const deepClone = (obj: object): object => JSON.parse(JSON.stringify(obj));

const testObj = {
  ex1: {
    ex11: 'str1',
    ex12: 12,
  },
  ex2: {
    ex21: [1, '2', [3, 4]],
  },
};

const newObj = deepClone(testObj);

console.log(newObj === testObj); // false
console.log((newObj as any).ex1 === testObj.ex1); // false
console.log((newObj as any).ex2 === testObj.ex2); // false
console.log((newObj as any).ex2.ex21 === testObj.ex2.ex21); // false
console.log((newObj as any).ex2.ex21[2] === testObj.ex2.ex21[2]); // false

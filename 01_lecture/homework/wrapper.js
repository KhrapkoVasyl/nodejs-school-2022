'use strict';

// 2. Write a function-wrapper, that will
// cache the result of any other function.

const generateKey = args => {
  return args.map(arg => `${arg.toString()}:${typeof arg}`).join('|');
};

const wrapper = fn => {
  const cache = new Object(null);
  return (...args) => {
    const key = generateKey(args);
    const value = cache[key];
    if (value) {
      // console.log('from cache'); // for tests
      return value;
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

//tests

const add = (a, b) => a + b;
const pow = (x, n) => (n === 1 ? x : x * pow(x, n - 1));

const mAdd = wrapper(add);
const mPow = wrapper(pow);

console.log(mAdd(5, 13)); // 18
console.log(mAdd(5, 13)); // 18 from cache
console.log(mAdd(2, 23)); // 25
console.log(mAdd(2, 23)); // 25 from cache

console.log(mPow(3, 15)); // 14348907
console.log(mPow(3, 15)); // 14348907 from cache

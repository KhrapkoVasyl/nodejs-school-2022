'use strict';

// 3. Create a function searchSerial, which takes two
// parameters: 1 - an array of string or numeric values,
// 2 - searched value. The function should return a
// number - maximum count of serial entries of the given value.

const searchSerial = (arr, value) => {
  let maxSeries = 0;
  let currentSeries = 0;

  for (const el of arr) {
    el === value ? currentSeries++ : (currentSeries = 0);
    if (currentSeries > maxSeries) maxSeries = currentSeries;
  }

  return maxSeries;
};

console.log(searchSerial([1, 1, 1, 2, 2, 2, 3, 1, 1, 3], 1)); // 3
console.log(searchSerial(['fizzbuzz', 'fizz', 'fizz', 'buzz', 'buzz'], 'fizz')); // 2
console.log(searchSerial([1, 1, 1], 2)); // 0
console.log(searchSerial([1, 1, 1, 2, 2, 2, 1, 1, 1, 1], 1)); // 4

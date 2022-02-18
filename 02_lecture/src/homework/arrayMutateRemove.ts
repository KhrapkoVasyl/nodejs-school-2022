// Write a function that accepts any kind of array and a predicate for array elements removing.
// Passed array must be mutated. All removed elements must be returned as array.
// All types must apply automatically (Template function).

const arrayMutateRemove = <Type>(
  array: Type[],
  predicateFunc: (element: Type) => boolean
): Type[] => {
  return array.reduce(
    (acc, currentElement, index) =>
      predicateFunc(currentElement) ? [...acc, array.splice(index, 1)[0]] : acc,
    [] as Type[]
  );
};

// tests

const testArray1: number[] = [1, 2, 3, 6, 7, 9];

const removedElements1 = arrayMutateRemove<number>(
  testArray1,
  (item: number): boolean => item % 2 === 0
);

console.log(testArray1); // [1, 3, 7, 9];
console.log(removedElements1); // [ 2, 6 ]

const testArray2: string[] = [
  'fizz',
  'fizzbuzz',
  'buzz',
  'fizz',
  'buzz',
  'buzz',
  'fizz',
  'fizzbuzz',
];

const removedElements2 = arrayMutateRemove<string>(
  testArray2,
  (item: string): boolean => item.startsWith('fizz')
);

console.log(testArray2); // [ 'buzz', 'buzz', 'buzz' ]
console.log(removedElements2); // [ 'fizz', 'fizzbuzz', 'fizz', 'fizz', 'fizzbuzz' ]

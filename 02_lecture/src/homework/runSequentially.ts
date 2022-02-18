// 1. Write a function that accepts any kind of array and an asynchronous callback,
// that is invoked on each array element sequentially.
// The result of invocation must be an array of callback results.
// All types must apply automatically (Template function).

const runSequentially = async <TArrayElement, TResult>(
  array: TArrayElement[],
  sequenceCallback: (elements: TArrayElement, index: number) => Promise<TResult>
): Promise<TResult[]> => {
  return array.reduce(async (promise, current, index) => {
    const acc = await promise;

    const result = await sequenceCallback(current, index);

    return [...acc, result];
  }, Promise.resolve([]) as Promise<TResult[]>);
};

// test

(async () => {
  const array: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  const results = await runSequentially<
    string,
    { item: string; index: number }
  >(array, (item: string, index: number) =>
    Promise.resolve({
      item,
      index,
    })
  );

  console.log(results); /* [ { item: 'one', index: 0 },
                             { item: 'two', index: 1 },
                             { item: 'three', index: 2 }
                             { item: 'four', index: 3 },
                             { item: 'five', index: 4 } */
})();

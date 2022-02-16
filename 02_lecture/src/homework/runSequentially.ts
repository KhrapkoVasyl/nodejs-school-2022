// 1. Write a function that accepts any kind of array and an asynchronous callback,
// that is invoked on each array element sequentially.
// The result of invocation must be an array of callback results.
// All types must apply automatically (Template function).

interface ResultInreface<T> {
  item: T;
  index: number;
}

async function runSequentially<Type>(
  array: Type[],
  callback: Function
): Promise<ResultInreface<Type>[]> {
  const callbackResults: ResultInreface<Type>[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    // console.log(`Start with item: ${item}; index: ${i}`); // for sequential execution test
    const result = await callback(item, i);
    // console.log(`End with item: ${item}; index: ${i}`); // for sequential execution test
    callbackResults.push(result);
  }
  return callbackResults;
}

// test

(async () => {
  const array: Array<string> = ['one', 'two', 'three', 'four', 'five'];

  const results = await runSequentially<string>(
    array,
    (item: string, index: number) =>
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

// 2. Write a function-wrapper, that will
// cache the result of any other function.

interface CacheInterface {
  [key: string]: unknown;
}

const generateKey = (args: Array<unknown>): string => {
  return args.map(arg => arg + `:${typeof arg}`).join('|');
};

const wrapper = (fn: Function): Function => {
  const cache: CacheInterface = {};
  return (...args: Array<unknown>) => {
    const key: string = generateKey(args);
    const value: unknown = cache[key];
    if (value) {
      // console.log('from cache'); // for tests
      return value;
    }
    const result: unknown = fn(...args);
    cache[key] = result;
    return result;
  };
};

//tests

const add = (a: number, b: number): number => a + b;
const pow = (x: number, n: number): number => (n === 1 ? x : x * pow(x, n - 1));

const mAdd = wrapper(add);
const mPow = wrapper(pow);

console.log(mAdd(5, 13)); // 18
console.log(mAdd(5, 13)); // 18 from cache
console.log(mAdd(2, 23)); // 25
console.log(mAdd(2, 23)); // 25 from cache

console.log(mPow(3, 15)); // 14348907
console.log(mPow(3, 15)); // 14348907 from cache

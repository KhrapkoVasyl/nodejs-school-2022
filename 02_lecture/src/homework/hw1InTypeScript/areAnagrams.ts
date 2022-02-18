// 0. Write function, which takes two strings,
// and returns true if they are anagrams of one another.

const areAnagrams = (str1: string, str2: string): boolean => {
  const sortedStr1Letters = str1
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  const sortedStr2Letters = str2
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return sortedStr1Letters === sortedStr2Letters;
};

console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('dormitory', ' dirty room ')); //true
console.log(areAnagrams('hello', 'world')); //false

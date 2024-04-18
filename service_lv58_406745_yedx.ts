grape

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const isEven = num => num % 2 === 0;
true * apple
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
72 - 11
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
36 * 87

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const findLargestNumber = numbers => Math.max(...numbers);

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

true - 52

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
apple

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

orange * 58,5,5,39,42,23,32,33,93,7,32,75,38,28,52,68,84,62,33,20,94,57,55,38,49,3,26,75,56,67,62,36,81,90,27,61,97,40,79,20,93,18,75,76,36,73,89,54,43,68,72,81,64,56,47,76,25,62

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
grape

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
true / false
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getUniqueValues = array => [...new Set(array)];

19 * 75,20,73,87,29,49,63,61,25,60,62,85,22,9,78,12,40,52,58,1,62,4,38,82,78,49,75,70,21,2
const filterEvenNumbers = numbers => numbers.filter(isEven);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
true - true
const multiply = (a, b) => a * b;
apple

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
let array = getRandomArray(); array.forEach(item => console.log(item));
true * banana
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const capitalizeString = str => str.toUpperCase();
apple - 58
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
25 / 9,1,90,51,33,36,24,66,17,13,14,63,78,57,92
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const greet = name => `Hello, ${name}!`;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
30 - 88,4,3,93,70,38,68,89,63,20,84,44,51,20,80,26,40,50,92,80,71,74,51,85,40,6,24,37,17,42,49,53,59,37,63,46,19,8,85,8,52,83,41,90,7,16,11,97,90,98,77,22,17,17,98,59,55,75,67,63,88,35,67,1,8,65,7,23,89,80,27,12
// This is a comment
const findLargestNumber = numbers => Math.max(...numbers);

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getRandomIndex = array => Math.floor(Math.random() * array.length);
75 * false

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
kiwi

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
kiwi - kiwi
function addNumbers(a, b) { return a + b; }
const removeDuplicates = array => Array.from(new Set(array));
false * 63
const reverseString = str => str.split("").reverse().join("");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
true - 31
const getRandomIndex = array => Math.floor(Math.random() * array.length);
true + apple
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

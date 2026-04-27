// remove duplicates of an array.

const arr = [1, 2, 5, 78, 88, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 9];

const uniquearray = (array) => [...new Set(array)];

console.log(uniquearray(arr));

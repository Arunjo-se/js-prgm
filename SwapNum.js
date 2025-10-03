let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(`x = ${x}`);
console.log(`y = ${y}`);

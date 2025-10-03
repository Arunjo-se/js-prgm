// infer type
// infer type means the typeScript will automatically infer the type of the variable based on the assigned value

let a = 123;
a = 456;
// a = 'str' // error
let b = "str";
b = "str2";
// b = 123 // error

let c = true;
c = false;
// Defining types (explicitly)
// Defining types explicitly means that we specify the type of the variable when we declare it.

let d: number;
d = 123;

let h: number = 4;
console.log(h);

let e: string;
e = "str";

let f: boolean;
f = true;
let g: any; // any type can be assigned to any value
g = 123;
g = "str";
g = true;
g = {}; // object
g = []; // array
g = null;

// array types
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["a", "b", "c"];
let arr3: boolean[] = [true, false, true];
let arr4: any[] = [1, "a", true, {}, []];
let arr5: Array<number> = [1, 2, 3]; // generic array type
let arr6: Array<string> = ["a", "b", "c"]; // generic array type
let arr7: Array<boolean> = [true, false, true]; // generic array type
let arr8: Array<any> = [1, "a", true, {}, []];
let arr9: (number | string)[] = [1, "a", 2, "b"]; // union type array
let arr10: Array<number | string> = [1, "a", 2, "b"]; // generic union type array
let arr11: [number, string, boolean] = [1, "a", true]; // tuple type
// tuple type means the array has a fixed number of elements with specific types

let arr12: [number, string][] = [
  [1, "a"],
  [2, "b"],
  [3, "c"],
]; // array of tuples
let arr13: Array<[number, string]> = [
  [1, "a"],
  [2, "b"],
  [3, "c"],
]; // generic array of tuples
let arr14: [number, string, boolean][] = [
  [1, "a", true],
  [2, "b", false],
  [3, "c", true],
]; // array of tuples
let arr15: Array<[number, string, boolean]> = [
  [1, "a", true],
  [2, "b", false],
  [3, "c", true],
]; // generic array of tuples
let arr16: [number, string, boolean, any][] = [
  [1, "a", true, {}],
  [2, "b", false, []],
  [3, "c", true, null],
]; // array of tuples with any type
let arr17: Array<[number, string, boolean, any]> = [
  [1, "a", true, {}],
  [2, "b", false, []],
  [3, "c", true, null],
]; // generic array of tuples with any type
//print to tuple array
console.log(arr17);

// object types
let obj1: { name: string; age: number } = { name: "John", age: 30 };
let obj2: { name: string; age: number; isStudent: boolean } = {
  name: "Jane",
  age: 25,
  isStudent: true,
};

// function types
let func1: (a: number, b: number) => number; //explain function type
// function type means the function takes two parameters of type number and returns a number
func1 = (a: number, b: number): number => {
  return a + b;
};
console.log(func1(1, 2));

let func2: (name: string) => void; // explain void type
// void type means the function does not return anything
func2 = (name: string): void => {
  console.log("Hello, " + name);
};  
func2("John");



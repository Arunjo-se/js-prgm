// infer type
// infer type means the typeScript will automatically infer the type of the variable based on the assigned value
var a = 123;
a = 456;
// a = 'str' // error
var b = "str";
b = "str2";
// b = 123 // error
var c = true;
c = false;
// Defining types (explicitly)
// Defining types explicitly means that we specify the type of the variable when we declare it.
var d;
d = 123;
var h = 4;
console.log(h);
var e;
e = "str";
var f;
f = true;
var g; // any type can be assigned to any value
g = 123;
g = "str";
g = true;
g = {}; // object
g = []; // array
g = null;
// array types
var arr1 = [1, 2, 3];
var arr2 = ["a", "b", "c"];
var arr3 = [true, false, true];
var arr4 = [1, "a", true, {}, []];
var arr5 = [1, 2, 3]; // generic array type
var arr6 = ["a", "b", "c"]; // generic array type
var arr7 = [true, false, true]; // generic array type
var arr8 = [1, "a", true, {}, []];
var arr9 = [1, "a", 2, "b"]; // union type array
var arr10 = [1, "a", 2, "b"]; // generic union type array
var arr11 = [1, "a", true]; // tuple type
// tuple type means the array has a fixed number of elements with specific types
var arr12 = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
]; // array of tuples
var arr13 = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
]; // generic array of tuples
var arr14 = [
    [1, "a", true],
    [2, "b", false],
    [3, "c", true],
]; // array of tuples
var arr15 = [
    [1, "a", true],
    [2, "b", false],
    [3, "c", true],
]; // generic array of tuples
var arr16 = [
    [1, "a", true, {}],
    [2, "b", false, []],
    [3, "c", true, null],
]; // array of tuples with any type
var arr17 = [
    [1, "a", true, {}],
    [2, "b", false, []],
    [3, "c", true, null],
]; // generic array of tuples with any type
//print to tuple array
console.log(arr17);
// object types
var obj1 = { name: "John", age: 30 };
var obj2 = {
    name: "Jane",
    age: 25,
    isStudent: true,
};
// function types
var func1; //explain function type
// function type means the function takes two parameters of type number and returns a number
func1 = function (a, b) {
    return a + b;
};
console.log(func1(1, 2));
var func2; // explain void type
// void type means the function does not return anything
func2 = function (name) {
    console.log("Hello, " + name);
};
func2("John");
// union types
var union1;
union1 = 123;
union1 = "str";
// union1 = true // error
// promise types
var promise1;
promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(123);
    }, 1000);
});
promise1.then(function (data) {
    console.log(data);
});

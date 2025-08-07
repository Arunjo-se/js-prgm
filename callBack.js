/* What is a Callback Function in JavaScript?

A callback function is a function that is passed as an argument to another function, 
and it is executed later, usually after some operation has completed.

*/
function greet(name, callback) {
    setTimeout(() => {
  console.log(`Hello, ${name}`);
  callback(); // invoke the callback
    },1000);
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Arun", sayGoodbye);

//Callback Hell
doTask1(function () {
  doTask2(function () {
    doTask3(function () {
      // 😵 nested callbacks everywhere!
    });
  });
});

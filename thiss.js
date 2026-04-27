// this keyword refers to the current object.
// It basically refers to the object that is currently executing the function.

const myObject = {
  city: "Madrid",
  a: 1,
  b: 2,
  c: function () {
    console.log(this);
  },
};

myObject.c(); // { city: 'Madrid', a: 1, b: 2, c: [Function: c] }

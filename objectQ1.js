const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid


let person = {
  name: "Alice",
  lastname: "Johnson",
  age: 30,

  fullname: function() {
    console.log(`${this.name} ${this.lastname}`);
     
  } 
};

console.log(person.name); // Alice
console.log(person["lastname"]); // Johnson
console.log(person["age"]); // 30

console.log('gender' in person); // false
console.log('age' in person); // true

person.fullname(); // Alice Johnson

// print all the values of the object
for (let key in person) {
  console.log("ans:   "+ person[key]);
}



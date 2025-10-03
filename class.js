    // what is class in js
    //1. class is a blueprint for creating objects    
class Car {
  constructor(brand, model) { // constructor is a special method for creating and initializing an object created with a class
    this.brand = brand; // this keyword refers to the current object
    this.model = model;
  }
}

const car1 = new Car("Toyota", "Corolla");
console.log(car1.brand); // Toyota


    //2.  class is a special type of function
console.log(typeof Car); // function


    //3. class is a template for creating objects
    //4. class is a way to create objects in a more organized way
    // class is a way to create objects with methods and properties
    // class is a way to create objects with inheritance
    // class is a way to create objects with encapsulation
    // class is a way to create objects with polymorphism
    // class is a way to create objects with abstraction
    // class is a way to create objects with constructors
    // class is a way to create objects with static methods and properties
    // class is a way to create objects with getters and setters
    // class is a way to create objects with private methods and properties
    // class is a way to create objects with public methods and properties
    // class is a way to create objects with instance methods and properties
    // class is a way to create objects with prototype methods and properties
    // class is a way to create objects with super and extends
    // class is a way to create objects with new keyword
    // class is a way to create objects with this keyword
    // class is a way to create objects with instanceof operator
    // class is a way to create objects with Object.create() method
    // class is a way to create objects with Object.assign() method

    //Methods and properties
    class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

const john = new Person("John", 30);
console.log(john.greet());


//1. Inheritance

class Animal {
  speak() {
    return "Animal makes a sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}

console.log(new Dog().speak()); // Woof!


//2. Encapsulation (hiding details)

class BankAccount {
  #balance = 0; // private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// console.log(account.#balance); ❌ Error (private)

//3.Polymorphism (same method, different behavior)

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(shape => console.log(shape.area()));
// Circle area: 78.54..., Square area: 16

//4. Abstraction (simplifying complex reality)
class Computer {
  constructor(cpu, ram) {
    this.cpu = cpu;
    this.ram = ram;
  }

  start() {
    return "Computer is starting...";
  }
}

const myComputer = new Computer("Intel", "16GB");
console.log(myComputer.start()); // Computer is starting...



class Student {
    constructor(name, age ) {

// constructor : A special method for creating and initializing an object created with a class.


        this.name = name; //this refers to the current instance of the class
        this.age = age;
        
    }

    getdetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

export default Student;

//Student.js

class Student {
    constructor(name, age ) {

        this.name = name; //this refers to the current instance of the class
        this.age = age;
        
    }

    getdetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

export default Student;

//Student.js
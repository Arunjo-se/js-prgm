import Student from "./Student.js";

class Marks extends Student {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }   

    getdetails(){
        return `${super.getdetails()}, Marks: ${this.marks}`; //'super' rferers to the parent class
    }
}

export default Marks;

// Marks.js


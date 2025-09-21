

const student =[
    {name: "John Doe", age: 20, marks: 85},
    {name: "Jane Smith", age: 22, marks: 90},
    {name: "Alice Johnson", age: 19, marks: 88},
    {name: "Bob Brown", age: 21, marks: 92}
];

const passStudent = student.filter((s) => s.marks > 87) // filter is used to filter the data based on condition, 
console.log(passStudent); 

const Uppernames = passStudent.map((s) => s.name.toUpperCase()) // map is used to transform the data, it returns a new array
console.log(Uppernames);


const totaScore = passStudent.reduce((total, s) => total + s.marks, 0); // reduce is used to reduce the array to a single value, in this case we are calculating the total marks of all students
console.log(`Total Score: ${totaScore}`);


import Marks from './Marks.js';

const student = new Marks("John Doe", 20, 'A');

console.log(student.getdetails()); // Output: "Name: John Doe, Age: 20, Marks: 85"


// Main.js


//Fibonacci series
var n1 = 0, n2 = 1, nextTerm;
var numberOfTerms = 10;
console.log('Fibonacci Series:');
for (let i = 1; i <= numberOfTerms; i++) {
    console.log(n1);    
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

// palindrome with function
var str = "madam2";
function isPalindrome(str) {
    var len = str.length;   
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
var result = isPalindrome(str);
if (result) {
    console.log(`${str} is a palindrome.`);
} else {

    console.log(`${str} is not a palindrome.`);

}


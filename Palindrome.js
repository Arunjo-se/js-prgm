let str = "madam12";

let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  // logic: compare first and last characters.

  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}
console.log(isPalindrome);

console.log(str.length / 2);
console.log(str[str.length - 1]);
console.log(str[str.length - 1 - 0]);

// str.length  = 7
// i = 0; i < 3.5; i++
// m !== 2

/* question 1
1
12
123
1234
*/

let a = 4;

for (let i = 1; i <= a; i++) {
    // for rows
  let row = '';

  // for columns
  for (let j = 1; j <= i; j++) {
    // printing the numbers in each row
    row = row + j;
  }

  console.log(row);
}
/* question 2
*
**
***
****
*/

let b = 4;
for(i = 1; i<=b; i++){
    let row = '';
    for(j = 1; j<=i; j++){
        row = row + '*';
    }
    console.log(row);
}

/* question 3
   1
  12
 123
1234
*/


for(i = 1; i <= a; i++){
    let row ='';
    
      // spaces
    for(s = 1; s<= a - i; s++){
        row = row + ' ' 
    }
      // numbers
    for(j = 1; j<= i; j++){
        row = row + j; // row = row + '*' , if we want to print stars instead of numbers
    }
    console.log(row);
}


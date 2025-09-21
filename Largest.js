let a = [10, 20, 30, 80, 50];

let big = a[0];

for (let i = 0; i < a.length; i++) {
    if(big < a[i]){
        big = a[i]
    }
    
}

console.log(big);

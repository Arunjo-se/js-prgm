let a = [10, 20, 30, 4, 50];

let s = a[0];

for (let i = 0; i < a.length; i++) {
    if(s > a[i]){
        s = a[i]
    }
    
}

console.log(s);

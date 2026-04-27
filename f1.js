const a = [1, 2, 3, 4, 5]

let s = a[0]

for (let i = 0; i < a.length; i++) {
    if(s > a[i]){
        s = a[i]
    }
}

const ab = [1,2,3,4]

console.log(ab);


// print even numbers
const even = ab.filter((a) => a % 2 == 0)
console.log(even)

// using map to find even numbers
const evenMap = ab.map((a) => a % 2 == 0)

//priny only even numbers using map
const evenMapFilter = evenMap.filter((a) => a == true)
console.log(evenMap)

const ss = ab.map((a => a % 2 == 0))

console.log(ss)

const gg = ss.filter(ss => ss == true)

console.log(gg)
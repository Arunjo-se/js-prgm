// str = 'hi, message is "hello world" and i am learning js'
// find the no of words in the stringusing higher order functions

const str = 'hi, message is "hello world" and i am learning js, is isis'

const words = str.split(' ')

console.log("words: " + words);
console.log("words.length: " + words.length);

const a = str.split(' ').map((word) => { return word.split(' ')})
console.log("map : "+ a);
console.log("map : "+ a.length);


const wordCount = words.reduce((count) => count + 1, 0)

console.log("wordCount: " + wordCount)  
// ---------------------------------

// find the no of 'is' in the string using filter(methiod 1)
const isCountFilter = words.filter(word => word === 'is').length
console.log("isCountFilter: " + isCountFilter)


// ------------------------------------------------ 
 //find the no of 'is' in the string(methiod 2) using reduce
const isCount = words.reduce((count, word) => {
    if (word === 'is') {    
        return count + 1
    }
    return count
}, 0)

console.log("isCount: " + isCount)

//------------------------------------------------
// find the no of each word in the string using reduce

const result = str.split(' ').reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(result);

// output: { hi,: 1, message: 1, is: 2, '"hello: 1, world" : 1, and: 1, i: 1, am: 1, learning: 1, js,: 1, isis: 1 }

// ------------------------------------------------
// find the no of each word in the string using filter
const wordCountFilter = str.split(' ').filter((word, index, arr) => {
    return arr.indexOf(word) === index
}).map((word) => {
    return { word: word, count: str.split(' ').filter(w => w === word).length }
})

console.log(wordCountFilter);

// output: [ { word: 'hi,', count: 1 }, { word: 'message', count: 1 }, { word: 'is', count: 2 }, { word: '"hello', count: 1 }, { word: 'world"', count: 1 }, { word: 'and', count: 1 }, { word: 'i', count: 1 }, { word: 'am', count: 1 }, { word: 'learning', count: 1 }, { word: 'js,', count: 1 }, { word: 'isis', count: 1 } ]
// ------------------------------------------------
// str = 'hi, message is "hello world" and i am learning js'
// find the no of words in the stringusing higher order functions
const str = 'hi, message is "hello world" and i am learning js, is isis'
const words = str.split(' ')
console.log(words)
console.log(words.length);

const wordCount = words.reduce((count, word) => {
    return count + 1
}, 0)

console.log(wordCount)  
 //find the no of 'is' in the string
const isCount = words.reduce((count, word) => {
    if (word === 'is') {    
        return count + 1
    }
    return count
}, 0)

console.log(isCount)


function add (a, b, callback) {

    let sum = a + b;
    callback(sum);
}

add(5, 10, function(result) {
    console.log("The sum is: " + result);
});
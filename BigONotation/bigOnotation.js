

//Timing our Code
function addUpTo (n) {
    let  total = 0;
    for(let  i =1; i<= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(6))

function addUpToSecond (n) {
   return n * (n + 1) /2;
}
console.log(addUpToSecond(6))

// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n^2)
// f(n) could be constant (f(n) = 1)
// f(n) could be something entirely different!

function countUpAndDown (n) {
    console.log("Going Up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
console.log("At the top!\nGoing down...");
for(let j = n - 1; j >= 0; j--) {
    console.log(j);
    }
    console.log("Back down. Bye!");
}

function printAllPairs (n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// O(n^2)
// O(n) operation inside of an O(n) operation



// Space Complexity in Js

// Most Primitives (boolean, numbers, undefined, null) are constant space = O(1)
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for Arrays) or the number of the keys(for objects)

function sum (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// O(1) - Space Complexity 

function double (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// O(n) - Space Complexity



// Log and Section Recap

// O(log n) - compares to O(n) it is close to constant

// O(nlog n) 









/*

This pattern uses objects or sets to collect values/frequencies
of values

This can often avoid the need for nested loops or O(N^2) 
operations with arrays / strings


*/

/*

Write a Function called Same, which accepts two arrays.
The function Should return true if every value in the array
has it's corresponding value squared in the second
array. The frequency of values must be the same.

*/

function Same1(arr1, arr2) {
    //frequency of values must be the same
    if(arr1.length !== arr2.length) {
        return  false;
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }

    return true;
    //arr1 should contain values

    //arr2 should square all of arr1 values


    //return True
}

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1= {}
    let frequencyCounter2= {}

    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

function sameFrequency (num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1      
    }

    for (let j = 0; j < strNum2.length; j++) {
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }

    for (let key in countNum1) {
        if ( countNum1[key] !== countNum2[key]) return false;
    }

    return true;
}
/*

Count Unique Values

Implement a function called countUniqueValues, which accepts
a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always
be sorted.

Example

function sumZero2 (arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        }else{
            left ++;
        }
    }
}

*/

function  countUniqueValues (arr) {
    
}
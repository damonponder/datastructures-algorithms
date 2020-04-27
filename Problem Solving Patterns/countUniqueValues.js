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
    if(arr.length === 0) return 0;
    let i = 0;
    for (var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}


/* 

MULTIPLE POINTERS

Creating pointers or values that correspond to an index or
position and move towards the beginning, end or middle based
on a certain condition.

Very efficient for solving problems with minimal space
complexity as well!

EXAMPLE

Write a function called sumZero which accepts a sorted array
of integers. The function should find the first pair
where the sum is 0. Return an array that includes both values
that to zero or undefined if a pair does not exist

*/


// First Common Sense Solution for Multiple Pointers
function sumZero (arr) {
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

//Second solution for Multiple Pointers
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
/*

Multiple Pointers - averagePair

Write a function called averagePair. Given a sorted array of
integers and a target average, determine if there is a pair of
values in the array where the average of the pair equals the 
target average. There may be more than one pair that matches
the average target.
*/

function averagePair(arr, num) {
    let left = 0
    let right = arr.length - 1;
    while(left < right) {
        let avg = (arr[left] + arr[right]) / 2
        if(avg === num) return true;
         else if (avg < num) left++
          else right--;
        }
        return false;
    }

/*

Multiple Pointers - isSubsequence

Write a function called isSubsequence which takes in two 
Strings and checks whether the characters in the first string
form a subsequence of the characters in the second string.
In other words, the function should check whether the 
characters in the first string appear somewhere in the
second string. Without their order changing.

*/
function isSubsequence (str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if(str2[j] === str1[i]) i++;
        if(i === str1.length) return true;
        j++;
    }
    return false;
}

/*

ANAGRAMS

Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is a
word, phrase, or name formed by rearranging the letters of
another, such as cinema, formed from iceman.

*/

function validAnagram(str1, str2) {

    if(str1.length !== str2.length) {
        return false;
    }

    let lookup = {}

    for (val of str1) {
        let letter = str1[val];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for(val of str2) {
        let letter = str2[val];
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
    }
    return true;
    }
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
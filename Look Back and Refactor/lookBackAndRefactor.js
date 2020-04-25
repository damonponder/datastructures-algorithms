// write a function which takes in a string and
//returns counts of each character in the string

/*

Refactoring Questions

- Can you check the result?

- Can you derive the result differently?

- Can you understand it at a glance?

- Can you use the result or method for some other
    problem?

- Can you improve the performance of your solution?

- Can you think of other ways to refactor?

- How have other people solved this problem?

*/ 

function charCount (str) {

    // make object to return at end
    var string = {};

    //loop over string, for each character...
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        // if the char is a number/letter 
        // AND is a key in the object, add 1 to
        // the count
        if (string[char] > 0) {
            string[char]++;
        // if the char is a number/letter 
        // AND not in the object, add it 
        //  to the object and set value to 1
        } 
        else {
            string[char] = 1;
        };
    }
        
        // if the char is something else, don't do 
        // anything

    //return object at end
    return string;
}

// Different Solution for same problem Above!

function charCount2 (str) {
    const obj = {};
    for(const char of str) {
        char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

// write a function which takes in a string and
//returns counts of each character in the string

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


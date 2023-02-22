const reverseString = function(word) {
    let reversed = "";
    for (i = word.length-1; i > -1; i--) {
        reversed += word[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

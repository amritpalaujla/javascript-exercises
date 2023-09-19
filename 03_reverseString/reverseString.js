const reverseString = function(word) {
newWord = ''
for (let i = 1; i <= word.length; i++){
    newWord += word.charAt(word.length-i)
}
return newWord
};

// Do not edit below this line
module.exports = reverseString;

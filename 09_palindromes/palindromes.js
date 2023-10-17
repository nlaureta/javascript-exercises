const palindromes = function (word) {
    const punctuation = /[\.,?!/\s]/g;
    const newText = word.replace(punctuation, "").toLowerCase();
    return newText.split("").reverse().join("") === newText;
};

// Do not edit below this line
module.exports = palindromes;

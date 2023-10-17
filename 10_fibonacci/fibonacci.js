const fibonacci = function (num) {
    if (num < 0)
        return "OOPS";

    if (+num < 2) return +num;
    return fibonacci(+num - 1) + fibonacci(+num - 2); //https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
};

// Do not edit below this line
module.exports = fibonacci;

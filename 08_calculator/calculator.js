const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;
  arr.forEach((a) => {
    total += a;
  })
  return total;
};

const multiply = function (arr) {
  let total = 1;
  arr.forEach((a) => {
    total *= a;
  })
  return total;
};

const power = function (a,b) {
  return Math.pow(a,b);
};

const factorial = function (num) {
  let total = 1;
  let tempNum = num;
  for(let i = 0; i < num; i++) {
    total *= tempNum;
    tempNum--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const convertToCelsius = function(fahrenheit) {
  let conversion = 0;
  conversion = (fahrenheit - 32) * 5/9;
  return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let conversion = 0;
  conversion = (celsius * 9/5) + 32;
  return Math.round(conversion * 10) / 10; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

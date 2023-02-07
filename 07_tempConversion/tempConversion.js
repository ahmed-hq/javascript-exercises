const convertToCelsius = function(f) {
  let celsius  = (f - 32) * (5/9);
  let celsiusRounded = Math.round(celsius *10)/10
  return celsiusRounded;


};

const convertToFahrenheit = function(c) {
let fahrenheit = (c * 9/5 + 32) 
  // let fahrenheit  = (c + 32) * (9/5);
  let fahernheitRounded = Math.round(fahrenheit *10)/10
  return fahernheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(temperatureF) {
  let temperatureC = ((temperatureF-32)*(5/9)).toFixed(1);
  if (temperatureC==0.0) temperatureC=0;
  return +temperatureC;
};

const convertToFahrenheit = function(temperatureC) {
  let temperatureF = (temperatureC*(9/5)+32).toFixed(1);
  if (temperatureF==0.0) temperatureF=0;
  return +temperatureF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

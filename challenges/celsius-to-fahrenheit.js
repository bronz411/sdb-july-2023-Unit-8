function convertToCelsiusToFahrenheit(temperatures) {
  return temperatures.map((temperature) => ({
    city: temperature.city,
    temperatureCelsius: temperature.temperatureCelsius,
    temperatureFahrenheit: temperature.temperatureCelsius * (9 / 5) + 32,
  }));
}

const temperatureData = [
  { city: "New York", temperatureCelsius: 20 },
  { city: "Los Angeles", temperatureCelsius: 28 },
  { city: "Chicago", temperatureCelsius: 15 },
];

const convertedTemperatures = convertToCelsiusToFahrenheit(temperatureData);

console.log(convertedTemperatures);

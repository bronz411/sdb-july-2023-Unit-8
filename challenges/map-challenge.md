A coding challenge that requires using `.map()` and working with objects:

Challenge: Convert Celsius to Fahrenheit

Write a JavaScript function called `convertToCelsiusToFahrenheit` that takes an array of objects representing temperatures in Celsius and converts them to Fahrenheit. Each object has the following properties:

- `city` (string): The name of the city.
- `temperatureCelsius` (number): The temperature in Celsius.

The formula to convert Celsius to Fahrenheit is: Fahrenheit = (Celsius \* 9/5) + 32.

Instructions:

1. Define a function `convertToCelsiusToFahrenheit` that takes an array of temperature objects as a parameter.

2. Inside the function, use the `.map()` method to create a new array of objects.

3. For each temperature object in the input array, calculate the temperature in Fahrenheit and add it to the new object.

4. Return the new array containing objects with both Celsius and Fahrenheit temperatures.

Example:

```javascript
function convertToCelsiusToFahrenheit(temperatures) {
  // code goes here
}

const temperatureData = [
  { city: "New York", temperatureCelsius: 20 },
  { city: "Los Angeles", temperatureCelsius: 28 },
  { city: "Chicago", temperatureCelsius: 15 },
];

const convertedTemperatures = convertToCelsiusToFahrenheit(temperatureData);

console.log(convertedTemperatures);
```

In this challenge, the `.map()` method is used to create a new array of objects with both Celsius and Fahrenheit temperatures calculated and included in each object. This challenge involves working with objects and performing a mathematical transformation on each element of the array.

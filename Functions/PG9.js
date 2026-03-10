// Converting temperature (Celsius -> Fahrenheit)
const convTemp = (celsius) => {
    return `So the temperature is ${(celsius * 9/5) + 32} degree Fahrenheit`;
}

console.log(convTemp(30));
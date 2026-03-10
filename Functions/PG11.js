// Using rest parameters to sum numbers
// rest parameters allow us to represent an indefinite number of arguments as an array
const SumNumbers = (...numbers) => {
    // "reduce()" method is used to accumulate the sum of the numbers in the array
    return numbers.reduce((total,num) => total + num, 0);
}

console.log(SumNumbers(1,2,3,4,5)); // Output: 15   
console.log(SumNumbers(10,20,30)); // Output: 60
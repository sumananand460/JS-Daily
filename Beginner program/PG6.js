let num = [10,20,40,30];

// Using reduce() to combine each value in the array as one
let sum = num.reduce((total, num) => total + num,0); 
console.log(sum);
let arr = [1,2,3,4,56,22,11,1,22,45,22,67];

// 'Set' object is used to remove the duplicates from the array.
let uniqueArr = [...new Set(arr)];	
console.log(uniqueArr);
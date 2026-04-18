// const myArr = [10, 20, 30, 40];
// console.log(myArr);

const newArr = new Array(10, 20, 30, 40);
console.log(newArr);

// **in Push() method we can only add element in the end of the array 
newArr.push(5);
console.log(newArr);

// **For add element in the particular index we use 
newArr.splice(2, 0, 50);
console.log(newArr);
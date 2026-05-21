
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// //Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9); // adds element at the beginning of the array
// console.log(myArr);
// myArr.shift(); // removes the first element of the array
// console.log(myArr);

// myArr.includes(9);. // checks if the element is present in the array or not and returns true or false
// console.log(myArr.includes(9));


// myArr.indexOf(9);
// console.log(myArr.indexOf(9));

const newArr = myArr.join() // joins and changes array from object to string
console.log(newArr);
console.log(typeof newArr);// string

console.log("A", myArr)

const myn1 = myArr.slice(1,3) // returns a new array containing the elements from the original array starting from the index specified in the first argument and ending at the index specified in the second argument (not inclusive)
console.log(myn1); // [1, 2]
console.log("B",myArr) // original array is not modified
const myn2 = myArr.splice(1,3); // returns a new array containing the elements from the original array starting from the index specified in the first argument and ending at the index specified in the second argument (inclusive) and modifies the original array by removing the elements from the original array
console.log(myn2) // [1, 2, 3]
console.log(myArr) // original array is modified and the elements from index 1 to index 3 are removed from the original array




 


const score = 400 // auto detects nuumber js\
const balance = new Number(400) // it is an object and it has some properties and methods // 
console.log(score)
console.log(balance);// it will print the value of balance but it is an object and it has some properties and methods

console.log(balance.toString().length);// it will convert the number to string and then it will give the length of the string
console.log(balance.toFixed(1)); // 
const othernumber  =  123.34

console.log(othernumber.toPrecision(3)); // it will give the number with 3 digits after the decimal point

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); // it will give the number in the format of the current locale
console.log(hundreds.toLocaleString('en-IN'));// it will give the number in the format of Indian rupees
 
// ********************************************************************************************

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.6)); // it will round the number to the nearest integer
console.log(Math.ceil(4.2)); // it will round up the number to the nearest integer
console.log(Math.floor(4.2)); // it will round down the number to the nearest integer
// math.min , math.max  

console.log(Math.random()); // gives random vakues 0 to1

// need 1 to 10;

console.log((Math.random()*10)+1);
// formula 
const min = 10;
const max = 20;

console.log((Math.random()*(max-min+1))+min);
console.log((Math.random()*(max-min+1))+min);
console.log((Math.random()*(max-min+1))+min);
console.log((Math.random()*(max-min+1))+min);















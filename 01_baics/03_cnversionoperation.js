let score = true

//console.log(typeof score); 
//console.log(typeof(score));


let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // 33aaNAN - > speficific type of numbet 
// "33" => 33
// "33aa" => NaN
// null -> 0 
// bollean - true-1 ., false-0

let isLoggedin = "hitrsg";
let bolleanisLoggedin = Boolean(isLoggedin);
//console.log(bolleanisLoggedin);
// 1-> true ; 0->false
//"" -> false;
// "skgr" -> true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); // 33 as string
// console.log(typeof stringNumber); // string


// ************************* operations **************************
let value = 3
let negValue = -value
console.log(negValue)
console.log(2 + 2) ;
console.log(2-2);
console.log(2 * 2) ;
console.log(2 ^ 3) ; // bitwise operator (it works on binary number) 2-> 10 and 3-> 11 => 01 -> 1
console.log(2/3) ; // console.log(2/0) ; // infinity
console.log(2%3); // modulus operator gives us the remainder of the division operation

console.log("1" + 2); // 12  js is a dynamic type language it automatically converts the type of data as per the need of operation
console.log(1 + "2");   
console.log("1"+ 2 + 2 ) ; // "1"+ 2 => "12" + 2 => "122"
console.log( 1+2+"2" ) ; // 1+2 => 3 + "2" => "32"
console.log( (3 + 4) * 5%3) ; // dont be dependent on such things : use brackets to tell wht uu nnedddd:

console.log(+true); // +true => 1
console.log(+false); // +false => 0
console.log(+""); // +"" => 0

let num1, num2, num3

num1 = num2=num3 = 2+2 // num1 = num2 = 4

let gameCounter = 100
gameCounter++;
console.log(gameCounter)













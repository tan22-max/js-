
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
sayMyName()
function ADDtwonumber(number1, number2){

    //console.log(number1+number2);
    // let result = number1+number2
    // return result;
    return number1+number2;

    

}
const result = ADDtwonumber(2,3);
console.log("result :" , result);

// part 2


function loginUserMessage(username = "sam"){ // username - parameter - default = sam (if no argument)
    if(!username){
        console.log("PLease enter a username");
        return  // never will utilse as ddefault is given 
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1){ // if we wnat to give multipee inputs like values 
    return num1
}
// val1 = 200 , val2 = 400 , num1 = [500,2000] 

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


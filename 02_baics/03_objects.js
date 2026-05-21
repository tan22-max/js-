// singloltons
// onject.createe
const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "hitesh", // name is string , it is automatically named 
    "full name": "tanishk kumar", //  can also use string manumally
    email: "tanishk@google.com",
    // mySym : "mykey1" // it takes it as string ; but it is smblols
    [mySym]: "mykey1" , // to use symbol as key we have to use square brackets
    age: 18,
    islogedIn: false,
    lastloginDay: ["monday","tuesday"] // array as value



}
// console.log(JsUser.email) // dot notation
// //console.log(JsUser[email]) // error  // wiil look for variable email which is not defined 
// console.log(JsUser["email"]) // beter way
// // as full name has space : . method does not work error
// console.log(JsUser["full name"]) // we have to use square brackets and string key
// console.log(JsUser[mySym])

// can chanege outside
JsUser.email = "tanishk@chatgpt.com"
// we can frezze the change s // Object.freeze(JsUser) // it will not allow to change the object but it will not throw error
// Object.freeze(JsUser)
JsUser.email = "tanishk@microsoft.com"
//console.log(JsUser)

JsUser.Greeting = function(){
    console.log("hello js user")
}
//console.log(JsUser.Greeting) // anaumaus function return reference 

JsUser.greetingTwo = function(){
    console.log(`hello js useer, ${this.name}`)
}
console.log(JsUser.Greeting())  // correct but undifined because it is not returning anything
console.log(JsUser.greetingTwo())

/* Why does undefined show up?
Because you are nesting a console.log() inside another console.log().

JsUser.Greeting() runs. It executes console.log("hello js user"), printing the message.

However, the Greeting function does not have a return statement. In JavaScript, a function that doesn't explicitly return a value returns undefined by default.

The outer console.log() then prints that returned value: undefined.

The cleaner way to call it: Just call the function directly without wrapping it in a console.log(): */







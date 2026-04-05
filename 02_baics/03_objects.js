// singloltons
// onject.createe
const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "hitesh", // name is string , it is automatically named 
    "full name": "tanishk kumar", //  can also use string manumally
    email: "tanishk@google.com",
    // mySym : "mykey1" // it takes it as string ; but it is smblols
    [mySym]: "mykey1" ,
    age: 18,
    islogedIn: false,
    lastloginDay: ["monday","tuesday"]



}
// console.log(JsUser.email)
// //console.log(JsUser[email]) // error 
// console.log(JsUser["email"]) // beter way
// // as full name has space : . method does not work error
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// can chanege outside
JsUser.email = "tanishk@chatgpt.com"
// we can frezze the change s
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
console.log(JsUser.Greeting())  // correct
console.log(JsUser.greetingTwo())









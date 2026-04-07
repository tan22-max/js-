const user = {
    username : "tanishk",
    price: 99,
    welcomemessage :function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);

    }


}
// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this) // in golble or outsidwe object : in node - {} , in inspect - window

// this in funxtion()

// function chai(){
//     let username = "tanishk"
//     //console.log(this); // this contains multiples things : globsal , fetchtime etc
//     console.log(this.username); // undefiencd ; only in object

// }
//chai();
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // same undefined

// }
const chai = () => {
    let username = "tanishk"
    console.log(this);
}
chai()
const addnum = (num1,num2) =>{
    return num1+num2;

}
console.log(addnum(3,4));
const addnum2 = () => num1+num2 // return can be remoed if one statemtn
console.log(addnum(3,4))

const addthree = () => ({username: "this"}) // object return must use () in arrow
console.log(addthree)
 
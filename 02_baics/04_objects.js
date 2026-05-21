// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// object can have objects  , can be excessed by multiplr . 
// like loop
console.log(regularUser.fullname.userfullname.firstname);
// to merge mupleile objects 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// assign method :-> Object.assign(target, ...sources) // it is used to copy the values of all enumerable own properties from one or more source objects to a target object and returns the target object
// const obj4 = Object.assign(obj1,obj2) // here target is o obj1 obj1 changes and obj2 is source
// const obj5 = Object.assign({},obj1,obj2) // here arget is {} , ADD OBJ 3 , OBJ4 TO IT


// console.log(obj4)
// console.log(obj5)

// spread operator :-> ... // it is used to spread the elements of an array or object into individual elements
const obj6 = {...obj1, ...obj2}
console.log(obj6)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] 
// its object inside array  
users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // it will return an array of keys of the object
// console.log(Object.values(tinderUser)); // it will return an array of values of the object
// console.log(Object.entries(tinderUser)); // it will return an array of key value pairs of the object in array form

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // hasownproperty : tells if it has 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // object destructuring :-> it is used to extract the values of an object and assign them to variables with the same name as the keys of the object

// console.log(courseInstructor); error because it is not defined :) changed name to instructor
console.log(instructor);
// api Flavor A: The Single Object API Response
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// in raw format it is string but we have to convert it to object by using JSON.parse() method

[
    {},
    {},
    {}
]

// Flavor B: The Array of Objects API Response




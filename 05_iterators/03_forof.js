// for of  - > iterable 
// array , strings , maps  etc , not onject(single)
// in map - if multiple values like key abd value => [key , valeus ] in place if elemtn const

const arr =[1,2,3,4]
for (const i of arr) {
    console.log("values of arr are" ,i)
}
const greetings = "hello world"
for (const greet of greetings) {
    console.log(greet);
}
const map = new Map()
map.set('IN',"INDIA")
map.set('US' ,"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")
for (const [key ,value] of map) {
    console.log(key , ":->",value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// object does not work as they are non-iteraable
for (const [key,value] of myObject) {
    console.log(key,":-",value)
    
}


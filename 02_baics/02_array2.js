const marvel_hero = ["ironman","spriderman","thor"]
const dc_hero = ["superman","flash","batman"]
// dc_hero.push(marvel_hero) // any datatype cqn be pushed . so array in array 
// console.log(dc_hero) // ["superman", "flash", "batman", Array(3)]
// console.log(dc_hero[3][1]); // like 2d array

const allhero = marvel_hero.concat(dc_hero) // concatenates two arrays and returns a new array
console.log(allhero);

// spreader :-> ... // it is used to spread the elements of an array into individual elements
const all_new_hero = [...marvel_hero , ...dc_hero]
console.log(all_new_hero)




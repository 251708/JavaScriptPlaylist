const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" ,"batman"]
/*
marvel_heros.push(dc_heros);
console.log(marvel_heros);
*/


//Appropriate way of joining two or more arrays

/*const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)
*/

/*
spread operator is the best way of joining the array 
we can use this method even if the number of array is more than two 
const allnewheros = [...marvel_heros, ...dc_heros];
console.log(allnewheros);

*/

/*
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

*/

console.log(Array.isArray("Sakshi Singh"))
console.log(Array.from("Sakshi Singh"));
// Interesting things to  keep in mind if java script is confused then it is give an empty array 
console.log(Array.from({name:"Sakshi Singh"}));


let score1 = 500;
let score2 = 400;
let score3 = 600;
console.log(Array.of(score1,score2,score3))





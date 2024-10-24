// for of loop in detail
const arr = [1,2,3,4,5,6]
for (const num of arr) {
   console.log(num); 
} 

const greetings = "Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

//Map
 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")
 console.log(map);
 //for(const key of map)
 // below the code is known as destructuring of the code in which we can get the value key and value in separate 
 for(const [key, value] of map){
    console.log(key ,':-' , value);
 }


 const myobject = {
    'game1' : 'NFS',
    'game2': 'Spiderman'
 }
// myobject is iterable here 
 for(const [key , value] of myobject){
    console.log(key, ':-' , value);
 }

 // in object for of loop is not working while it is working on the map 
 
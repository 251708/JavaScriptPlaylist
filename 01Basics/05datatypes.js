// Primitive data types
// 7 types: String, Number, Boolean , null , undefined , symbol , BigInt

const score = 100
const scoreValue = 9529.09

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;


 //const bigNumber = 5892n  // at the last add only n to make it bigNumber

 const id = Symbol('1234')
 const anotherId = Symbol('123')
 console.log(id === anotherId);


//Reference(Non Primitive )
// Array , Objects, Functions 


const heros = ["Apj abdul kalam" , "Ratan Tata" , " "]
let myObj = {
    name: "Sakshi Singh" ,
    age:23
} 

const myFunction = function(){
    console.log("welcome to the strange world");
}



// stack (Primitive)   ,Jo bhi variable declare kiya uska ek copy milta h esme 
// Heap(Non-primitive), Yaha se hame referance milta h jo bhi aap change karenge original value me change hoga 

let myYoutubename = "sakshidotcom"

console.log(myYoutubename);
let anothername = myYoutubename
 anothername = "gudiyadotcom"
 console.log(anothername);


 let userone = {
    email:"sakshi@gmail.com",
    age: 22,
    name:"sakshi singh",
    place:"mirzapur",
    college:"MJPRU"

 }
 let userTwo = userone;
 console.table([userone,userTwo]);

userTwo.email = "gudiya@gmail.com"
console.log(userone.email);
console.log(userTwo.email);

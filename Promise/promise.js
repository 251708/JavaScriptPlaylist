const promiseOne = new Promise(function(resolve, reject){
    //Do an async task 
    // DB calls, cryptography , network
    setTimeout(function(){
      console.log('Async task is complete');  
      resolve()// by this we can connect resolve to .then
    }, 1000)
})

// comsumption of promise --------------
//we have to connect resolve and then 
promiseOne.then(function(){
    console.log("Promise consumed");
})


// we can do it only in one part by this way let's see---------
new Promise(function(resolve, reject){
    setTimeout(function() {
       console.log("Async task 2 ")
       resolve(); 
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


// 3rd way to make promise 
 const promiseThree = new Promise (function(resolve,reject){
setTimeout(function(){
    console.log("Async 5 is created")
resolve({username:"sakshi" , email:"chai@exaple.com"})
},1000)
 })

 promiseThree.then(function(user){
    console.log(user)
 })


 const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"sakshi singh" , })
        }
    })
 })





 const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"sakshi singh" , password:"1234"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
 })

/*promiseFive.then((user)=>{
   console.log(user);
   return user.username
}).then((username)=>{
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected"))
*/


async function consumedPromiseFive(){
   try{
    const response = await promiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}
consumedPromiseFive();

async function getAllUsers(){
    try{
        const response = await fetch()
     const data = await response.json()
     console.log(data);
    }catch(error){
        console.log("E: " , error);
    }
}



const user = {
    username: "sakshi" , 
    logincount: 5,

}
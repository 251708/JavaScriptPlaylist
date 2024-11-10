function createUser (username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score ++
}
const chai = createUser("chai" , 30)
const tea = createUser("tea" , 250)

/*
A new object is created : the new keyword intitaiates the creation a 
new javascript object.

A prototype is linnked: The newly created object gets linked to the prototype property of the 
constructor function . This means that it has access to properties and methods defined on the con
structor's prototype.


*/

// Closures ----------------


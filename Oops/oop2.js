const user = {
    username: "sakshi",
    logincount: 5,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());

const userOne = user("sakshi" , 14, true)
const userTwo = user ("SakshiaurJavaScript" , 13 , false)
console.log(user.getUserDetails);
console.log()

function multipleBy5(num){
    return num*5
}
// just for the enjoyment purpose you cann't do these things 
//  

multipleBy5.power = 2 
console.log(multipleBy5.power);
console.log(multipleBy5.)




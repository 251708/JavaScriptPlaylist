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
console.log(userOne);




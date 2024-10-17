/*function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));
//This is the way by which we can array of all the prices 
function calCartPrice(...num1){
    return num1
}
console.log(calCartPrice(300,400,500,600));

function cart(val1,val2, ...num1){
    return num1
}
console.log(cart(200,400,600,800));

*/



/*

const user = {
    username:"Sakshi Singh",
    price: 100
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and prices is ${anyobject.price}`);
}
//handleobject(user);
//This is the direct way to passing an object 
handleobject({
    username:"gudiya singh",
    price:200
})

*/

//Way for passing the array
const myNewArray = [200,400,500,600,700]
function returnsecondvalue(getArray){
   return getArray[1]
}
//console.log(returnsecondvalue(myNewArray));
console.log(returnsecondvalue([400,809,482,8932]))
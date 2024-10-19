/*
 falsy values 
false , 0 , -0, BigInt ,0n, "" , null, undefined , NaN

truthy values
"0" , 'false', "" , [] , {} , function(){}

// false == 0 , false == '' , 0 == '' -> true;

 */

if(userEmail.length === 0) {
    console.log("Array is empty");
}

// Nullish Coalescing Operator(??):   null undefined
let val1;
val1 = 5 ?? 10
val2 = null ?? 16
val3 = undefined ?? 18
val4 = null ?? 10 ?? 20
console.log(val1);

/* Terniary Operator 
condition ? true : false
*/
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80"): console.log("Price is more than 80")


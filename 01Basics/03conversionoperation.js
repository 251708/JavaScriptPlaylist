let score = "68";
console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof score);

let valueInNumbe = Number(score)
console.log(typeof valueInNumbe);


/*let marks = "92hks"
let valueIn = Number(marks)
console.log(typeof valueIn);
console.log( valueIn);

so this is the case in which you have to
keep these things in your mind 
that typeof is maybe number bt the actual value of
that is NaN . and NaN is also a type of datatypes 
*/

let interest  = null;
console.log(typeof interest);
console.log(interest);
let value = Number(interest)
console.log(typeof value);
console.log(value);

/*
"33" => 33,
"852khgsk" => NaN,
true => 1 ; false => 0
*/


let isLoggedIn = ""
let booleanIsLoggedIn  = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


let houseno = 45

let stringnum = String(houseno)
console.log(typeof stringnum);
console.log(stringnum);

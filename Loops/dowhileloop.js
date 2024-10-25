// while loop

let index = 0;
while(index <= 10){
    console.log(`Value of the index is ${index}`);
    index = index + 2;
}


let myarray = ["Sakshi" , "Shibbu" , "gudiya" , "shivi"]
let arr = 0;
while (arr<myarray.length){
    console.log(`Value is ${myarray[arr]}`)
    arr = arr+1;
}
/* IN do while loop atleast for one time code is always executed  regardless of the condition 
that is true or false because the condition is evaluated after the loop body
*/

let score = 1;
do{
console.log(`Score is ${score}`);
score++;
}while(score < 12);
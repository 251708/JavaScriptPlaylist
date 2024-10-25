const myNum = [1,2,3,4,5,6,7,8,9,10]
let i = 0;
let sum = 0;
/*
do{
    //sum += myNum[i];
    console.log(`The sum of myNum is ${sum}`);
    sum += myNum[i];
    i++;
}while(i< myNum.length);
Imp-------------------------------------------------------------the position of 
If you place sum += myNum[i]; before console.log, you'll see the updated sum after the addition of the current element.
If you place sum += myNum[i]; after console.log, you'll see the sum before the addition of the current element.
*/

/*  The correct code of the do while loop is given below with the code snippet 
do{
} while(condition);

*/

/*do{
    sum += myNum[i];
    i++;
}while(i< myNum.length);
console.log(`The sum of all the value of myNum is ${sum}`);
*/



const myNums = [1, 2, 3, 4, 5, 6, 7, 8];
let myTotal = 0;

myNums.forEach((num) => {
    myTotal += num; // Add each number to myTotal
});

console.log(myTotal);


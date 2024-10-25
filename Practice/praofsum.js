// by using the foreach method----
const yNum = [1,2,3,4,5,6,7,8,9,10]
  let mytotal = 0;
 yNum.forEach( (value) => {
    mytotal += value;
  })
  console.log(mytotal);

//2 by using the map method 
  const zNum = [1,2,3,4,5,6,7,8,9]
  let total = 0;
  zNum.map( (score) => {
    total += score;
  })
  console.log(total);

// by using the for loop 
const wNum = [1,2,3,4,5,6,7,8]
let sum = 0;
for(let i = 0; i< wNum.length; i++){
    sum += wNum[i];
}
console.log(`the sum of all the numbers of the wNum is ${sum}`);

// by using the while loop
const xNum = [1,2,3,4,5,6,7]
let i = 0;
let sumx = 0;
while(i< xNum.length){
    sumx += xNum[i];
    i++;
}
console.log(`The sum of the all the value of the xNum is ${sumx}`);

// by using the dowhile loop ---
const sNum = [1,2,3,4,5,6]
let index = 0; 
let summ = 0;
do{
    summ += sNum[index];
    index++;
}while(index< sNum.length)
    console.log(`The sum of all the elements of the sNum is ${summ}`);

//by using the reduce method which is the best method for doing sum in the array which is explicitly used in shopping cart 
const mNum = [1,2,3,4,5]
 const value = mNum.reduce( (acc, currval) =>  acc + currval , 0)
 console.log(value);
 /*
 The reduce() method in javascript is used to reduce an array to a single
 value by executing a provided function for each element of the array.
 The function receives two arguments :
 an accumulator(which holds the accumulated result )
 and the other one is the current being processed 
  
 the final result of running  the reducer function across all elements of the array is a single value.
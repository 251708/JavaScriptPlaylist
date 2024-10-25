const myNums = [1,2,3,4,5,6,7,8,9,10]
/*let total = 0;
for( let i = 0; i< myNums.length; i++){
    total += myNums[i]
}
console.log(total);
*/
/*
const myNum = ["sakshi" , "shibbu" , "shreya" , "Shivi" , "shivani" , "gudiya" ]
for(let i = 0; i<myNum.length; i++){
 
   console.log(myNum[i])
}

The for loop also iterates over each index of the myNum array,
 but this time, it logs one individual element of the array at a time.
The expression myNum[i] accesses the element at index i, so during each iteration, only one element of the array is logged.

 



const myNum = ["sakshi" , "shibbu" , "shreya" , "Shivi" , "shivani" , "gudiya" ]
for(let i = 0; i<myNum.length; i++){
 
   console.log(myNum)
}

The for loop iterates over each index of the myNum array,
 but instead of logging individual elements, it logs the entire array myNum on every iteration.
The console.log(myNum) inside the loop doesn't change; it just logs the entire array each time.
*/


const mybook = ["hindi" , 'history' , 'sanskrit' , 'urdu' , 'computer']
for(let i = 0 ; i< mybook.length; i++){
    //console.log(mybook[i]);
}

const myNum = [1,2,3,4,5,6,7,8,9,10]
let i = 0;
let total = 0;
while(i< myNum.length){
   /*
    i++;
    console.log(myNum[i])
    there is a simple error in this code 
    in this code myNum is start printing from the 2 
    because in this code first increment of the index is happen and after that the printing of the value is done 
    */
 //console.log(myNum[i]);
 i++;
 
}


const Num = [1,2,3,4,5,6,7,8,9,10]
let index = 0;
let totalvalue = 0;
while(index< Num.length){
    totalvalue += Num[index];
    index++
    console.log(totalvalue);
    /*
    The console.log(totalvalue) is inside the loop, so it prints the 
    cumulative total after each iteration. This way, you see the running total 
    after each number is added to totalvalue.
    */
    
}
//console.log(totalvalue);
/*
The console.log(totalvalue) is outside the loop, so it prints 
the final total only after all iterations of the loop are done.
 The sum of the numbers from 1 to 10 is 55, and this is printed once after the loop.


Conclusion:
The main difference lies in when the console.log() is called:
 inside the loop for incremental totals vs.
  outside the loop for the final total.
  */














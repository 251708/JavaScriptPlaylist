/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    
   for(let i = 0; i<= 10; i++){
    const element = i;
     if(element == 5){
        console.log("8 is the best number");
     }
     console.log(element);
   }


   // break and continue
   for (let i = 1; i<=20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);
   }

   for(let i = 1; i<=20 ; i++){
    if(i==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`);
   }

   /*
   The major difference between break and continue is that when the condition of break is meet then the execution of code 
   goes out of the block , and further nothing execute 

   while on the other side if we are talking about continue then 
   the concept of continue is that it only stop executing the code for one time 
   after that continue will execute the code untill the condition is true 
   this is the difference between break and continue
   */



   /*for(let i = 0; i<10; i++){
    console.log(`value of the loop is ${i}`);
   }
    */
// this is the way which we can print an array using for loop 
   let name = ["Sakshi" , "gudiya" , "shibbu" , "shivi"]
  let arr = 0;
   for(let arr = 0; arr< name.length; arr++){
    console.log(`Name of the student is ${name[arr]}`);
   }

/*
key points about forloop is 
first we have to initialition the value ,
second we have to check for the condition ,
and lastly we have to increment or decrement the value, in simple words we can say that 
we need to update the value

in short 
1.Initialition,
2.Condition Check,
3. Update the value
*/
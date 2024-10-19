/*
{} -> Global Execution Context
 this -> window for browser
 1. Global Execution Context
 2.Function Execution Context
 3. Eval Execution Context
*/
/*

let val1 = 10
let val2 = 5
function addnum (num1, num2){
let total = num1 + num2
return total
}
let result1 = addnum (val1, val2)
let result2 = addnum (10,2)
1. Global Execution -
       This 

  2.  Memory Phase 
  val1- undefined 
  val2 - undefined
  addnum - definition 
  result1 - undefined 
  result2- undefined 
  
  3. Execution Phase 
  val1 - 10
  val2 - 5
  addnum -> new variable environment + Execution thread -----after result it will be deleted by itself 


  Memory Phase 
  val1 -> undefined 
  val2 -> undefined 
  total -> undefined 

  Execution Phase 
  num1 - 10
  num2 - 5 
  total - 15--------return back to global execution context 


*/



//------------------------- Callstack  ------------------------------
//callstack works on the concept of LIFO 

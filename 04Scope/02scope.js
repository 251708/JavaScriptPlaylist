// Immediately Invoked Function Expression(IIFE)
/*
global scope ke pollution se problem hoti h kai bar
toh us global scope ke jo variables ya vaha jo bhi declaration h uske 
pollution ko htane ke liye hmne IIFE ka use kiya h 

*/
//Named IIFE
(function food(){
    console.log(`Food Prepared`);
})();

//simple IIFE
(() => {
    console.log(`Food is made up of two things`);
})();

//simple IIFE with parameter
((vegetables) => {
    console.log(`Food is made up of ${vegetables}`)
})('green');

const bookname = ["hindi" , "history" , "science" , "socialscience", "sanskrit" , "computer"]
 const changename = bookname.map((bk) => {
    return bk.toUpperCase();
})
console.log(changename);
/* methods of using foreach-----------------------------
bookname.forEach((bk) => 
console.log(bk) )

2.---------------------------
 const name = bookname.forEach( (bk) => 
console.log(bk));
 

  const name = bookname.forEach( (bk) => {
    console.log(bk);
  /*  return bk;
  bookname.forEach((bk) => { return bk }) iterates over each element in the bookname array, but .forEach() itself doesn’t return a value or collect any return values.
So, name is set to undefined, and that's why the output of console.log(name) is undefined.
this is the reason that's why we cann't use return keyword with foreach().

 })
 */
/*

this is the use of printMe ------
 function printMe (item){
    console.log(item)
 }
 bookname.forEach(printMe);
 */
 const myCoding = [{
    languageName: "javaScript",
    languageFileName:"js"
},
{
languageName: "python",
    languageFileName:"py"
},
{
languageName: "Ruby",
    languageFileName:"rb"
}
]
/*
  myCoding.map((code) => code.languageFileName.toUpperCase())
console.log(code);
The error occurs because code is being used in console.log(code)
 outside the .map() function, but code is not defined in that scope.
  Inside the .map() function, code is the parameter representing each object in the myCoding array,
   but outside the .map(), code doesn't exist.

Key Issues:
The .map() method returns a new array based on the transformation applied in
 its callback function, but in your current code, the result is not being stored in a variable.
You're trying to log code to the console, but code is only a parameter
 inside the .map() callback, not outside it. You need to log the result of the .map() operation.

*/
 const coding = myCoding.map( (code) => code.languageFileName.toUpperCase())
console.log(coding);

myCoding.map( (code) => 
console.log(code))
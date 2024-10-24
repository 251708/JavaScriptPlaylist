const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
/*coding.forEach(  function (value) {
    console.log(value);
} )

*/
/*2-----
we can print the loop by arrow function
coding.forEach( (value) => {
    console.log(value);
})
    */
/*3-----
function printMe(item){
    console.log(item);
}
    
// hame execute nhi karna h sirf reference dena h vo apne aap print kr dega 
coding.forEach(printMe);
*/
/* 4-----
coding.forEach((item, index, arr) => {
console.log(item, index , arr);
})
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

myCoding.forEach( (item) =>{
console.log(item.languageFileName);
})

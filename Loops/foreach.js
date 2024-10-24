/*const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
const value  = coding.forEach( (item) => {
 console.log(item);
 return item  // foreach not return any value 

})
console.log(value);
*/

/*
const myNums = [1,2,3,4,5,6,7,8,9,10]
//myNums.filter(() => num > 4 )// this will return the value 
 const newNums = myNums.filter((num) => num > 4)
 console.log(newNums);

 */
/*
 const myNums = [1,2,3,4,5,6,7,8,9,10]
 const newNums = myNums.filter((num) => {
    // num > 4//  it wil give some error
     return num > 4 // when we started a scope then writting of return keyword is mondatory
 })
 console.log(newNums);
 */

 // If we want to do the same thing with forEach then we can do it like this
 /*const newNums = [1,2,3,4,5,6,7,8,9,10]
 
 newNums.forEach ( (num) => {
    if(num > 4){
        newNums.push(num)
    }
 })
 console.log(result);
 */

 const books = [
    {title:'Book One' , genre:'Fiction' , publish: 1981, edition:2004},
    {title:'Book Two' , genre:'History' , publish: 1948, edition:2002},
    {title:'Book Three' , genre:'Science' , publish: 1980, edition:2001},
    {title:'Book Four' , genre:'History' , publish: 1998, edition:2005}, 
    {title:'Book Five' , genre:'Fiction' , publish: 1983, edition:2008},
    {title:'Book Six' , genre:'Science' , publish: 1946, edition:2009},
    {title:'Book Seven' , genre:'History' , publish: 1962, edition:2001},
    {title:'Book Eight' , genre:'Fiction' , publish: 1975, edition:2004},
 ]

  /*const userbook = books.filter( (bk) => {
   return bk.genre === 'History'});
  console.log(userbook);
  */

  // Another method is without return 
   let userbook = books.filter( (bk) =>  bk.genre === 'History')
 //console.log(userbook);
 userbook = books.filter((bk) => {
     return bk.publish >= 1985 
 })
 console.log(userbook);
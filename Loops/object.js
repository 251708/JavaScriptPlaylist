// for iterating the object we can use the forin loop 
/*const myobject = {
    js : 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'Swift by apple'
}
for (const key in myobject) {
   // console.log(myobject[key]);
        console.log(`${key} shortcut is for ${myobject[key]}`);
    }
*/



    const programming = ["js", "c++", "ruby", "python","java"]
 for(const key in programming){
    console.log(key);
 }

 // arrays ki bhi keys hoti h vo bhi 0 se start hoti h vo bhi by default number hi hoti h 
 // esiliye object ko bnaya gya tha kyuki hum object ko koi bhi key de skte h 

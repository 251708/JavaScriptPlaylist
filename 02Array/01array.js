const myArr = [0,1,2,3,4,5,6,7]
console.log(myArr[0]);

//Array methods
myArr.push(9)
myArr.pop();
console.log(myArr[1]);
console.log(myArr);

myArr.unshift(8);
myArr.shift();

console.log(myArr.includes(12));
console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);


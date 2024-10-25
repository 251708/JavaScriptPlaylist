/*

const myNums = [1,2,3,4,5,6,7,8] 
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc:${acc} and currval : ${currval}`);
    return acc + currval
} , 0)
console.log(myTotal);
*/

const myNums = [1,2,3,4,5,6,7,8] 
 const myTotal = myNums.reduce( (acc, curr) => acc + curr , 0)
console.log(myTotal);

const shoppingCart = [
    {itemname: "js course",
     price: 299,
    },
    {itemname: "python",
        price: 499,
    },
       {itemname: "Artificial Intelligence",
        price: 2299,
       },

       {itemname: "Generative AI",
        price: 1299,
       },
       {itemname: "Java",
        price: 999,
       },
       {itemname: "Machine Learning",
        price: 1899,
       },
       {itemname: "cpp",
        price: 699,
       },
]

 const priceToPay = shoppingCart.reduce( ( acc,item) => acc + item.price, 0)
 console.log(priceToPay);

// 3--- Flattening an array of arrays by using reduce 
 const nestedArrays = [[1, 2], [3, 4], [5, 6]];
  const flattenedArray = nestedArrays.reduce( (acc,currval ) => acc.concat(currval));
console.log(flattenedArray);

//4----Counting Occurrences of Items in an Array  very Imp case 
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];




/*const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;  // If the fruit already exists, increment its count
    } else {
        accumulator[currentValue] = 1;  // Otherwise, start the count at 1
    }
    return accumulator;  // Return the updated accumulator object
}, {});  // initialValue is an empty object

console.log(fruitCount);  
// Output: { apple: 3, banana: 2, orange: 2 }
*/






/*Example 5: Grouping Objects by Property

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 20 }
];

const groupedByAge = people.reduce((accumulator, currentValue) => {
    const age = currentValue.age;
    if (!accumulator[age]) {
        accumulator[age] = [];  // Create a new array for this age group
    }
    accumulator[age].push(currentValue.name);  // Add the person's name to the group
    return accumulator;
}, {});  // initialValue is an empty object

console.log(groupedByAge);  
// Output: { 20: ['Bob', 'David'], 25: ['Alice', 'Charlie'] }
*/

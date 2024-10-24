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
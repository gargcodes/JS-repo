console.log("Shresth")

// Reduce js

// const array1=[1,2,3,4]
// const inv=0;
// const sum=array1.reduce(
//     (accumulator,currentvalue)=>accumulator+currentvalue,inv
// );
// console.log(sum);

shoppingCart=[
    {
        itemName:"b1",
        price:5000
    },
    {
        itemName:"b2",
        price:4000
    },
    {
        itemName:"b3",
        price:6000
    },
    {
        itemName:"b4",
        price:15000
    },
    {
        itemName:"b5",
        price:50005
    },
    {
        itemName:"b6",
        price:500000
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);


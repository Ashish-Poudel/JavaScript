const num = [1,2,3]

// const total = num.reduce( function(acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)

// const total = num.reduce ( (acc, cur) => acc + cur, 0)
// console.log(total);

const shopCart = [
    {
        name: 'js Course',
        price: 2999
    }, 
    {
        name: 'py Course',
        price: 3999
    },
    {
        name: 'ruby Course',
        price: 4999
    },
    {
        name: 'java Course',
        price: 5999
    },
]

const total = shopCart.reduce( (acc,item) => acc + item.price , 0)
console.log(total);

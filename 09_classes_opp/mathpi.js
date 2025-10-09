const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);




const book = {
    name: 'JavaScript book',
    price: 2500,
    isAvailable: true,

    orderBook: function(){
        console.log("Order Placed");
    }
}



console.log(Object.getOwnPropertyDescriptor(book, "name"));

Object.defineProperty(book, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(book, "name"));

for (let [key, value] of Object.entries(book)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
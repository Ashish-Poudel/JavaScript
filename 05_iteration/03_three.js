// for of

// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }

const hello = "Hello World"
for (const i of hello) {
//   console.log(`Each char is ${i}`);
}

// Maps
const map = new Map()
map.set('NEP', "Nepal")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const obj = {
    'game1': 'CR',
    'game2': 'Snake'
}
for (const [key, value] of obj) {
    console.log(key, ':-', value);
    
}
//Array in JS

const arr = [0,1,2,3,4,5]
const name = ["Aashish","Ram","Hari"]
const arr2 = new Array(1,2,3,4)
// console.log(arr2[0])


//Array Methods

// arr.push(6) //adds new value to the array
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(7)
// console.log(arr)

// arr.shift()
// console.log(arr)

// console.log(arr.includes(7))
// console.log(arr.indexOf(3))

// const newArr = arr.join()
// console.log(arr)
// console.log(typeof newArr)

//slice, splice

console.log("A ",arr)
const arr1 = arr.slice(1,3)
console.log(arr1)
console.log("B ",arr)

const arr3 = arr.splice(1,3) // it creates new array [0,4,5]
console.log(arr3)

//splice manipulates the original array but slice doesn't


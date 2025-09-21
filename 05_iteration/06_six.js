const coding = ['JS', 'ruby','java','python','cpp']

const values = coding.forEach( (item) => {
    // console.log(item);
    return item //forEach doesnot return any value
})
// console.log(values)

const num = [1,2,3,4,5,6,7,8,9]
// // const newNum = num.filter( (num) => num > 4 )
// const newNum = num.filter( (num) => {
//     return num > 4
// })
// // console.log(newNum)

const newNum = []
num.forEach ( (num) => {
    if(num>4){
        newNum.push(num)
    }
})
// console.log(newNum)

//database eg
// const userBooks = books.filter( (bk) => bk.genre === 'Science')
 



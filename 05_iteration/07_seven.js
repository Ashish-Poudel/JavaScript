const num = [1,2,3,4,5,6,7,8,9]
// const newNum = num.map( (num) => num + 10)
// const newNum = num.map( (num) =>{return num + 10})  //if you open scope then you have to return


const newNum = num
        .map( (num) => num * 10)
        .map( (num) => num + 1)
        .filter( (num) => num >= 40 )
console.log(newNum);
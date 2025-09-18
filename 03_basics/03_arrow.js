const user = {
    username:"Aashish",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to Website`)//this refers current context
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this)

// function example(){
//     let username = "Aashish"
//     console.log(this.username)
// }
// example()

const example = ()  => {
    let username = "Aashish"
    console.log(this)
}
// example()


// const add = (num1, num2) => {
//     return num1 + num2
// }
// console.log(add(2,3))

// const add = (num1, num2) => num1 + num2
const add = (num1, num2) => (num1 + num2)

console.log(add(2,3))
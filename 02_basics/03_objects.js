// singleton

//object literals
// Object.create

const sym = Symbol("key1")

const user = {
    name:"Aashish",
    "full name":"Aashish Poudel",
    [sym]:"key1", // we use [] to refer symbol
    age:20,
    location:'Pkr',
    email:"aashish@gmail.com",
    isLoggedIn:false,
    lastLogininDays:["Sunday,Tuesday"]
}
// console.log(user.email) // good not to use
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[sym])

user.email="poudel@gmail.com"
// Object.freeze(user)
user.email="pdlaashish@gmail.com"
// console.log(user)

user.greeting = function(){
    // console.log("Hello")
}
// console.log(user.greeting())



// const fbUser=new Object() //singleton object
const fbUser = {} //non singleton object
// console.log(fbUser)

fbUser.id = "123ab"
fbUser.name="Hari"
fbUser.isLoggedIn=false
// console.log(fbUser)

const regularUser = {
    email:"ashish@ggmail.com",
    fullname:{
        userfullname:{
            firstname:"Aashish",
            lastname:"Poudel"
        }
    }
}
// console.log(regularUser.fullname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3 = Object.assign({},obj1,obj2)
console.log(log3);

const users = {
    id:1,
    email:"aashish@gmail.com",

}
users[1].email








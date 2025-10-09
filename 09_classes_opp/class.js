// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const book = new User("Motu", "book@gmail.com", "123")

console.log(book.encryptPassword());
console.log(book.changeUsername());

// behind the scene

// function User(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }


// const newBook= new User("Patlu", "newbook@gmail.com", "123")

// console.log(newBook.encryptPassword());
// console.log(newBook.changeUsername());
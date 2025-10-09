class User {
    constructor(username){
        this.username = username
    }


    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const book = new Teacher("Ram", "ram@teacher.com", "123")

book.logMe()
const newBook = new User("aashish")

newBook.logMe()

console.log(book instanceof User);
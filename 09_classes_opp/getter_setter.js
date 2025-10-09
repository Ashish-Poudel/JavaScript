class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}poudel`
    }

    set password(value){
        this._password = value
    }
}

const pdl = new User("pdl@gmail.com", "abc")
console.log(pdl.email);
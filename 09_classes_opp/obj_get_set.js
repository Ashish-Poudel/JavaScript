const User = {
    _email: 'aashish@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const me = Object.create(User)
console.log(me.email);
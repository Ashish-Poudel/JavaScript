// let myName = "aashish    "
// let mychannel = "poudel     "

// console.log(myName.trueLength);


let movies = ["kantara", "alice"]


let heroPower = {
    kantara: "jungle",
    spiderm: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.alice}`);
    }
}

Object.prototype.aashish = function(){
    console.log(`aashish is present in all objects`);
}

Array.prototype.heyAashish = function(){
    console.log(`hello`);
}

// heroPower.aashish())
// movies.aashish()
// movies.heyAashish()
// heroPower.heyAashish()

// inheritance

const User = {
    name: "Ram",
    email: "ram@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Hari    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hari".trueLength()
"iceTea".trueLength()
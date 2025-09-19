//if statement 

// const isUserLoggedIn = true
// const temp = 40
// if(temp<50){
//    console.log("less than 50");
   
// }else{
// console.log("temp greater than 50")    
// }
// console.log("Execute")

// ///=== also check type


// const score = 300

// if (score>200){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }

// const balance = 1000

// // if(balance > 300)  console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");   
// }


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
     console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged in");
    
}
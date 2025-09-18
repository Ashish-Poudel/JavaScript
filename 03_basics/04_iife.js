// Immediately Invoked Function Expressions (IIFE)

(function connection(){
    //Named IIFE
    console.log(`DB Connected`)
})();

( (name) => {
    console.log(`DB Connected to ${name}`)
} )("Aashish")
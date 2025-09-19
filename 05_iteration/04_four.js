//forin loop

const obj = {
    js:'javascript',
    cpp:'C++',
    py:'Python',
    rb:'Ruby'
}
for (const key in obj) {
//    console.log(obj[key]); 
// console.log(`${key} shortcut is for ${obj[key]}`);
}

const programming = ['js','rb','py','java','cpp']
for (const key in programming) {
   console.log(programming[key]);
}

//for obj forin loop
//for array forof loop
// for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if (element==7) {
//         console.log("7 is here");
        
//     }
//     console.log(element);
    
// }



//Table from 1 to 10
// for (let i = 1; i <= 10 ; i++) {
//     console.log(`Table of ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//     //   console.log(`Inner loop value ${j} and inner loop ${i}`);
//      console.log(i + '*' + j + '=' + i*j);
     
//     }

// }


// let array = ['A', 'B', 'C']
// console.log(array.length);

// for (let index = 0; index < array.length; index++ ) {
//     const element = array[index];
//     console.log(element);
    
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 7){
//         console.log(`Detected 7`)
//         break
//     }
//     console.log(`Value of i is ${index}`); 
// }


for (let index = 1; index <= 20; index++) {
    if(index == 7){
        console.log(`Detected 7`)
        continue
    }
    console.log(`Value of i is ${index}`); 
}
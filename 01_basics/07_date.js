//Dates

let date=new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toJSON())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.toTimeString())
// console.log(typeof date) //object

let cdate=new Date(2025,5,27)
// console.log(cdate.toDateString())

let bdate=new Date(2025,5,27,7,37)
// console.log(bdate.toLocaleString())

let adate=new Date("2025-01-17")

let timeStamp = Date.now()
// console.log(timeStamp)
// console.log(adate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate)
console.log(newDate.getFullYear())


newDate.toLocaleString('default',{
    weekday:"short"
})


const movies = ['A','B','C']
const songs = ['X','Y','Z']

movies.push(songs)

// console.log(movies)
// console.log(movies[3][2])

// const allMovie=movies.concat(songs)
// console.log(allMovie)

// const all_new_movies = [...movies,...songs]
// console.log(all_new_movies)

console.log(Array.isArray("Aashish"))
console.log(Array.from("Aashish")) // converts into array
console.log(Array.from({name:"Aashish"})) //gives empty array

let mark1 = 10
let mark2 = 20
let mark3 = 30

console.log(Array.of(mark1,mark2,mark3))
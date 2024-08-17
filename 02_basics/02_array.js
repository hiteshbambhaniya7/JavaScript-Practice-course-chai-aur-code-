const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// now the problem is that the dc_heros array gose into marvel_heros array as an array

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] //note:.concate will return new array

//spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]; //it will allows many arrays
// console.log(all_new_heros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//FLAT

// const testArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const solvedArray = testArray.flat(Infinity);
// console.log(solvedArray); //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5];


//Array.from()

// console.log(Array.isArray("Hitesh")) // false
// console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:"Hitesh"} , {age:27})) //[]

//Array.of()
let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3)) // [ 200, 300, 400 ]
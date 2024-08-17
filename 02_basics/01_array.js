//Array

const myArray = [0,1,2,3,4,5]
// console.log(myArray[0]) // 0

const myArray2 = new Array(1,2,3,4)
// console.log(myArray2[1]) //2

//Array mathods

// myArray.push(6)
// console.log(myArray) // new array will be [0,1,2,3,4,5,6]

// myArray.pop() //.pop() mathod will remove last value
// console.log(myArray) // new array will be [0,1,2,3,4,5]

// myArray.unshift(9) // 9 will add starting of array
// console.log(myArray) // [9, 0, 1, 2, 3, 4, 5]

// myArray.shift() //first value will be removed
// console.log(myArray) //[ 0, 1, 2, 3, 4, 5 ]

//ask to array
// console.log(myArray.includes(2)) //true
// console.log(myArray.indexOf(2)) //2

//JOIN
// const  newArray = myArray.join()

// console.log(newArray) //"0,1,2,3,4,5"
// console.log(typeof newArray) //string

//SLICE , SPILICE

// console.log("A " , myArray)

// const myNewArr1 = myArray.slice(1,3)
// console.log("NEW " ,myNewArr1) //[1, 2] //it will return the sliced value ,without changing original array
// console.log("B " ,myArray) // [ 0, 1, 2, 3, 4, 5 ]

// const myNewArr2 = myArray.splice(1,3)
// console.log("NEW " ,myNewArr2) // [ 1, 2, 3 ] //it will return the spliced value from original array , original will be changed
// console.log("C " ,myArray) // [ 0, 4, 5 ]


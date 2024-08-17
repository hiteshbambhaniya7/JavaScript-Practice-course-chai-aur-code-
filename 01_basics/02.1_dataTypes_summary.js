//primitive data types
// 7 types

// NNBBSSU
//null,number,bigInt,boolean,string,symbol,undefined

//symbol example
const id = Symbol('123')
const id2 = Symbol('123')
console.log(id===id2) //false
console.log(id) //Symbol('123')
console.log(id2) //Symbol('123')
// note:both id and id2 outputs the same but both are unique , because of Symbol

//bigInt example
const bigNum = 5688284528959284582485285n
console.log(typeof bigNum) //bigint



// (Non-primitive) Referance

// Array , Objects , functions

//Array example
const heroes = ["shaktiman" ,"krish","doga"]

//Object example (key:value pairs)
const myObj = {name:"hitesh" , age:"27"}
console.log(typeof myObj) //object

//function example
const myFunction = function(){
    console.log("This is my function")
}  

console.log(typeof myFunction) //function


// -------------------------------------------------------------------------------------------

// memory types
// STACK(primitive) - HEAP(non-primitive)

//example of stack-memory

let myYTname = "helloYTchannel"

let anotherName = myYTname

anotherName = "anotherYTname"

console.log("myYTname :" ,myYTname)
console.log("anotherName :" ,anotherName)


// example of heap-memory

let obj1 = {name:"hitesh"}
console.log(obj1) // {name:"hitesh"}

let obj2 = obj1 //access value of original object

obj2.name = "anotherName" // this will change the value of original object

console.log("obj2 : " , obj2) // {name:"anotherName"}
console.log("obj1 : " , obj1) // {name:"anotherName"}



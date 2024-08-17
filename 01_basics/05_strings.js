//String
const myString = new String ("myWorld")

console.log(myString.length) // 7
console.log(myString.__proto__) //{}
console.log(myString[0]) // "m"
console.log(myString.toLowerCase()) // string will be lower case" // "myworld"
console.log(myString.toUpperCase()) // string will be upper case " // "MYWORLD"
console.log(myString.charAt(4)) // find charecter from position " // "r"
console.log(myString.indexOf("d")) // find index from charecter " // 6

const subStr = myString.substring(0,4)
console.log("sub string : " ,subStr) //"myWo"

//slice
const sliceStr = myString.slice(0 , 3)
console.log("slice string : " ,sliceStr) // "myW"

const sliceStr2 = myString.slice(-4 , 6)
console.log("slice string with nagative value : " ,sliceStr2) //"orl"

//trim
const trimStr = "    hitesh     "
console.log("original string :" ,trimStr) // "    hitesh    "
console.log("trim string :" ,trimStr.trim()) //"hitesh" (trim extra spaces)

//replace

const url = "http://www.youtube.com/test%20url"

console.log("original url :" ,url) // "http://www.youtube.com/test%20url"
console.log("updated url :" ,url.replace('%20' , '-')) // "http://www.youtube.com/test-url"

//includes

console.log(url.includes("youtube")) //true
console.log(url.includes("dummy")) //false

//string to array //split mathod

const fullName = "hitesh s bambhaniya"

console.log("Full Name Array : ",fullName.split(" ")) // [ 'hitesh', 's', 'bambhaniya' ]
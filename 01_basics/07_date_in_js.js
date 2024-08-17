// Dates

let myDate = new Date()

console.log(typeof myDate) //object

console.log(myDate) //2024-08-16T09:32:47.440Z
console.log(myDate.toString()) //Fri Aug 16 2024 15:03:56 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()) //2024-08-16T09:35:18.509Z

console.log(myDate.toDateString()) //Fri Aug 16 2024
console.log(myDate.toTimeString()) //15:06:22 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()) // 16/8/2024, 3:05:50 pm
console.log(myDate.toLocaleDateString()) // 16/8/2024
console.log(myDate.toLocaleTimeString()) // 3:05:50 pm

console.log(myDate.toUTCString()) // Fri, 16 Aug 2024 09:37:53 GMT

// specific date
const spDate = new Date(2024 , 0 , 23) //month start with 0
console.log(spDate.toDateString()) //Tue Jan 23 2024

//current time ms
const myTimeStamp = Date.now()
console.log(myTimeStamp) //1723802068621 //current date-time miliseconds


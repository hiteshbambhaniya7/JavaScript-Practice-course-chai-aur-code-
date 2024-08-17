console.log("Hello world!");

//if i have this type of data ["02:30" , "03:15" , "04:30" , "05:10"]
//how to get total hours

let userTime = ["02:30" , "03:15" , "04:30" , "05:10"]

//calculate total minutes then after convert into hours

let totalMinutes = userTime.reduce((acc, time) => {
  let [hours, minutes] = time.split(":").map(Number);
  return acc + (hours * 60) + minutes;
}, 0);

let totalHours = Math.floor(totalMinutes / 60);
let remainingMinutes = totalMinutes % 60;



console.table(["Total Hours " + totalHours ,"Total minutes" + remainingMinutes])












// let userTime = [
//   { Hour: 2, minutes: 30 },
//   { Hour: 5, minutes: 43 },
//   { Hour: 4, minutes: 59 },
//   { Hour: 7, minutes: 20 },
// ];

// //calculate total minutes then after convert into hours

// let totalMinutes = userTime.reduce((acc, { Hour, minutes }) => {
//   return acc + (Hour * 60) + minutes;
// }, 0);

// let totalHours = Math.floor(totalMinutes / 60);
// let remainingMinutes = totalMinutes % 60;

// console.table(["Total Hours " + totalHours ,"Total minutes" + remainingMinutes])


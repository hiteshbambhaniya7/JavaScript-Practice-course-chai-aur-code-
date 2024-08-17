// ------------------------- Num -------------------------------

const score = 500;
console.log(score); //500

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length); //3

console.log(balance.toFixed(2)); //100.00

//Precision
const num = 1234.893323;
console.log(num.toPrecision(4)); //1235 (use precision value more than number length)

const amount = 10000000;
console.log(amount.toLocaleString()); //1,00,00,000 indian
console.log(amount.toLocaleString("en-US")); //10,000,000 us

// ----------------------------------- Math ----------------------------------

const value = 24.5;

console.log(Math); // {}
console.log(Math.round(value)); // 25
console.log(Math.round(4.4)); // 4
console.log(Math.ceil(4.1)); // 5    // ceil (ceiling)
console.log(Math.floor(4.1)); // 4    // floor
console.log(Math.min(2, 8, 9, 4, 3)); // 2
console.log(Math.max(2, 8, 9, 4, 3)); // 9 

console.log(Math.random()) //0.5045578656073006 //any randome number between 0 and 1
console.log(Math.random()*10) //1.784671618504019 // multiple randome numbers with 10
console.log(Math.floor(Math.random()*10) + 1) //8 random one digit number

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min) //random number between min and max


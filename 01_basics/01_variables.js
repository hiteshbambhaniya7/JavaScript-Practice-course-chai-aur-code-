const accoutnId = 1234;
let email = "hitest@gmail.com";
var password = "0101";

let state; //if variable has no value , it will consider undefined

//accoutnId = 2222; // this line gives you error , because accountId is declared using const

email = "hitest@yahoo.com"; // this line is correct

password = "023211"; // this line is correct
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.log(accoutnId);

console.table([email, password,state]); // console.table([email, password]) will display multiple variables values in table formate like this
// ┌─────────┬────────────────────┐
// │ (index) │ Values             │
// ├─────────┼────────────────────┤
// │ 0       │ 'hitest@yahoo.com' │
// │ 1       │ '010101'           │
// │ 2       │ undefined          │
// └─────────┴────────────────────┘
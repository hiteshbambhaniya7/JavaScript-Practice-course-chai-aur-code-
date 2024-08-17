//  Object Literals

const mySym= Symbol("key1");

const person1 = {
  name: 'John Doe',
  age: 30,
  [mySym] : "key1_value", //symbols are define this way // output: [Symbol(key1)]: 'key1_value'
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  },
  hobbies: ['reading', 'painting', 'cooking']
};

// console.log(person1["name"]); // "John Doe"
// console.log(person1.age);   // 30

// //Object.freeze
// Object.freeze(person1) //Object.freeze(person1) will freeze falues

// person1.age = 35;

// console.log(person1.age); // 30


//function
person1.greetings1=function(){
  console.log("Hello! this is greetings1 function") 
}
person1.greetings2 = function(){
  console.log(`Hello! this is greetings2 function, ${this.name}`) 
}

console.log(person1.greetings1()) //Hello! this is greetings1 function
console.log(person1.greetings2()) //Hello! this is greetings2 function, John Doe


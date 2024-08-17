const User = new Object(); //singleton object
const User2 = {}; //non-singleton object
// note : two   method to define objects
console.log(User); //{}
console.log(User2); //{}

const regularUser = {
  email: "john@test.com",
  fullname: {
    firstname: "John",
    lastname: "Doe",
  },
};
console.log(regularUser.fullname); //{ firstname: 'John', lastname: 'Doe' }

//
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = {obj1 , obj2} 
console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//if want to merge objects
const obj4 = Object.assign({} , obj1,obj2) // empty{} for ensure that the result will be store into the object (it's optional) //synax : Object.assign(target , source) //for more : https://rb.gy/d8j4j1
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//for spread operator

const obj5 = {...obj1,...obj2}
console.log(obj5) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//extra keys,values,entries
console.log(Object.keys(regularUser)) //[ 'email', 'fullname' ]
console.log(Object.values(regularUser)) //[ 'john@test.com', { firstname: 'John', lastname: 'Doe' }]
console.log(Object.entries(regularUser)) //[[ 'email', 'john@test.com' ],[ 'fullname', { firstname: 'John', lastname: 'Doe' } ]]

//ask to object
console.log(regularUser.hasOwnProperty('isLoggedIn')) //false

// for more : https://rb.gy/d8j4j1
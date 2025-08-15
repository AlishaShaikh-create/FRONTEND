// Spread
// Expands an iterable into multiple values.
let arr=[1,2,3,4,5,6,7,8]
console.log(...arr);

console.log(..."AlishaShaikh");

// storing values in the newarr
let newarr=[...arr];
console.log(newarr);

let str="AlishaShiakh";
let newstr={...str};//here we have stored it in the object
console.log(newstr)

//combining 2 arrays
let odd=[1,3,5,7,9];
let even=[2,4,6,8,10];
let number=[...odd,...even]
console.log(number);

//spread with objects
const data={
    email:"doreamon@gmail.com",
    password:"abcd"
}
const datacopy={...data,id:123};
console.log(datacopy);
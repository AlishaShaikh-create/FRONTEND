// Arrow function syntax
// const func=(arg1,agr2,...)=>{function definition}
//arrow function are name less function

//EXAMPLE:
const sum=(a,b)=>{
    console.log(a+b);
}
sum(2,3);

const cube= n =>{
    console.log(n*n*n);
}
//if we have single argument then we can there is no need of writing the parenthesis
cube(3);

const print=()=>{
    console.log("hello world:)");
}
print();

// IMPLICIT RETURN
// if the arrow function do not print or calculate the value it just return the value then we can even not use the return keyword.
const mul=(a,b)=>a*b ;
console.log(mul(2,3));


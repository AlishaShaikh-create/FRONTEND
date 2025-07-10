//varibles in js
// varibles in js 
// var 
// let 
// const

// 1.var
// old syntax
// var has no block scope
// var varibles are either functional scope or global scope
var num=10;
var num=10;
console.log(num);
// but if we try to do same with let it shows an error 
// let number=10;
// let number=10;

//SyntaxError: Identifier 'number' has already been declared

// “var” variables can be declared below their use
function variables(){
    msg="hello";//varible is not declerd but value is assined
    if(false){
        var msg;//varible is declare here
    }
    console.log(msg);
}
variables();

// the above concept is known as hoisting

// varibles NAMING

// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

//javascript is case sensative language

num=10//with out using any keyword it has created a varible num
console.log(num);

"use strict";
let x = 10; // Works fine
y = 20;     // Throws error: y is not declared

// var has lexical scope


// 2.let
// blocked scope


//3.const
//const – is like let, but the value of the variable can’t be changed.


console.log(2+2+'4')//44
console.log('1'+2+2);//122
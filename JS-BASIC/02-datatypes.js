//Data types
// 8 types of data types 
// JS is dynamically typed language.. 
// that is we do not need to write any type of varibale 
let msg='hello';
msg=1.2;//lexical scope
console.log(msg);
//Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
console.log(1/0);//Infinity
console.log(Infinity);

console.log(-1/0);//-Infinity

console.log( "not a number" / 2 ); // NaN, such division is erroneous

// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

// NaN ==NaN true
//The number data type can store upto range of ±(2**(53)-1) 
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); //this is beyond a particular range
// to over come this big int was used
// A BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
// const bigInt = 1234567890123456789012345678901234567890n;

// 3.Strings
let msg1="hello";
console.log(msg1);
//4.Boolean
let value=true;
console.log(value);
console.log(typeof value);//boolean
//5.null
let a=null;
console.log(a);
console.log(typeof a);//The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.


//typeof is an operator not an function
console.log(typeof a);
console.log(typeof(a));

//6.undefined
let b;
console.log(b,typeof b);

//7.symbol

//8.object 
//complex data type that does not store single value
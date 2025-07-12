//operator in js
/* 1.Arithmatic operator
a+b;
a,b is operand and + is operator
+ addition
- subtaction
* multiplication
/ division
% modulo remainder 
** exponential

*/
// to print square root 
console.log(4 ** (1/2));
console.log(8 **(1/3));

// + which is used for addition is also used for concatination in strings 
console.log("hello"+"world")//hello world
console.log(1+"world")//1world here 1 is considered as string
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
//but if we take 
console.log( '1' + 2+2 ); // "122"
console.log( 2 +2+ '1' ); // "41"
// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".

//The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0
let apple="2";
let grapes="3";
console.log(apple+grapes);//23
console.log(+apple + +grapes)//5

//operator precedence
// 1. unary +
// 2.unary -
// 3.** exponetial
// 4.multiplication *
// 5 /
// 6.+
// 7.-

//increment /decrement operator 
//Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.


console.log("  -9  " + 5) // "  -9  5" //+ concat string
console.log("  -9  " - 5 ) // -14 //it convert it to number

//COMPARISION OPERATOR
// > greater than
// < less than
// <= lessthan or equal to
// >=greater than or equal tool
// == equal too (does not check type)
// === equal too (check the type as well)
// != not equal too
//!==

// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.
console.log('A'>'Z');//false
console.log('2'<1)//false '2' is converted to numbers then compared 
console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0)//true

//Logical operator
// Truth Tables

/**
 * Logical AND operator (&&)
 *  A   B   A && B
 *  0   0      0
 * 0    1      0
 * 1    0      0
 * 1    1      1
 * 
 * Logical OR operator (||)
 *  A   B   A || B
 *  0    0       0
 *  0    1      1
 *  1    0      1
 *  1    1      1
 * 
 * Logical NOT (!)
 *  A   !A
 *  0    1
 *  1    0
 */

// console.log('AND'); // it will find the first false
// console.log(false && false);  // false
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(true && true); // true
// console.log(100 && 40 && 30);
// console.log(110 && 40 && 0 && 15);
// console.log(100 && 40 && "" && 15);
// console.log(100 && 0 && 46 && 384 && 56);
// console.log(100 && 40 && undefined && 15);
// console.log(100 && 40 && null && 15);

// Falsy Values = 0 = false
/**
 * 0
 * Empty String
 * undefined
 * null
 * false
 * NaN
 */

console.log('OR');
// console.log(false || false); // false
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(100 || 40 || 30); // true
// console.log(100 || 40 || 0 || 15); // true
// console.log(100 || 40 || "" || 15); // true 
// console.log(100 || 0 || 46 || 384 || 56); // true
// console.log(100 || 40 || undefined || 15); // true
// console.log(100 || 40 || null || 15); // true
// console.log("" || 0 || undefined || null || NaN | "hello"); // assginment
// console.log("" || "7")

console.log("NOT");
console.log(!false);


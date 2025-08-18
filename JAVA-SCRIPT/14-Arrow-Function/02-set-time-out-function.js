//SET TIMEOUT FUNCTION
// The setTimeout() method calls a function after a number of milliseconds.
//it is an method of the window object
// 1 sec=1000 millisecond
//The setTimeout() is executed only once.

// SYNTAX:
// setTimeout(function,timeout)
// setTimeout takes 2 things as a parameter
//  1.function it can be anything normal function or arrow function
//  2.timeout :it shows after how much of time the function should get executed.

console.log("hi there!");
setTimeout(()=>{
    console.log("I will execute after the 5 seconds")
},5000);
console.log(" I was written after the setTimeout function but i will get executed before it..Don't believe check the code :)")
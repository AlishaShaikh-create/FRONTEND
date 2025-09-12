//Single threaded nature of javascript
// to achieve  the single the threaded nature of js we use setTimeout 

console.log("I am before the setTimeout function");

setTimeout(()=>{
    console.log("hello world")
},2000);

console.log("I am after the setTimeout function");






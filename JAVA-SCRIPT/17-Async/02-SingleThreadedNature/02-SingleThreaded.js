//Single threaded nature of javascript


console.log("I am before the setTimeout function");

setTimeout(()=>{
    console.log("hello world")
},2000);

console.log("I am after the setTimeout function");
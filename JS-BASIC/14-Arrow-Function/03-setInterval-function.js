//SET INTERVAL
//SYNTAX:
// setInterval(function,timeout)
// the setInterval function executes every time after the specified time

// The major difference between the set timeout and setInterval is that setTimeout executes only once but the setInterval executes everytime after the specified time.

//Example:
let id=setInterval(()=>{
    console.log("hello world");
},2000);



let id1=setInterval(()=>{
    console.log("hello ..");
},1000);
 clearInterval(id);// This will stop the execution of the  set interval of specified id

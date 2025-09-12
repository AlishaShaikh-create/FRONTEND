//To create an async function just write async keyword before the function

//throw keyword is used to throw the error
//if the async function get resolved then the then block get execute or else the catch block get execute
async function greet()
{
    // return "hello";
    throw "some random error";
}
greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log(result);
})
.catch((error)=>{
    console.log("The error was catch");
    console.log(error);
})